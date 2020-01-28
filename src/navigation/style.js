import { StyleSheet } from 'react-native'
import colors from '../config/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#471976',
  },
  active: {
    backgroundColor: '#f3e7f299',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    paddingLeft: 15,
  },
  unActive: {
    backgroundColor: '#FFF',
    paddingLeft: 15,
  },
  subContainer: {
    flex: 1,
    margin: 10,
    marginTop: 15,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent:'center',
    flex:0.4,
    borderColor:'lightgrey'
  },
  imageContainer: {
    borderRadius: 35,
    overflow: 'hidden',
    height: 64,
    width: 64,
    margin: 6,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:5,
    // alignSelf: 'stretch',
  },
  txtMenu: {
    paddingVertical:3,
    fontFamily:'OpenSans-Regular',
    fontSize: 14,
    textAlign:'auto',
    marginLeft: 8,
  }
})

export default styles
