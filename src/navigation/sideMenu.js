import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './style'
import colors from '../config/colors'

class Sidebar extends Component {
    navigateToScreen = route => () => {
        const navigateAction = CommonActions.navigate({
            name: route
        })
        this.props.props.navigation.dispatch(navigateAction)
      }

      menu(text, screenName, style = null, onPress = null) {
        return (
          <TouchableOpacity
            style={[styles.menuContainer, style]}
            onPress={onPress ? onPress : this.navigateToScreen(screenName)}
          >
              {/* <Icon name={'heart'} color={colors.primary_color} size={30}/> */}
            <Text style={styles.txtMenu}>{text}</Text>
          </TouchableOpacity>
        )
      }

  render() {
      console.log(this.props.props)
    return (
      <View style={styles.container}>
        {/* <View style={styles.profileContainer}>
              <View style={{height:70,width:70,
                borderRadius:70,
                backgroundColor:colors.primary_color,alignItems:'center',justifyContent:'center'}}>
                  <Icon name={'format-quote-close'} size={30} color={'#fff'}/>
              </View>
            <Text style={[styles.txtMenu, { fontSize: 20,fontWeight:'bold' }]}>
              {'Quote-World'}
            </Text>
              <Text style={[styles.txtMenu, { fontSize: 12,marginLeft:0,margin:5 }]}>{'where you can find all kind of Quotes'}</Text>
          </View> */}
          <View style={{flex:1}}>
            {this.menu( 'Hindi Quotes', 'Hindi'
            )}
            {this.menu( 'Gujrati Quotes','Gujrati')}

          </View>
        </View>
    )
  }
}

export default Sidebar
