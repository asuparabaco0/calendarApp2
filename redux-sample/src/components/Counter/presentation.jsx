//presentational component is responsible only for display
import React from "react";
import { increment } from "../../redux/count/actions";

const Counter = ({count, increment, decrement}) => {
return(
<>
<div>{count}</div>
<button onClick={()=> increment(1)}>+</button>
<button onClick={()=> decrement(1)}>-</button>
</>
);
}

export default Counter;
