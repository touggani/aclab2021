import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomNavigator from './components/BottomNavigator';


const Tab = createBottomTabNavigator();

export default function App() {
  function on(){
    alert("Connexion");
  }
  return (
    /*<BottomNavigator/>*/
    <View style={[styles.mainContainer,styles.container, styles.flexColumn]}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./illustrations/logo_viking.png')}/>
      </View>
      <View style={{flex:2}}>        
        <Pressable style={styles.buttonConnexion} onPress={on}>
          <Text style={styles.text}>Connexion</Text>
        </Pressable>
        <Pressable style={styles.buttonConnexion} onPress={on}>
          <Text style={styles.text}>S'inscrire</Text>
        </Pressable>
      </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#962929',
  },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    
  },
  flexColumn:{
    flexDirection: "column",
  },
  buttonConnexion:{
    width: 350,
    backgroundColor:'#D64E4E',
    padding: 20,
    borderRadius: 30,
    margin: 10
  },
  text:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  }
});
