import React from 'react';
import s from './Select.module.css'
type ItemsType ={
    title:string
    value:any
}

type SelectPropsType = {
    value?:any
    onchange: (value:any)=>void
    items:ItemsType[]
}

const Select = (props:SelectPropsType) => {
    const selectedItem = props.items.find(el=> el.value === props.value);
    return (
        <>
        <div className={s.select}>
            <h3>{selectedItem && selectedItem.title}</h3>
            <div className={s.items + s.active}>
            {props.items.map(el=>{
                return(
                    <div>{el.title}</div>
                )
            })}
            </div>
        </div>
    {/*<select name="" id="">*/}
    {/*    <option value="1">Minsk</option>*/}
    {/*    <option value='2'>Moscow</option>*/}
    {/*    <option value='3'>Kiev</option>*/}
    {/*</select>*/}
        </>
    );
};

export default Select;