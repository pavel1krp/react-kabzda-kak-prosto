import React, {useState} from 'react';

type UncontrolledAccordeonType = {
    titleValue: string,
}

const UncontrolledAccordeon = (props: UncontrolledAccordeonType) => {
    const [collapsed,setCollapsed] = useState(false) ;
    const onclickHandler =() =>{
        collapsed? setCollapsed(false): setCollapsed(true)
    }
    return (
        <div>
            <AccoredeonTitle title={props.titleValue} callBack={onclickHandler}  />
            {!collapsed &&<AccordeonBody/> }
        </div>

    )
}


type AccordeonTitleType = {
    title: string
    callBack: ()=>void
}

const AccoredeonTitle = (props: AccordeonTitleType) => {
    const onclickHandler =() =>{
        props.callBack()
    }
    return (
        <h3 onClick={()=> onclickHandler()}>{props.title}</h3>
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

export default UncontrolledAccordeon;