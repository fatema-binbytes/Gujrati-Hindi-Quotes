import React, {Component} from 'react';
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Search extends Component {
  render() {
    const {icon,onPress} = this.props;
    
    return (
        <TouchableOpacity onPress={onPress}>
        <Icon
          name={icon}
          size={22}
          style={{margin: 8, padding: 5}}
          color={'#fff'}
        />
      </TouchableOpacity>
    );
  }
}
export default Search;
