import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      todos: [],
      text: '',
    };
  }

  onClickHandler = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <>
        <div>isClicked, {this.state.isClicked.toString()}</div>
        <button onClick={this.onClickHandler}>Click me</button>
      </>
    );
  }
}
