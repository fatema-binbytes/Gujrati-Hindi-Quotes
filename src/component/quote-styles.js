import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor:'#FFF',
    margin: 15,
    elevation:4,
    marginHorizontal:10,
    minHeight:150,
    borderRadius:5,
    flex:1,
  },
  subContainer: {
    flex:1,
    borderRadius:20,
    padding: 15,
    alignItems:'center',
    justifyContent:'center',
  },
  txt:{
    fontSize:15,
    padding:8,
    lineHeight:22,
    color:'#363636'
  },
  button: {
    padding:5,
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    justifyContent:'center'
  },  
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    backgroundColor:'#ff726f',
    justifyContent: 'space-between',
  },
});
export default style;

