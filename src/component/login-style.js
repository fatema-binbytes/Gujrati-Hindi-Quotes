import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  container: {
    height:200,
  },
  content: {
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  txt: {textAlign: 'center', fontSize: 16, marginBottom: 16},
  button: {
    padding: 12,
    borderRadius: 5,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: '#d34836',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 96,
    width: 96,
    resizeMode: 'center',
    marginBottom: 32,
  },
});

export default styles;
