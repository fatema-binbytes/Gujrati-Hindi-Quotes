import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {quote} from '../store/action';
import Quotes from '../component/Quote';
import colors from '../config/colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      end: false,
    };
  }
  componentDidMount() {
    this.props.getQuotes(this.state.page);
  }
  handleMore() {
    if(this.props.end){
      this.setState({end:true});
    }
    else {
      this.setState({page: this.state.page + 1});
      this.props.getQuotes(this.state.page);
    }
    
  }
  render() {
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
                this.props.userInfo == null
                  ? this.props.navigation.navigate('Login')
                  : this.props.like(item.id, 'Hindi')
              }
            />
          );
        }}
        ListFooterComponent={() => (
          !this.state.end  ? <ActivityIndicator color={'#663399'} size={'small'} />
        : <View/>)}
        keyExtractor={(item, index) => `${index}`}
      />
    );
  }
}

const mapStateToProps = state => ({
  quote: state.quote.get('hindiQuotes'),
  userInfo: state.user.token,
  end: state.ui.get('EndQuotes'),
});
const mapDispatchToProps = {
  getQuotes: quote.getHindiQuotes,
  share: quote.addShare,
  like: quote.addLike,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default quoteWrapper;
