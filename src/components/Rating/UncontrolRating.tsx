import React, {useState} from 'react';
export type valueTypes =  0|1|3|4|5|2

type RatingPropstype = {
    value: valueTypes;
}

const UncontrolRating = (props:RatingPropstype) => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} />
            <Star selected={value > 1} />
            <Star selected={value > 2} />
            <Star selected={value > 3} />
            <Star selected={value > 4} />
        </div>
    );
};
export default UncontrolRating;

type StarPropsType = {
    selected: boolean,
}

const Star = (props: StarPropsType) => {

    return <span>{props.selected? <b>star </b>: 'star '}</span>;
}