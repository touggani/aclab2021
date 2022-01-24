import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Home() {
  return (
    <View style={styles.texte}>
      <div>ACCEUIL</div>
      <div style={styles.card}>
        <div>
          <div>PHOTO</div>
          <Text >BDE Université</Text>
        </div>
        <div>
        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</Text>
      </div>
      <div>PHOTO</div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  texte: {
    flex: 1,
    backgroundColor: '#AEED',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
