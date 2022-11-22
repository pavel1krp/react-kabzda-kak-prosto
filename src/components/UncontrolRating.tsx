import React, {useState} from 'react';

type RatingPropstype ={
    // value: 0|1|3|4|5|2;
    callBack: (num:number)=>void
}

const Rating = ()=> {
    const [value,setValue] = useState(0)
    const handler = (num:number)=>{
        setValue(num)
    }
    return (
        <div>
            <Star selected ={value >0}  callBack={handler} id={1}/>
            <Star selected ={value >1} callBack={handler} id={2}/>
            <Star selected ={value >2} callBack={handler} id={3}/>
            <Star selected ={value >3} callBack={handler} id={4}/>
            <Star selected ={value >4} callBack={handler} id={5}/>
        </div>
    );
};

export default Rating;

type StarPropsType ={
    selected: boolean,
    callBack:(num:number)=>void
    id:number;
}

const Star = (props: StarPropsType)=>{
    const onClickHandler =()=> {
        props.callBack(props.id)
    }
    if(props.selected === true){
        return <span onClick={onClickHandler}><b>star </b></span>
    } return <span onClick={onClickHandler}>star </span>

}