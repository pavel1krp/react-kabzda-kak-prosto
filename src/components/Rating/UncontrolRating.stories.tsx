import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import UncontrolRating from "./UncontrolRating";
export default {
    title: 'UncontrolRating Stories',
    components: UncontrolRating
}

export const EmptyStar = ()=> <UncontrolRating value={0}/>;
export const Star1 = ()=> <UncontrolRating value={1} />;
export const Star2 = ()=> <UncontrolRating value={2} />;
export const Star3 = ()=> <UncontrolRating value={3} />;
export const Star4 = ()=> <UncontrolRating value={4} />;
export const Star5 = ()=> <UncontrolRating value={5} />;


