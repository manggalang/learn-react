import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      value: "",
    }
    this.handleInputName = this.handleInputName.bind(this);
    this.changeOptionValue = this.changeOptionValue.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  handleInputName(event) {
    this.setState({value: event.target.value});
  }

  changeOptionValue(event) {
    this.setState({value: event.target.value});

    if (this.state.value == "lines"){
      this.state.value = '\n';
    } else if(this.state.value == "spaces") {
      this.state.value = ' ';
    } else if(this.state.value == "commas") {
      this.state.value = ',';
    }

    let choiceArray = this.state.value.split(this.state.value);
    let numOfChoice = (choiceArray.length);
    let x = Math.floor(Math.random()*numOfChoice);
  }

  submitHandle(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <div className="App">
        <h1>Random picker name</h1>
        <form onSubmit={this.submitHandle}>
          <textarea value={this.state.value} onChange={this.handleInputName} placeholder="input some value"/>
          <input type="submit" value="submit"/>
          <select value={this.state.value} onChange={this.changeOptionValue}>
            <option value="lines">separate by lines</option>
            <option value="spaces">separate by spaces</option>
            <option value="commas">separate by commas</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;
