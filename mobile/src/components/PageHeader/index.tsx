import React from 'react';
import { View, Image, Text } from 'react-native';
 
import styles from './styles';

import landingImg from '../../assets/images/landing.png';


const PageHeader: React.FC = () => {
  return (
    <View style={styles.container}>
       
       <Image source={landingImg} style={styles.avatar} />
  
       <Text style={styles.title}>
         Diego Fernandes {'\n'}
         VEREADOR 
        <Text style={styles.titleBold}>{'   '}101022</Text>
       </Text>
      </View>
    
    );
}

export default PageHeader;