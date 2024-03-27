import React,{useState} from 'react';
import './App.css';
import Keypad from './keypad'

function App() {
  let [input, setInput] = useState('');
  function handleChange(value){
    setInput(input + value)
  }
  function calculate(){
    let c=eval(input)
    setInput(c);
  }
  function handleClear(){
    setInput("")
  }

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div>
        <input type="text" value={input} className="output"/>
        <Keypad handleChange={handleChange} calculate={calculate} handleClear={handleClear}></Keypad>
      </div>

    </div>
  );
}

export default App;
