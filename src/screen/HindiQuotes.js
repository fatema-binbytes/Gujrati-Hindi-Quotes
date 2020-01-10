
import React, { Component } from 'react';
import {FlatList,Text,View ,ActivityIndicator,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {quote} from '../store/action';
import Quotes from '../component/quote';
import colors from '../config/colors';
import firebase from '@react-native-firebase/app';

class Home extends Component {
  constructor(){
    super();
    this.state={
      page:1,
    }
  }
  componentDidMount() {
    this.props.getQuotes(this.state.page);
    };
   
  loadMore() {
    this.setState({page:this.state.page + 1 });
    this.props.getQuotes(this.state.page);
  };
  render() {
    return(
      <View>
          <FlatList 
          onEndReached={() => this.loadMore()}
          onEndReachedThreshold={1}
          initialNumToRender={25}
          data={this.props.quote.toJS()}
          renderItem={({item}) => {
            return(
              <Quotes item={item}/>
            )
          }}
          ListFooterComponent={() => (
            <ActivityIndicator color={colors.primary_color} size={"small"} />
          )}
          keyExtractor={(item,index) => `${index}`}
        />
      </View>
     
    )
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
