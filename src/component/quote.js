import React, {Component} from 'react';
import {View, Text, Clipboard, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {user} from '../store/action';
import styles from './quote-styles';
import Button from './Button';
import Share from 'react-native-share';
import Popup from './Popup';
import Login from './Login';

class quote extends Component {
  state = {
    share: 10,
    like: 200,
    show: false,
  };
  share(text) {
    Share.open({url: text}).then(() => {
      this.setState({share: this.state.share + 1});
    });
  }
  render() {
    const {text} = this.props.item;
    const {like, shareCount, likeCount} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.txt}>{text}</Text>
        </View>
        <View style={styles.rowCenter}>
          <View style={styles.button}>
            <Button
              name={like ? 'heart' : 'heart-outline'}
              onPress={() =>
                this.props.userInfo == null
                  ? this.setState({show: true})
                  : this.setState({like: this.state.like + 1})
              }
            />
            <Text>{this.state.like}</Text>
          </View>

          <View style={styles.button}>
            <Button name={'share-outline'} onPress={() => this.share(text)} />
            <Text>{this.state.share}</Text>
          </View>
          <View>
            <Button
              name={'content-copy'}
              onPress={() => {
                Clipboard.setString(text);
                ToastAndroid.show('Text Copied', ToastAndroid.SHORT);
              }}
            />
          </View>
        </View>
        <Popup
          visible={this.state.show}
          onTouchOutside={() => {
            this.setState({show: false});
          }}>
          <Login
            onLogin={body => {
              this.props.login(body);
              this.setState({like: this.state.like + 1, show: false});
            }}
          />
        </Popup>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.user.get('info'),
});
const mapDispatchToProps = {
  login: user.userLogin,
};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(quote);
export default quoteWrapper;
