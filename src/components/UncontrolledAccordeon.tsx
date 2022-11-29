import React, { useState } from 'react';

type UncontrolledAccordeonType = {
    titleValue: string,
    // collapsed: boolean,
}

const UncontrolledAccordeon = (props: UncontrolledAccordeonType) => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccoredeonTitle title={props.titleValue} onclick ={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <UncontrolledAccordeonBody/>}
        </div>
    )
}


type UncontrolledAccordeonTitleType = {
    title: string;
    onclick: ()=>void
}

const AccoredeonTitle = (props: UncontrolledAccordeonTitleType) => {
    return (
        <h3 onClick={()=>props.onclick()}>{props.title}</h3>
    );
}

const UncontrolledAccordeonBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>12</li>
            <li>123</li>
        </ul>
    )
}

export default UncontrolledAccordeon;