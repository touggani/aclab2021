import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




export default function App() {
  return (
    <View style={styles.texte}>
      <Text >TAB!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  texte: {
    flex: 1,
    backgroundColor: '#AEED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
