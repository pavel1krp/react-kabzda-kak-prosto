import React, {ChangeEvent, useState} from 'react';

type propsType ={
    getRandomNumber: ()=>void
    number:number
    num:number|string
    getNumber: (n:number)=>void
    getNumber1: (n:number)=>void
}

const RandomNumber = (props:propsType) => {
    // const [num1,setNum1] =useState<number|string>(1)
    const onclickHandler = () =>{
        props.getRandomNumber()
    }
    const onChangeHandler1 = (e:ChangeEvent<HTMLInputElement>)=>{
        props.getNumber(Number(e.currentTarget.value))
    }
    const onChangeHandler2 = (e:ChangeEvent<HTMLInputElement>)=>{
        props.getNumber1(Number(e.currentTarget.value))
    }
    return (
        <div>
            <input  onChange={onChangeHandler1} type="text"/>
            <input  onChange={onChangeHandler2} type="text"/>
            <button onClick={onclickHandler}>Get random number</button>
            <p>{props.number}</p>
        </div>
    );
};

export default RandomNumber;