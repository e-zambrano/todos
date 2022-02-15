import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      text: '',
    };
  }

  onClickHandler = () => {
    this.setState((currentState) => ({
      todos: [...currentState.todos, this.state.text], // uses spread operator to append new value to array
      text: '', //Clear the input after adding a todo to the array
    }));
  };

  onChangeHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  onClickDeleteHandler = (index) => {
    const currentTodos = this.state.todos;
    currentTodos.splice(index, 1); //removes one element from the index provided
    this.setState({ todos: currentTodos });
  };

  render() {
    return (
      <>
        <h2>TODO App</h2>
        <input
          className="input-todo"
          placeholder="What needs to be done?"
          value={this.state.text}
          onChange={this.onChangeHandler}
        />
        <button onClick={this.onClickHandler}>➕ Add</button>
        <ul>
          {this.state.todos.map((t, index) => {
            return (
              <li key={index}>
                {t}
                <button
                  className="delete-button"
                  title="delete"
                  onClick={() => this.onClickDeleteHandler(index)}
                >
                  🗑
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
