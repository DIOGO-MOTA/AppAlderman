import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import Landing from '../pages/Landing';
import Opine from '../pages/Opine';


const { Navigator, Screen} = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer >
      <Navigator tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle:{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle:{
           fontFamily: 'Archivo_700Bold',
           fontSize: 13,
           marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }} >
        <Screen 
        name="Landing" 
        component={Landing}
        options={{
          tabBarLabel: 'Vereador',
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign name="user" size={size} color={color} />
            );
          }
        }}
        />
        <Screen
         name="Opine" 
         component={Opine}
         options={{
          tabBarLabel: 'Opinar',
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome name="bullhorn" size={size} color={color} />
            );
          }
        }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;