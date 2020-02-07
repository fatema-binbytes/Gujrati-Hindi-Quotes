import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import OneSignal from 'react-native-onesignal';
import {quote} from '../store/action';
import Quotes from '../component/Quote';
import Loader from '../component/Loader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      end: false,
    };
    OneSignal.init('6aa7395e-65fe-4173-9926-805a6a28bbac');
  }
  componentDidMount() {
    this.props.getQuotes(this.state.page, 'Hindi');
  }
  handleMore() {
    if (this.props.end) {
      this.setState({end: true});
    } else {
      this.setState({page: this.state.page + 1}, () =>
        this.props.getQuotes(this.state.page, 'Hindi'),
      );
    }
  }
  render() {
    if (this.props.loading) {
      return <Loader size={'large'} color={'#663399'} />;
    } else {
      return (
        <FlatList
          onEndReached={() => this.handleMore()}
          onEndReachedThreshold={1}
          data={this.props.quote.toJS()}
          renderItem={({item}) => {
            return (
              <Quotes
                item={item}
                addShare={() => this.props.share(item.id, 'Hindi')}
                toggleOpen={() =>
                  this.props.userInfo.toJS().token == null
                    ? this.props.navigation.navigate('Login')
                    : this.props.like(item.id, 'Hindi')
                }
              />
            );
          }}
          ListFooterComponent={() =>
            !this.state.end ? (
              <Loader color={'#663399'} size={'small'} />
            ) : (
              <View />
            )
          }
          keyExtractor={(item, index) => `${index}`}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  quote: state.quote.get('hindiQuotes'),
  userInfo: state.user.get('info'),
  end: state.ui.get('EndQuotes'),
  loading: state.ui.get('IsLoading'),
});
const mapDispatchToProps = {
  getQuotes: quote.getQuotes,
  share: quote.addShare,
  like: quote.addLike,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default quoteWrapper;
