import React from 'react';

type RatingPropstype ={
    value: 0|1|3|4|5|2
}

const Rating = (props:RatingPropstype) => {
    return (
        <div>
        <Star selected ={props.value >0} />
        <Star selected ={props.value >1} />
        <Star selected ={props.value >2} />
        <Star selected ={props.value >3} />
        <Star selected ={props.value >4} />
        </div>
    );
};

export default Rating;

type StarPropsType ={
    selected: boolean,
}

const Star = (props: any)=>{
   if(props.selected === true){
       return <span><b>star </b></span>
   } return <span>star </span>

}