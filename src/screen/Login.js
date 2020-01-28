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
import {GoogleSignin} from 'react-native-google-signin';
import {connect} from 'react-redux';
import {user} from '../store/action';
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
              style={{height: 30, resizeMode: 'cover', width: 30}}
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
