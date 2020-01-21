import React, {Component} from 'react';
import {View,FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {quote,user} from '../store/action';
import Quotes from '../component/Quote';
import colors from '../config/colors';
import Popup from '../component/Popup';
import Login from '../component/Login';

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
      <View>
        <FlatList
          onEndReached={() => this.handleMore()}
          onEndReachedThreshold={1}
          data={this.props.quote.toJS()}
          renderItem={({item}) => {
            return  <Quotes
              item={item}
              addShare={() => this.props.share(item.id,'Gujrati')}
              toggleOpen={() => this.props.userInfo == null
                ? this.popup.toggleOpen()
                : (this.props.like(item.id,'Gujrati'))}
            />;
          }}
          keyExtractor={(item, index) => `${index}`}
          ListFooterComponent={() => (
            <ActivityIndicator color={colors.primary_color} size={'small'} />
          )}
        />
         <Popup ref={inst => (this.popup = inst)}>
          <Login
             onLogin={body => {
              this.props.login(body);
              this.popup.toggleClose()
            }}
          />
        </Popup>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  quote: state.quote.get('gujratiQuotes'),
  userInfo: state.user.token,
});
const mapDispatchToProps = {
  getQuotes: quote.getGujratiQuotes,
  login: user.userLogin,
  share: quote.addShare,
  like: quote.addLike,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gujrati);

export default quoteWrapper;
