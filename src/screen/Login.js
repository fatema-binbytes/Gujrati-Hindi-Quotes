import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {firebase} from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from 'react-native-google-signin';
import {connect} from 'react-redux';
import {user} from '../store/action';
import styles from './login-style';
import colors from '../config/colors';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      change: false,
      color : '#a13388'
    };
    this.timer = null
  }
  changeColor() {
     this.timer =  setInterval(() => {
        this.setState({change: !this.state.change});
        console.log('color');
        this.state.change
          ? this.setState({color: '#10356c'})
          : this.setState({color: '#663399'});
      }, 300);
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <LinearGradient
            colors={colors.linear_gradient_color}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomRightRadius: 1000,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.txt}>Quote World</Text>
          </LinearGradient>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{width: 80, borderColor: '#10356c99', borderWidth: 0.5}}
            />
            <Text style={{color: '#10356c99', fontSize: 18}}> Sign In </Text>
            <View
              style={{width: 80, borderColor: '#10356c99', borderWidth: 0.5}}
            />
          </View>
          {this.state.loading ? (
             <View style={styles.container}>
              <ActivityIndicator 
              style={styles.container} 
              size={'large'} 
              color={this.state.color}/>
            </View>
          ) : (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this._signIn()}>
                <View style={styles.image}>
                  <Image
                    source={{
                      uri:
                        'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
                    }}
                    style={{height: 30, resizeMode: 'cover', width: 30}}
                  />
                </View>

                <Text style={styles.buttonText}>{'Sign up with Google'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={[
                  styles.button,
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 230,
                    padding: 7,
                    margin: 5,
                  },
                ]}>
                <Text style={styles.buttonText}>{'Not Now'}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }

  _signIn = async () => {
    this.setState({loading: true},() =>  this.changeColor());
   
    try {
      await GoogleSignin.configure({
        webClientId:
          '449526122257-u9iqp49uo5pv1d9es7ueohc1kih3bdbc.apps.googleusercontent.com', // required
      });
      const userInfo = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );
      await firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          const user = userInfo.user;
          const body = {
            name: user.name,
            email: user.email,
            profile_url: user.photo,
            g_id: user.id,
          };
          this.props.onLogin(body);
          this.props.navigation.goBack();
        });
    } catch (error) {
      console.log(error);
    }
   };
}
const mapStateToProps = state => ({
  userInfo: state.user.token,
});
const mapDispatchToProps = {
  onLogin: user.userLogIn,
};

const loginWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
export default loginWrapper;
