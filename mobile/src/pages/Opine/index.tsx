import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';




const Opine: React.FC = () => {

  const navigation = useNavigation();
   
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [whatsapp, setWhatsapp]= useState('');

  async function handleFormSubmit(){
   await api.post('opinionsyes', {
      name,
      email,
      whatsapp,
    }).then(() => {
      alert('Opinião registrada com sucesso!');
      navigation.goBack();
    }).catch(() => {
      alert('Erro para registar a opinião');
    })
  }

  async function handleFormSubmit2(){
    await api.post('opinionsno', {
       name,
       email,
       whatsapp,
     }).then(() => {
       alert('Opinião registrada com sucesso!');
       navigation.goBack();
     }).catch(() => {
       alert('Erro para registar a opinião');
     })
   }
   
  return (

      <View style={styles.container}>
        <Text style={styles.title}>Você{'\n'} 
        Votaria no Vereador 101022 </Text>
        
          <View style={styles.searchForm}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={text => setName(text)}
                  placeholder="Digite aqui seu nome"
                  returnKeyType="next"
                  autoCapitalize="words"
                  
                />

              <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholder="Digite aqui seu email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                />

              <Text style={styles.label}>WhatsAppp</Text>
                <TextInput
                  style={styles.input}
                  value={whatsapp}
                  keyboardType={'number-pad'}
                  onChangeText={text => setWhatsapp(text)}
                  maxLength={12}
                  placeholder="(00) 9 3333-3333"
                  
                 />
            <RectButton onPress={handleFormSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Sim</Text>
            </RectButton>

            <RectButton  onPress={handleFormSubmit2}  style={styles.submitButton2}>
              <Text style={styles.submitButtonText2}>Não</Text>
            </RectButton>
      </View>    

        
    </View>

      
  
  );
}

export default Opine;