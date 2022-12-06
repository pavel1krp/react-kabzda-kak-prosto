import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OffOn} from "./OnOff";

export default {
    title: 'OnOff Stories',
    components: OffOn
}

const callback = action('on or of clicked')

export const offOn = ()=> <OffOn onChange={callback}/>
