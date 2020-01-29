import {StyleSheet} from 'react-native';
import colors from '../config/colors'
let styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius:10
   },
   iconContainer:{
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d34836',
    alignItems: 'center',
    marginTop:0,
    margin: 10,
    backgroundColor: '#d34836',
    height: 70,
    width: 70,
   borderRadius: 40,
  },
  buttonText: {
    color: '#525252',
    fontSize: 14,
    margin:5,
    textAlign: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 30,
    textAlign:'center',
    fontFamily:'OpenSans-BoldItalic',
    marginBottom:50,
  },
  button: {
    elevation:2,
    borderRadius: 25,
    flexDirection:'row',
    alignItems:'center',
    padding:2,
    paddingHorizontal:15,
    backgroundColor: '#fff',
    margin:10,
  },
  image: {
    backgroundColor:'#fff',
    height:30,
    width:30,
    margin:5,
  },
});

export default styles;
