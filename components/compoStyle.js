import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  smallContainer: {
    flexDirection: 'row',
    width: '60%',
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: 'flex-start',
    marginTop: 25,
    marginStart: 20, 
    marginEnd: 20, 
    backgroundColor: 'white'
  },
  nome: {
    fontSize: 22,
    fontWeight: '500',
    marginTop: 25,
  },
  nick: {
    color: '#cecece',
    fontSize: 18
  },
  titulos: {
    fontWeight: '500',
    fontSize: 22,
    alignSelf: 'flex-end',
    paddingBottom: 50,
    marginStart: '25%'
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    elevation: 4,
    //borderTopColor: 'white',
    borderBottomColor: '#3c3c3c',
    height: 100, 
    
    borderRadius: 4,
    marginVertical: 15
    //backgroundColor: 'white'
  },
  trofeu: {
    width: 20,
    height: 20,
    marginTop: 28,
    marginStart: 5,
    
  }
});