import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('');

  const speak = () => {
    if (text.trim().length > 0) {
      console.log('Speaking:', text); //testaus
      Speech.speak(text, {
        onDone: () => console.log('Speech finished'),
        onError: (error) => console.log('Error:', error),
      });
    } else {
      Alert.alert('Please enter some text to speak');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something to speak"
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
