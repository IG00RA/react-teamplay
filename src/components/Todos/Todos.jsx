import { TodoForm } from 'components/TodoForm/TodoForm';
import { TodoList } from 'components/TodoList/TodoList';
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

  deleteTodo = id => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(item => item.id === id);
      const prevStateTodos = [...prevState.todos];
      prevStateTodos.splice(index, 1);

      return {
        todos: prevStateTodos,
      };
    });
  };

  handleIsChecked = id => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(item => item.id === id);
      const prevStateTodos = [...prevState.todos];
      const prevItem = prevState.todos[index];
      prevStateTodos.splice(index, 1, {
        ...prevItem,
        isChecked: !prevItem.isChecked,
      });

      return {
        todos: prevStateTodos,
      };
    });
  };

  render() {
    const {
      addTodo,
      deleteTodo,
      state: { todos },
      handleIsChecked,
    } = this;
    return (
      <div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          onDelete={deleteTodo}
          items={todos}
          handleIsChecked={handleIsChecked}
        />
      </div>
    );
  }
}
