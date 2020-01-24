import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent:'center',
    flex:0.4,
    borderBottomWidth:1,
    borderColor:'lightgrey'
  },
  imageContainer: {
    borderRadius: 40,
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
    paddingBottom:5,
    alignSelf: 'stretch',
  },
  txtMenu: {
    fontFamily:'OpenSans-Regular',
   fontSize: 16,
   marginLeft: 8,
  }
})

export default styles
