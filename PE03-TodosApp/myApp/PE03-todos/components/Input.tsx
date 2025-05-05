import React from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface InputProps {
  inputValue: string;
  inputChange: (value: string) => void;
  addTodo: () => void;
}

const Input: React.FC<InputProps> = ({ inputValue, inputChange, addTodo }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={inputValue}
      onChangeText={inputChange}
      placeholder="What needs to be done?"
      autoCorrect={false}
      placeholderTextColor="#ccc"
    />
    <TouchableOpacity style={styles.button} onPress={addTodo}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    height: 45,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 12,
    width: '90%',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Input;
