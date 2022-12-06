import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordeon from "./Accordeon";

export default {
    title: 'Accordeon Stories',
    components: Accordeon
}

const callback = action('click')

export  const Accordeon1 = ()=> <Accordeon titleValue={'Net1'} collapsed={true} onClick={callback}/>
export  const Accordeon2 = ()=> <Accordeon titleValue={'Net2'} collapsed={false} onClick={callback}/>

export const Accordeon3 = ()=> {
  const [collapsed, setCollapsed]=useState(true);
  return <Accordeon  titleValue={'Net'} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)}/>

}

