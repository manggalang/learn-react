import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';

class App extends Component{
  state = {
      value: '',
      arrayValue: [],
      clicked: false,
      selectedName: ""
  }

  handleChange = (event) => {
    this.setState({value : event.target.value});
    this.state.arrayValue = this.state.value.split(/[\s,]+/);
    console.log(this.state.arrayValue);
  }

  handleClick = () => {
    this.setState({
      clicked: true,
      selectedName: this.state.arrayValue[Math.floor(Math.random() * this.state.arrayValue.length)]
    });
  }

  render() {
    return(
      <div className="App">
        <h1>Random picker name</h1>
        <textarea className="App__input" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Random Name</button>
        <textarea value={this.state.selectedName} readOnly />
      </div>
    );
  }
}

export default App;
