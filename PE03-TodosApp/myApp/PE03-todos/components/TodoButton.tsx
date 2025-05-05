import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TodoButtonProps {
  name: string;
  completed?: boolean;
  onPress: () => void;
}

const TodoButton: React.FC<TodoButtonProps> = ({ name, completed, onPress }) => (
  <TouchableOpacity
    style={[
      styles.button,
      name === 'Done' ? styles.doneButton : styles.deleteButton,
    ]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginLeft: 10,
  },
  doneButton: {
    backgroundColor: '#4CAF50', // Material green
  },
  deleteButton: {
    backgroundColor: '#f44336', // Material red
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TodoButton;
