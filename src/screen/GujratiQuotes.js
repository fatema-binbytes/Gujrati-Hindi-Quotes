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
      share: 100,
      like: 20,
      quotes: [],
    };
  }
  load() {
    const quotes = this.props.quote.toJS();
    for (let i = 0; i <= 24; i++) {
      const newQuote = quotes[i];
      this.state.quotes.push(newQuote);
      this.setState({quotes: this.state.quotes});
    }
  }
  componentDidMount() {
    this.props.getQuotes(this.state.page);
  }

  handleMore() {
    this.setState({page: this.state.page + 1});
    this.props.getQuotes(this.state.page);
    this.load();
  }

  render() {
    return (
      <FlatList
        onEndReached={() => this.handleMore()}
        onEndReachedThreshold={1}
        data={this.props.quote.toJS()}
        renderItem={({item}) => {
          return <Quotes item={item} />;
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
});
const mapDispatchToProps = {
  getQuotes: quote.getGujratiQuotes,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gujrati);

export default quoteWrapper;
