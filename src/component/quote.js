import React,{ Component } from 'react';
import {View,Text, TouchableOpacity,Clipboard,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './quote-styles';
import Share from 'react-native-share';

class quote extends Component {
    state = {  }
    render() {
        const {text} = this.props.item
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>{text}</Text>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <TouchableOpacity style={styles.icon}
                        onPress={() => { 
                            Clipboard.setString(text);
                            ToastAndroid.show('Text Copied',ToastAndroid.SHORT);
                    }}>
                        <Icon name={'content-copy'} color={'#FFF'} size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => Share.open({url: text})}>
                        <Icon name={'share-variant'} color={'#FFF'} size={20}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

export default quote;