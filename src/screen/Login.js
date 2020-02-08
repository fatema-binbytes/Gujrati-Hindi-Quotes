import React, {Component} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {firebase} from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from 'react-native-google-signin';
import {connect} from 'react-redux';
import {user} from '../store/action';
import styles from './login-style';
import colors from '../config/colors';
import Loader from '../component/Loader';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      change: false,
      color: '#a13388',
    };
    this.timer = null;
  }
  changeColor() {
    this.timer = setInterval(() => {
      this.setState({change: !this.state.change});
      this.state.change
        ? this.setState({color: '#10356c'})
        : this.setState({color: '#663399'});
    }, 300);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={colors.linear_gradient_color}
          style={[
            styles.subContainer,
            {
              borderBottomRightRadius: 1000,
            },
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.txt}>SMS World 2020</Text>
        </LinearGradient>
        <View style={styles.subContainer}>
          <View style={styles.lableContainer}>
            <View style={styles.underlineView} />
            <Text style={styles.lable}> Sign In </Text>
            <View style={styles.underlineView} />
          </View>
          {this.state.loading ? (
            <Loader size={'large'} color={this.state.color} />
            ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this._signIn()}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require('../assets/google.png')}
                    style={styles.image}
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
    this.setState({loading: true}, () => this.changeColor());

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
  loading: state.ui.get('IsLoading'),
});
const mapDispatchToProps = {
  onLogin: user.userLogIn,
};

const loginWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
export default loginWrapper;
