import React, {useState} from "react";
import Select from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    components: Select
}

export const SelectBase = ()=> <Select value={'3'} onchange={action('value changed')} items={[{value:'1', title:'Minsk'},
    {value:'3', title:'Kiev'},{value:'2', title:'Moscow'}]}/>

export const SelectWitOutValue = ()=> <Select  onchange={action('value changed')} items={[{value:'1', title:'Minsk'},
    {value:'3', title:'Kiev'},{value:'2', title:'Moscow'}]}/>