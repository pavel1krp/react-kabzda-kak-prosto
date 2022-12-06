import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import UncontrolledAccordeon from "./UncontrolledAccordeon";

export default {
    title: 'UncontrolledAccordeon Stories',
    components: UncontrolledAccordeon
}

const callback = action('click')

export  const AccordeonCollapse = ()=> <UncontrolledAccordeon titleValue={'Collapsed'} collapsed={true} />
export  const AccordeonUnCollapsed = ()=> <UncontrolledAccordeon titleValue={"Uncollapsed"} collapsed={false}/>