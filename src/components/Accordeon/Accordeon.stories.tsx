import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordeon from "./Accordeon";

export default {
    title: 'Accordeon Stories',
    components: Accordeon
}

const callback = action('click')

const onclickHandler = action('some item was clicked')

export  const Accordeon1 = ()=> <Accordeon  items={[{title:'Pasha', value:1},{title:'Dasha', value:2},{title:'Sasha', value:3}]} titleValue={'Net1'}
                                            collapsed={true} onClick={callback}/>
export  const Accordeon2 = ()=> <Accordeon  items={[{title:'Pasha', value:1},{title:'Dasha', value:2},{title:'Sasha', value:3}]} titleValue={'Net2'}
                                            collapsed={false} onClick={(value)=>alert(value)}/>

export const Accordeon3 = ()=> {
  const [collapsed, setCollapsed]=useState(true);
  return <Accordeon items={[{title:'Pasha', value:1},{title:'Dasha', value:2},{title:'Sasha', value:3}]}
                    titleValue={'Net'} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)}/>

}

export  const Accordeon4 = ()=> <Accordeon  items={[{title:'Pasha', value:3121},{title:'Dasha', value:3122},{title:'Sasha', value:33321}]} titleValue={'Net2'}
                                            collapsed={false} onClick={(value)=>alert(`user with ${value} happy`)}/>