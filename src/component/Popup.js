import React, {Component} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';

import styles from './popup-style';

export class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.animatedValue = new Animated.Value(500);
  }

  toggleOpen = () => {
    this.setState({isOpen: true});
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 300,
    }).start();
  };

  toggleClose = () => {
    Animated.timing(this.animatedValue, {
      toValue: 500,
      duration: 300,
    }).start(() => {
      this.setState({isOpen: false});
    });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <View style={[styles.container]}>
          <TouchableOpacity
            style={styles.touchArea}
            onPress={() => this.toggleClose()}
          />
          <Animated.View
            style={{transform: [{translateY: this.animatedValue}]}}>
            <View style={styles.popup}>{this.props.children}</View>
          </Animated.View>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default Popup;
