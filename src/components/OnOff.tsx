import React from 'react';

import s from './OnOff.module.css'

type OnOffpropsType = {
    on: boolean;
}

const OnOff = (props:OnOffpropsType) => {
   return  (
        <div className={s.OnOff}>
            {props.on?  <div className={s.ugol + ' ' + s.green}>Onn</div>:<div className={s.ugol}>Onn</div>}
            {props.on? <div className={s.ugol}>Off</div>: <div className={s.ugol+ '  ' + s.red}>Off</div>}
            {props.on? <div className={s.krug + ' ' + s.green}></div>:<div className={s.krug + ' ' + s.red }></div> }
        </div>)
};

export default OnOff;