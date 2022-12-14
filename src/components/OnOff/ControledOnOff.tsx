import React, {useState} from 'react';

import s from './OnOff.module.css'

type OnOffpropsType = {
    on: boolean;
    onClick: ()=>void
}



export const ControledOffOn =(props: OnOffpropsType) =>{

    const onStyle ={
        width: '30px',
        height:'30px',
        border:'1px solid black',
        display: 'inline-block',
        padding:'2px',
        backgroundColor:props.on? 'green': 'white'
    }
    const offStyle ={
        width: '30px',
        height:'30px',
        border:'1px solid black',
        display: 'inline-block',
        padding:'2px',
        backgroundColor: props.on? "white": 'red'
    }
    const indicatorStyle ={
        width: '30px',
        height:'30px',
        border:'1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
        backgroundColor: props.on? 'green': 'red'
    }
    // const mouseClickHandler =()=>{
    //     setOn(true)
    // }
    return(<>
        {<div onClick={()=>props.onClick()} style={onStyle} >On</div>}
            {<div onClick={()=>props.onClick()} style={offStyle}>Off</div>}
        <div style={indicatorStyle}>Ind</div>
        </>
    )
}
// export const OnOff = (props: OnOffpropsType) => {
//     return (
//         <div className={s.OnOff}>
//             {props.on ? <div className={s.ugol + ' ' + s.green}>Onn</div> : <div className={s.ugol}>Onn</div>}
//             {props.on ? <div className={s.ugol}>Off</div> : <div className={s.ugol + '  ' + s.red}>Off</div>}
//             {props.on ? <div className={s.krug + ' ' + s.green}></div> : <div className={s.krug + ' ' + s.red}></div>}
//         </div>)
// };
