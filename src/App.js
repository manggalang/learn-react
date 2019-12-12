import React from 'react';
import './App.css';

const App = () => {
  const [fields, setFields] = React.useState([]);
  const [state, setState] = React.useState({
    randomResult: ""
  })

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i] = event.target.value;
    setFields(values)
  }

  const handleAdd = () => {
    const fieldsValues = [...fields];
    fieldsValues.push('');
    setFields(fieldsValues);
  }

  const handleRemove = (i) => {
    const fieldsValues = [...fields];
    const showWarnig = window.confirm("Are you sure to remove this?");
    if(showWarnig == true) {
      fieldsValues.splice(i, 1);
      setFields(fieldsValues);
    }
  }

  const handleRandom = () => {
    const myItem = [...fields];
    const random = myItem[Math.floor(Math.random() * myItem.length)];
    setState({inputValue: state.inputValue, randomResult: random});
  }

  return (
    <div className="App">
      <h1>Random picker name</h1>
      {fields.map((field, idx) => {
        return (
          <div className="input-wrapper" key={`${field}-${idx}`}>
            <input 
              type="text"
              value={field}
              name="username"
              onChange={e => handleChange(idx, e)}
            />
            <button onClick={() => handleRemove(idx)}>x</button>  
          </div>
        );
      })}  
      <button className="App__btn-add" onClick={handleAdd}>+</button>
      <button className="App__btn-start" onClick={handleRandom}>Random Button</button>
      <h2>{state.randomResult}</h2>
    </div>
  );
}

export default App;
