import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '@react-native-firebase/auth';
import {GoogleSignin,GoogleSigninButton} from 'react-native-google-signin';
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
      <View style={styles.content}>
          <View style={{justifyContent:'center',borderWidth:1,borderColor:'#d34836',alignItems:'center',margin:10,backgroundColor:'#d34836', height:70,width:70,borderRadius:40}}>
              <Icon name={'heart'} size={30} color={'#fff'}/>
          </View>
          <Text style={{color:'#525252',fontSize:15,marginBottom:5,fontWeight:'bold'}}>To like, just Sign up! </Text>
          <GoogleSigninButton
            style={{ width: 250, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => this._signIn()}
           />
        </View>
    );
  }

  loadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} size={'large'} />
      </View>
    );
  }
  

  _signIn = async () => {
      this.setState({loading:true})
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
        const body = {
          name: user.name,
          email: user.email,
          profile_url: user.photo,
        };
        this.props.onLogin(body);
    } catch (error) {
      console.log(error);
    }
  };
}
export default Login;
