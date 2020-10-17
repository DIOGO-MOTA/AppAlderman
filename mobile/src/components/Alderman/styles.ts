import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden'
  },

  bio: {
    marginTop: 5,
    marginHorizontal: 20,
    fontFamily: 'Poppins_400Regular', 
    fontSize: 14,
    lineHeight: 20,
    color:'#6a6180',
    textAlign: "justify",
  },

  scroll: {
    marginTop: -40,
  }
});

export default styles;