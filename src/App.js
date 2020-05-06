import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const sayHello = ()=>{

      alert("hello world ");
  };


  return (
    <div className="App">
      <header className="App-header">
       
        <p>
            Hello React 
        </p>

        <button onClick={sayHello} >Say Hello</button>
      </header>
    </div>
  );
}

export default App;
