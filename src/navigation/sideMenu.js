import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {user} from '../store/action';
import styles from './style';
import colors from '../config/colors';

class Sidebar extends Component {
  state = {
    screen: 'Hindi',
  };
  navigateToScreen = route => () => {
    this.setState({screen: route});
    const navigateAction = CommonActions.navigate({
      name: route,
    });
    this.props.props.navigation.dispatch(navigateAction);
  };

  menu(text, icon, screenName) {
    return (
      <TouchableOpacity
        style={[
          styles.menuContainer,
          this.state.screen === screenName ? styles.active : styles.unActive,
        ]}
        onPress={this.navigateToScreen(screenName)}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={[styles.txtMenu, {color: colors.drawer_font_pink}]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {name, email, profile_url, id} = this.props.user.toJS().user;
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          {id == null ? (
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.2, y: 1.3}}
              colors={colors.linear_gradient_color}
              style={[
                styles.imageContainer,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Icon name={'format-quote'} size={40} color={'#fff'} />
            </LinearGradient>
          ) : (
            <View style={styles.imageContainer}>
              <Image source={{uri: profile_url}} style={styles.image} />
            </View>
          )}
          <Text
            style={[
              styles.txtMenu,
              {
                fontSize: 18,
                fontFamily: 'Roboto',
                color: colors.drawer_font_pink,
              },
            ]}>
            {name}
          </Text>
          <Text style={[styles.txtMenu, {color: '#10356c', fontSize: 12}]}>
            {email}
          </Text>
        </View>
        <View style={styles.subContainer}>
          {this.menu('Hindi Messages', 'क', 'Hindi')}
          {this.menu('Gujrati Messages', 'ક', 'Gujrati')}
        </View>
        <View style={{padding: 5}}>
          <TouchableOpacity
            onPress={() =>
              id == null
                ? this.props.props.navigation.navigate('Login')
                : this.props.logOut()
            }
            style={[styles.menuContainer, {justifyContent: 'center'}]}>
            <Text style={[styles.txtMenu, {color: colors.drawer_font_pink}]}>
              {id == null ? ' Sign In' : 'Sign Out'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.get('info'),
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
