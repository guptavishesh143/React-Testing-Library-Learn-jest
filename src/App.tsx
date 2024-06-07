import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./component/application/form";
import { Skills } from './component/skills/skills';
const mySkills = ['HTML', 'CSS', 'Data Structure'];

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Skills skills={mySkills}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
