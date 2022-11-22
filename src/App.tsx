import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordeon from "./components/Accordeon";
import {OffOn} from "./components/OnOff";
import UncontrolledAccordeon from "./components/UncontrolledAccordeon";
import Rating from "./components/Rating";
import UncontrolRating from "./components/UncontrolRating";


function App() {
  return (
    <div >
     {/*<Accordeon titleValue={'priv'} collapsed={false}/>*/}
        <UncontrolledAccordeon titleValue={'Accordeon'}/>
        <OffOn on={false}/>
        <OffOn on={false}/>
        <Rating value={3}/>
        <UncontrolRating />
    </div>
  );
}

export default App;
