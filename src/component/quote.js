import React, {Component} from 'react';
import {View, Text, Clipboard, ToastAndroid} from 'react-native';
import styles from './quote-styles';
import Button from './Button';
import Share from 'react-native-share';
import LinearGradiant from 'react-native-linear-gradient';
import colors from '../config/colors';

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
    Share.open({url: text})
      .then(() => {
       this.props.addShare();
      })
      .catch(err => {
        err && console.log(err);
      });
  }
  render() {
    const {text, share_count, like_count} = this.props.item;
    const {toggleOpen} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.txt}>{text}</Text>
        </View>
        <LinearGradiant
          colors={['#ec38c2', '#174fa2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.rowCenter}>
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
        </LinearGradiant>
      </View>
    );
  }
}

export default Quote;
