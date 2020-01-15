import React, {Component} from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  SlideAnimation,
} from 'react-native-popup-dialog';
import colors from '../config/colors';

class PopupDialog extends Component {
  state = {};
  render() {
    const {onTouchOutside, visible, dialogTitle} = this.props;
    const title = dialogTitle ? (
      <DialogTitle
        style={{backgroundColor: colors.dark_primary_color}}
        textStyle={{color: '#FFF'}}
        title={dialogTitle}
      />
    ) : null;
    return (
      <Dialog
      width={300}
        height={200}
        onTouchOutside={onTouchOutside}
        visible={visible}
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}>
        <DialogContent>{this.props.children}</DialogContent>
      </Dialog>
    );
  }
}

export default PopupDialog;
