import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

interface TodoItem {
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => (
  <View>
    {todos.map((todo, index) => (
      <Todo
        key={index}
        index={index}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    ))}
  </View>
);

export default TodoList;