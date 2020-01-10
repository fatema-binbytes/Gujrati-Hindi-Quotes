import {StyleSheet} from 'react-native';
import colors from '../config/colors';

const style = StyleSheet.create({
    container:{
        padding:5,
        margin:5,
        elevation:2,
        backgroundColor:'#FFF',
    },
    txt:{fontSize:16},
    icon: {
        margin:3,
        backgroundColor:colors.primary_color,
        padding:8,
        borderRadius:25
    },
});
export default style;