import React from 'react';

type ItemType = {
    title: string
    value: any
}


type AccordeonType = {
    titleValue: string,
    collapsed: boolean,
    onClick: (value:number)=>void
    items: Array<ItemType>
}

const Accordeon = (props: AccordeonType) => {

    return (
        <div>
            <AccoredeonTitle title={props.titleValue} onClick={props.onClick} col={props.collapsed} />
            {!props.collapsed && <AccordeonBody onclick={props.onClick} items={props.items}/>}
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

type  BodyPropsType = {
    items: ItemType[]
    onclick:(value:number)=>void
}

const AccordeonBody = (props:BodyPropsType) => {

    return (
        <ul>
            {props.items.map((el, index)=>{
                const onClickHandler =()=>{
                    props.onclick(el.value)
                }
                return (
                    <li onClick={onClickHandler} key={el.value}>{el.title}</li>
                )
            })}
        </ul>
    )
}

export default Accordeon;