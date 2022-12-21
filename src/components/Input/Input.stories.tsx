import React, {ChangeEvent, MouseEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input",
    // component: input,
};

export const UncontrolledInput = () => <input/>

export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState('')

    // const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    //     setValue(e.currentTarget.value)
    // }

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setValue((inputRef.current as HTMLInputElement).value)
    }

    return (
        <> <input ref={inputRef}/>
            <button onClick={onClickHandler}>++</button>
            =
            {value}
        </>)
}

export const ControlledInputWithFixedValue = () => <input value={'It-incubator'}/>

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
return (
    <input onChange={onChange} type="text" value={value}/>
)
}

export const ControlledCheckBox = ()=>{
    const [value, setValue] = useState<boolean>(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return (
        <input onChange={onChange} type="checkbox" checked={value}/>
    )
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string|undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
       setValue(e.currentTarget.value)
    }
 return(
     <select onChange={onChange} value={value}>
         <option >none</option>
         <option value="1">Minsk</option>
         <option value="2">Moskva</option>
         <option value="3">Kiev</option>
     </select>
 )

}