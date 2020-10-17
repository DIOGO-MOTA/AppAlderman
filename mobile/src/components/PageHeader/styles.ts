import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#100132',   
  },

  avatar: {
    width: '100%',
    resizeMode: 'contain',
  },
  
  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
   
  },

  titleBold: {
     fontFamily: 'Poppins_600SemiBold',
     fontSize: 40,
  },
});

export default styles;