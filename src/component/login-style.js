import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
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
    color: '#FFF',
    fontSize: 16,
    marginLeft:0,
    margin:5,
    textAlign: 'center',
  },
  txt: {
    color: '#525252',
    fontSize: 15,
    marginBottom: 10,
    textAlign:'center',
    fontWeight: 'bold',
  },
  button: {
    elevation:2,
    flexDirection:'row',
    alignItems:'center',
    borderRadius: 2,
     backgroundColor: '#4286F5',
  },
  image: {
    backgroundColor:'#fff',
    height:30,
    width:30,
    margin:5,
  },
});

export default styles;
