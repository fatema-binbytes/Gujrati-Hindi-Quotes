import React, {Component} from 'react';
import {View,FlatList, ActivityIndicator,Button} from 'react-native';
import {connect} from 'react-redux';
import {quote,user} from '../store/action';
import Quotes from '../component/Quote';
import colors from '../config/colors';
import Popup from '../component/Popup';
import Login from '../component/Login';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      share: 100,
      like: 20,
      itemId:null,
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
  like() {
    this.setState({like: this.state.like + 1})
  }
  render() {
    return (
      <View>
        <FlatList
        onEndReached={() => this.handleMore()}
        onEndReachedThreshold={1}
        data={this.props.quote.toJS()}
        renderItem={({item}) => {
          return (
            <Quotes
              item={item}
              addShare={() => this.props.share(item.id,'Hindi')}
              toggleOpen={() => this.props.userInfo == null
                ? this.popup.toggleOpen()
                : this.props.like(item.id,'Hindi')}
            />
          );
        }}
        ListFooterComponent={() => (
          <ActivityIndicator color={colors.primary_color} size={'small'} />
        )}
        keyExtractor={(item, index) => `${index}`}
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
  quote: state.quote.get('hindiQuotes'),
  userInfo: state.user.token,
 });
const mapDispatchToProps = {
  getQuotes: quote.getHindiQuotes,
  login: user.userLogIn,
  share: quote.addShare,
  like: quote.addLike,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default quoteWrapper;
