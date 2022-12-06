import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Rating, {RatingValueType} from "./Rating";

export default {
    title: 'Rating Stories',
    components: Rating
}

export const EmptyStar = ()=> <Rating value={0} onClick={x=>x}/>;
export const Star1 = ()=> <Rating value={1} onClick={x=>x}/>;
export const Star2 = ()=> <Rating value={2} onClick={x=>x}/>;
export const Star3 = ()=> <Rating value={3} onClick={x=>x}/>;
export const Star4 = ()=> <Rating value={4} onClick={x=>x}/>;
export const Star5 = ()=> <Rating value={5} onClick={x=>x}/>;

export const ChangeRating = ()=>{
 const [rating,setRating]= useState<RatingValueType>(3);
 return <Rating value={rating} onClick={setRating}/>
}
