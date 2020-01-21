import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 16
  },
  profileContainer: {
    alignItems: 'center',
    flex:0.3,
  },
  imageContainer: {
    borderRadius: 40,
    overflow: 'hidden',
    height: 64,
    width: 64,
    marginBottom: 16,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 10
  },
  txtMenu: {
   fontSize: 18,
   textAlign:'center',
    marginLeft: 8,
  }
})

export default styles
