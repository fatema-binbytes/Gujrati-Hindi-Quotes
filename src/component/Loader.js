import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import style from './loader-style';

class Loader extends Component {
    render() {
        const {size, color} = this.props;
        return(
        <View style={style.container}>
            <ActivityIndicator
                style={style.container}
                size={size}
                color={color}
            />
        </View>
        )
    }
}
export default Loader;