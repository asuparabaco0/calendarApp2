import { INCREMENT, DECREMENT } from "./constants";

export const increment = payload => ({
    type:INCREMENT,
    /*increment(c)を呼ぶことで、INCREMENTという引数のc分だけ 
    state のcountを増加させることができる
    payload type is number*/
    payload
});

export const decrement = payload => ({
    type: DECREMENT,
    payload
});

