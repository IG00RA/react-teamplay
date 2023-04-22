import { TodoForm } from 'components/TodoForm/TodoForm';
import React, { Component } from 'react';

export default class Todos extends Component {
  state = {
    todos: [{ id: 'id-1', name: 'todo-1', isChecked: false, category: 'car' }],
  };

  addTodo = newTodo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deletTodo = id => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(item => item.id === id);
      const prevStateTodos = [...prevState.todos];
      prevStateTodos.splice(index, 1);

      return {
        todos: prevStateTodos,
      };
    });
  };

  render() {
    return <TodoForm addTodo={this.addTodo} />;
  }
}
