import {StyleSheet} from 'react-native';
import colors from '../config/colors';

const style = StyleSheet.create({
    icon: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    txt: {
        paddingLeft: 3,
        color: colors.screenIcon,//'#f77b6f',
    }
});
export default style;