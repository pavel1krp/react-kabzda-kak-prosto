import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} onclick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onclick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onclick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onclick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onclick={props.onClick} value={5}/>
        </div>
    );
};

export default Rating;

type StarPropsType = {
    selected: boolean,
    onclick: (value: RatingValueType) => void
    value: RatingValueType
}

const Star = (props: StarPropsType) => {
    const onclickHandler = () => {
        props.onclick(props.value)
    }
    return <span onClick={onclickHandler}>{props.selected ? <b>Star </b> : 'Star '}</span>
}