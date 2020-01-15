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
  async componentDidMount() {
    this.props.getQuotes(this.state.page);
    this.load();
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
          return (
            <Quotes
              item={item}
              like={this.state.like}
              share={this.state.share}
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
 });
const mapDispatchToProps = {
  getQuotes: quote.getHindiQuotes,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default quoteWrapper;
