import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ImageBackground
      source={require('./f0c51a5a-4bd1-4ca2-af55-aa68706c6470.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <Text style={styles.count}>Count: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Increase Count" onPress={() => setCount(count + 1)} color="#3366FF" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  count: {
    fontSize: 24,
    marginBottom: 40,
    color: '#000',
  },
  buttonContainer: {
    width: '60%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
