import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Search extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name={'arrow-left'}
            size={22}
            style={{margin: 8, padding: 5}}
            color={'#000'}
          />
        </TouchableOpacity>
        <TextInput placeholder={'Search'} autoFocus={true} />
      </View>
    );
  }
}
export default Search;
