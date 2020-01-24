import React, {Component} from 'react';
import {View, Text, Clipboard, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {user, quote} from '../store/action';
import styles from './quote-styles';
import Button from './Button';
import Share from 'react-native-share';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      share: 10,
      like: 0,
      copy: false,
    };
  }

  share(text) {
    Share.open({url: text}).then(() => {
      this.props.addShare();
    });
  }
  like = () => {
    this.setState({like: this.state.like + 1});
  };
  render() {
    const {text, share_count, like_count, id} = this.props.item;
    const {toggleOpen} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.txt}>{text}</Text>
        </View>
        <View style={styles.rowCenter}>
          <View style={styles.button}>
            <Button
              name={like_count ? 'heart' : 'heart-outline'}
              text={like_count}
              onPress={toggleOpen}
            />
          </View>

          <View
            style={[
              styles.button,
              {
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: '#ffffffcc',
              },
            ]}>
            <Button
              text={share_count}
              name={'share'}
              onPress={() => this.share(text)}
            />
          </View>
          <View style={styles.button}>
            <Button
              name={'ios-copy'}
              icons
              onPress={() => {
                Clipboard.setString(text);
                ToastAndroid.show('Text Copied', ToastAndroid.SHORT);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.user.info,
});
const mapDispatchToProps = {};

const quoteWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quote);
export default quoteWrapper;
