import React from 'react';

type AccordeonType = {
    titleValue: string,
    collapsed: boolean,
    onClick: ()=>void
}

const Accordeon = (props: AccordeonType) => {

    return (
        <div>
            <AccoredeonTitle title={props.titleValue} onClick={props.onClick} col={props.collapsed} />
            {!props.collapsed && <AccordeonBody/>}
        </div>
    )
}


type AccordeonTitleType = {
    title: string;
    onClick:(collapsedAccordeon:boolean)=>void
    col: boolean
}

const AccoredeonTitle = (props: AccordeonTitleType) => {
    return (
        <h3 onClick={()=>props.onClick(!props.col)} >{props.title}</h3>
    );
}

const AccordeonBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>12</li>
            <li>123</li>
        </ul>
    )
}

export default Accordeon;