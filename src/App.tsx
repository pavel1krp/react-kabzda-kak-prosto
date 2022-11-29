import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordeon from "./components/Accordeon";
import {OffOn} from "./components/OnOff";
import UncontrolledAccordeon from "./components/UncontrolledAccordeon";
import Rating from "./components/Rating";
import UncontrolRating from "./components/UncontrolRating";
import RandomNumber from "./components/RandomNymber";


function App() {
    const [number, setNumber] = useState(0)
    const [num,setNum] =useState<number|string>('')
    const getRandomNumber =()=>{
        setNumber(Math.floor(Math.random()*(Number(num)-Number(num1))+Number(num1)))
    }
    const [num1,setNum1] =useState<number|string>('')
    const getNumber = (n:number)=>{
        setNum(n)
    }
    const getNumber1 = (n:number)=>{
        setNum1(n)
    }
  return (
    <div >
     {/* <Accordeon titleValue={'priv'} collapsed={false}/>
     <Accordeon titleValue={'priv'} collapsed={true}/> */}
        <UncontrolledAccordeon titleValue={'Accordeon'}/>
        <OffOn on={false}/>
        <OffOn on={false}/>
        <Rating value={3}/>
        <UncontrolRating />
        <RandomNumber getNumber={getNumber} getNumber1={getNumber1} num={num} getRandomNumber = {getRandomNumber} number = {number}/>
    </div>
  ) ;
}

export default App;
