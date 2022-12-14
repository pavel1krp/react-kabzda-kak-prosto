import React, {useState} from 'react';

import s from './OnOff.module.css'

type OnOffpropsType = {
    onChange: (on:boolean)=> void
}



export const OffOn =(props: OnOffpropsType) =>{
    const  [on,setOn] = useState(false)
    const onStyle ={
        width: '30px',
        height:'30px',
        border:'1px solid black',
        display: 'inline-block',
        padding:'2px',
        backgroundColor: on? 'green': 'white'
    }
    const offStyle ={
        width: '30px',
        height:'30px',
        border:'1px solid black',
        display: 'inline-block',
        padding:'2px',
        backgroundColor: on? "white": 'red'
    }
    const indicatorStyle ={
        width: '30px',
        height:'30px',
        border:'1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
        backgroundColor: on? 'green': 'red'
    }
    // const mouseClickHandler =()=>{
    //     setOn(true)
    // }
    const onClicked =()=>{
        setOn(true)
        props.onChange(true)
    }
    const ofClicked =()=>{
        setOn(false)
        props.onChange(false)
    }
    return(<>
        {<div onClick={onClicked} style={onStyle} >On</div>}
            {<div onClick={ofClicked} style={offStyle}>Off</div>}
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
