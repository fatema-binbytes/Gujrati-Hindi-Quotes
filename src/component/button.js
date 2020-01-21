import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import styles from './button-styles';
import colors from '../config/colors';

class Buttons extends Component {
  render() {
    const {name, onPress, text,icons} = this.props;
    return (
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        {icons ? <Icons name={name} color={'#f7ebeb'} size={18} />:
        <Icon name={name} color={'#f7ebeb'} size={20} />
    }
        {text ? (
          <Text style={styles.txt}>{text}</Text>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    );
  }
}

export default Buttons;
