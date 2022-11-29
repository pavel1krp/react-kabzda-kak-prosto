import React, {useState} from 'react';
import './App.css';
import Accordeon from "./components/Accordeon";
import {OffOn} from "./components/OnOff";
import UncontrolledAccordeon from "./components/UncontrolledAccordeon";
import Rating, {RatingValueType} from "./components/Rating";
import UncontrolRating from "./components/UncontrolRating";
import RandomNumber from "./components/RandomNymber";
import {ControledOffOn} from "./components/ControledOnOff";


function App() {
    const [number, setNumber] = useState(0)
    const [num,setNum] =useState<number|string>('')
    const [collapsedAccordeon, setcollapsedAccordeon] = useState<boolean>(true)
    const  [on,setOn] = useState(false)
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
    const [ratingValue, setRatingValue]= useState<RatingValueType>(2)
  return (
    <div >
      <Accordeon titleValue={'priv'} collapsed={collapsedAccordeon} onClick ={()=>setcollapsedAccordeon(!collapsedAccordeon)}/>
        <UncontrolledAccordeon titleValue={'Accordeon'}/>
        <OffOn on={false}/>
        <OffOn on={false}/>
        <Rating value={ratingValue} onClick = {setRatingValue}/>
        <UncontrolRating />
        <RandomNumber getNumber={getNumber} getNumber1={getNumber1} num={num} getRandomNumber = {getRandomNumber} number = {number}/>
        <ControledOffOn on={on} onClick={()=>setOn(!on)}/>
    </div>
  ) ;
}

export default App;
