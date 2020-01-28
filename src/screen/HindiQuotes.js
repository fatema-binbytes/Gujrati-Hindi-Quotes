import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {quote} from '../store/action';
import Quotes from '../component/Quote';
import colors from '../config/colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    this.props.getQuotes(this.state.page);
  }

  render() {
    return (
      <FlatList
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
          <ActivityIndicator color={colors.primary_color} size={'small'} />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    );
  }
}

const mapStateToProps = state => ({
  quote: state.quote.get('hindiQuotes'),
  userInfo: state.user.token,
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
