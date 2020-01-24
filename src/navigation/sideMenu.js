import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {user} from '../store/action';
import styles from './style';
import colors from '../config/colors';
import Popup from '../component/Popup';
import Login from '../component/Login';

class Sidebar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = CommonActions.navigate({
      name: route,
    });
    this.props.props.navigation.dispatch(navigateAction);
  };

  menu(text, icon, screenName) {
    return (
      <TouchableOpacity
        style={[styles.menuContainer]}
        onPress={this.navigateToScreen(screenName)}>
        <Icon
          style={{margin: 5}}
          name={icon}
          color={colors.primary_color}
          size={25}
        />
        <Text style={styles.txtMenu}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {name, email, profile_url,id} = this.props.user.user;
    console.log(id)
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.2, y: 1.3}}
          colors={['#f05d5b', '#f7908e', '#f05d5b', '#f8a3a2', '#f05d5b']}
          style={styles.profileContainer}>
            {id == null ? <View style={[styles.imageContainer,{
                backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}]}>
                  <Icon name={'format-quote'} size={30} color={colors.primary_color}/>
              </View> :
              <View style={styles.imageContainer}>
              <Image source={{uri: profile_url}} style={styles.image} />
            </View>}
          
          
          <Text
            style={[
              styles.txtMenu,
              {fontSize: 18, fontFamily:'Roboto', color: '#FFF'},
            ]}>
            {name}
          </Text>
          <Text style={[styles.txtMenu, {color: '#fff', fontSize: 12}]}>
            {email}
          </Text>
        </LinearGradient>
        <View style={{flex: 1, margin: 10}}>
          {this.menu('Hindi Quotes', 'language', 'Hindi')}
          {this.menu('Gujrati Quotes', 'language', 'Gujrati')}
        </View>
        <View
          style={{
            padding: 5,
          }}>
          <TouchableOpacity
            onPress={() =>
              id == null ? this.popup.toggleOpen() : this.props.logOut()
            }
            style={[styles.menuContainer,{justifyContent:'center'}]}>
            <Text style={[styles.txtMenu, {color: colors.primary_color}]}>
              {id == null ? ' Sign In' : 'Sign Out'}
            </Text>
          </TouchableOpacity>
        </View>
        <Popup ref={inst => (this.popup = inst)}>
          <Login
            onLogin={body => {
              this.props.login(body);
              this.popup.toggleClose();
            }}
          />
        </Popup>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = {
  login: user.userLogIn,
  logOut: user.userLogOut,
};
const SliderWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
export default SliderWrapper;
