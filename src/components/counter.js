import { useState } from "react";

const Counter=()=>{
    const [count, setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count=>count+1)
    }
    const handleReset=()=>{
        setCount(count=>0)
    }
    const handleDecrement=()=>{
        setCount(count=>count-1)
    }
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
export default Counter;