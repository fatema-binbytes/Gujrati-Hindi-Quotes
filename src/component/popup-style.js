import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  popup: {
    backgroundColor: '#FFF',
    height:200,
    width:300,
    elevation:2,
    borderRadius:10,
    
  },
  touchArea: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#00000033',
  },
});

export default styles;
