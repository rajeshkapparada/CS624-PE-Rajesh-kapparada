import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import TodoList from '../../components/TodoList';
import TabBar from '../../components/TabBar';

interface Todo {
  title: string;
  completed: boolean;
}

interface State {
  inputValue: string;
  todos: Todo[];
  filter: 'All' | 'Complete' | 'Active';
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
      filter: 'All',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleInputChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  handleAddTodo() {
    if (this.state.inputValue.trim()) {
      const newTodo: Todo = {
        title: this.state.inputValue,
        completed: false,
      };
      const updatedTodos = [...this.state.todos, newTodo];
      this.setState(
        {
          todos: updatedTodos,
          inputValue: '',
        },
        () => {
          console.log('Current todos:', this.state.todos); // Log todos to console
        }
      );
    }
  }

  handleToggleComplete(index: number) {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  }

  handleDeleteTodo(index: number) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  handleFilterChange(filter: 'All' | 'Complete' | 'Active') {
    this.setState({ filter });
  }

  getFilteredTodos(): Todo[] {
    const { todos, filter } = this.state;
    if (filter === 'Complete') {
      return todos.filter((todo) => todo.completed);
    } else if (filter === 'Active') {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="always"
        >
          <Heading />
          <Input
            inputValue={this.state.inputValue}
            inputChange={this.handleInputChange}
            addTodo={this.handleAddTodo}
          />
          <TodoList
            todos={this.getFilteredTodos()}
            toggleComplete={this.handleToggleComplete}
            deleteTodo={this.handleDeleteTodo}
          />
        </ScrollView>
        <TabBar
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  content: {
    flex: 1,
  },
});