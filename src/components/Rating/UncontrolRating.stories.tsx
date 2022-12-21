import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import UncontrolRating from "./UncontrolRating";
export default {
    title: 'UncontrolRating Stories',
    components: UncontrolRating
}

export const EmptyStar = ()=> <UncontrolRating />;
export const Star1 = ()=> <UncontrolRating  />;
export const Star2 = ()=> <UncontrolRating />;
export const Star3 = ()=> <UncontrolRating  />;
export const Star4 = ()=> <UncontrolRating  />;
export const Star5 = ()=> <UncontrolRating />;


