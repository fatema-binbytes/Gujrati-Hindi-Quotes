import React,{ Component } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './button-styles';
import colors from '../config/colors';

class Buttons extends Component {
    render() {
        const {name,onPress} = this.props
        return (
           <TouchableOpacity style={styles.icon}
                onPress={onPress}>
                <Icon name={name} color={colors.primary_color} size={25}/>
            </TouchableOpacity>
        );
    }
}

export default Buttons;