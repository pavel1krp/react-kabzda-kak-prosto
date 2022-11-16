import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordeon from "./components/Accordeon";
import OnOff from "./components/OnOff";

function App() {
  return (
    <div >
     <Accordeon titleValue={'priv'} collapsed={false}/>
        <OnOff on ={true}/>
        <OnOff on ={false}/>
    </div>
  );
}

export default App;
