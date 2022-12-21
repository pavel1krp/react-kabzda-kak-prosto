import React, {useState} from 'react';

type RatingPropstype = {
    // value: 0|1|3|4|5|2;
    callBack: (num: number) => void
}

const UncontrolRating = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} callBack={()=>setValue(1)} />
            <Star selected={value > 1} callBack={()=>setValue(2)} />
            <Star selected={value > 2} callBack={()=>setValue(3)} />
            <Star selected={value > 3} callBack={()=>setValue(4)} />
            <Star selected={value > 4} callBack={()=>setValue(5)} />
        </div>
    );
};
export default UncontrolRating;

type StarPropsType = {
    selected: boolean,
    callBack: () => void
}

const Star = (props: StarPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return <span onClick={onClickHandler}>{props.selected? <b>star </b>: 'star '}</span>;
}