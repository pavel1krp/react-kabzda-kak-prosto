import React, { useState } from 'react';

type UncontrolledAccordeonType = {
    titleValue: string,
    collapsed: boolean,
}

const UncontrolledAccordeon = (props: UncontrolledAccordeonType) => {

    return (
        <div>
            <AccoredeonTitle title={props.titleValue}/>
            {props.collapsed && <UncontrolledAccordeonBody/>}
        </div>
    )
}


type UncontrolledAccordeonTitleType = {
    title: string
}

const AccoredeonTitle = (props: UncontrolledAccordeonTitleType) => {
    return (
        <h3 >{props.title}</h3>
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