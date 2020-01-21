import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '@react-native-firebase/auth';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import styles from './login-style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    if (this.state.loading) {
      return this.loadingView();
    } else {
      return this.loginView();
    }
  }

  loginView() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name={'heart'} size={30} color={'#fff'} />
        </View>
        <Text style={styles.txt}>To like, just Sign up!</Text>
        <TouchableOpacity style={styles.button} onPress={() => this._signIn()}>
          <View style={styles.image}>
            <Image
              source={{
                uri:
                  'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png',
              }}
              style={{height: 30, resizeMode:'cover',width: 30}}
            />
          </View>

          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    );
  }

  loadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.container} size={'large'} />
      </View>
    );
  }

  _signIn = async () => {
    this.setState({loading: true});
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
      const firebaseUserCredential = await firebase
        .auth()
        .signInWithCredential(credential);
      const user = userInfo.user;
      console.log(user)
      const body = {
        name: user.name,
        email: user.email,
        profile_url: user.photo,
        g_id: user.id
      };
      this.props.onLogin(body);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Login;
