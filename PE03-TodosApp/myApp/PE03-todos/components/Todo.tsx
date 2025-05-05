import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

interface TodoItem {
  title: string;
  completed: boolean;
}

interface TodoProps {
  todo: TodoItem;
  index: number;
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, index, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <View style={styles.textSection}>
      <Text style={[styles.todoText, todo.completed && styles.completedText]}>
        {todo.title}
      </Text>
    </View>
    <View style={styles.buttonSection}>
      <TodoButton name="Done" onPress={() => toggleComplete(index)} />
      <TodoButton name="Delete" onPress={() => deleteTodo(index)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  textSection: {
    flex: 1,
    justifyContent: 'center',
  },
  todoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#a9a9a9',
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
});

export default Todo;
