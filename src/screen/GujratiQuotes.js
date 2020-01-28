import React, {Component} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {quote} from '../store/action';
import Quotes from '../component/Quote';
import colors from '../config/colors';

class Gujrati extends Component {
  constructor() {
    super();
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
              addShare={() => this.props.share(item.id, 'Gujrati')}
              toggleOpen={() =>
                this.props.userInfo == null
                  ? this.props.navigation.navigate('Login')
                  : this.props.like(item.id, 'Gujrati')
              }
            />
          );
        }}
        keyExtractor={(item, index) => `${index}`}
        ListFooterComponent={() => (
          <ActivityIndicator color={colors.primary_color} size={'small'} />
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  quote: state.quote.get('gujratiQuotes'),
  userInfo: state.user.token,
});
const mapDispatchToProps = {
  getQuotes: quote.getGujratiQuotes,
  share: quote.addShare,
  like: quote.addLike,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gujrati);

export default quoteWrapper;
