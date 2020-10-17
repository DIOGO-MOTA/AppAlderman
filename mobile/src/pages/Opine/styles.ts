import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#100132',
 },
 
 title: {
   fontFamily: 'Archivo_700Bold',
   color: '#FFF',
   fontSize: 24,
   lineHeight: 32,
   marginVertical: 40,

  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: '#FFF',
    
  },

  input: {
   height: 56,
   backgroundColor: '#FFF',
   borderRadius: 8,
   justifyContent: 'center',
   paddingHorizontal: 10,
   marginTop: 4,
   marginBottom: 16,
  },

  submitButton : {
    backgroundColor: '#08FC21',
    fontFamily: 'Archivo_700Bold',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 60,
  },

  submitButtonText: {
    color: '#FFF',
  },

  submitButton2 : {
    backgroundColor: '#FF0100',
    fontFamily: 'Archivo_700Bold',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText2: {
    color: '#FFF',
  },




});


export default styles;