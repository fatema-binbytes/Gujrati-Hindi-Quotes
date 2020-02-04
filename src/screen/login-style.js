import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttonText: {
    color: '#525252',
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'OpenSans-BoldItalic',
    marginBottom: 50,
  },
  lable: {
    color: '#10356c99',
    fontSize: 18,
  },
  lableContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    elevation: 2,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    margin: 10,
  },
  imageContainer: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    margin: 5,
  },
  image: {
    height: 30,
    resizeMode: 'cover',
    width: 30,
  },
  underlineView: {
    width: 80,
    borderColor: '#10356c99',
    borderWidth: 0.5,
  },
});

export default styles;
