import React from 'react';

type AccordeonType = {
    titleValue: string,
    collapsed: boolean,
}

const Accordeon = (props: AccordeonType) => {

    return (
        <div>
            <AccoredeonTitle title={props.titleValue}/>
            {!props.collapsed && <AccordeonBody/>}
        </div>
    )
}


type AccordeonTitleType = {
    title: string;
}

const AccoredeonTitle = (props: AccordeonTitleType) => {
    return (
        <h3>{props.title}</h3>
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