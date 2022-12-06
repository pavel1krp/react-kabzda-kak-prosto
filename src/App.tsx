import React, {useState} from 'react';
import './App.css';
import Accordeon from "../src/components/Accordeon/Accordeon";
import {OffOn} from "../src/components/OnOff/OnOff";
import UncontrolledAccordeon from "../src/components/Accordeon/UncontrolledAccordeon";
import Rating, {RatingValueType} from "../src/components/Rating/Rating";
import UncontrolRating from "../src/components/Rating/UncontrolRating";
import {ControledOffOn} from "../src/components/OnOff/ControledOnOff";


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
        <UncontrolledAccordeon titleValue={'Accordeon'} collapsed={true}/>
        <UncontrolledAccordeon titleValue={'AccordeonUncotrol'} collapsed={false}/>
        <OffOn onChange={setOn}/>
        <OffOn onChange={setOn}/>
        <Rating value={ratingValue} onClick = {setRatingValue}/>
        <UncontrolRating value={1}/>
        <ControledOffOn on={on} onClick={()=>setOn(!on)}/>
        <OffOn onChange={setOn}/> {on.toString()}
    </div>
  ) ;
}

export default App;
