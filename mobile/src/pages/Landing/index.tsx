import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import Alderman from '../../components/Alderman';


const Landing: React.FC = () => {
  return (
   <View style={styles.container}>
      <PageHeader />
      <Alderman />
   </View>
  
  );
}

export default Landing;