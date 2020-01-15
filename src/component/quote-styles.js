import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    marginHorizontal:10,
    elevation: 2,
    borderRadius:10,
    backgroundColor: '#FFF',
  },
  subContainer: {
    margin: 2,
    padding: 2,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth:1,
    borderTopColor:'lightgrey',
    justifyContent: 'space-between',
  },
});
export default style;

