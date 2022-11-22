import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordeon from "./components/Accordeon";
import {OffOn} from "./components/OnOff";


function App() {
  return (
    <div >
     <Accordeon titleValue={'priv'} collapsed={false}/>
        <OffOn on={false}/>
        <OffOn on={false}/>
    </div>
  );
}

export default App;
