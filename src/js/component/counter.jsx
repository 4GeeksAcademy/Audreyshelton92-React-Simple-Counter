import React, {useState} from "react";


const Counter = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className= "div">
      <h1>Simple Counter</h1>
      <p>Current Count: {count}</p>
      <button className= "increment" onClick={() => setCount(count + 1)}>Increment</button>
      <button className= "reset" onClick={() => setCount(0)}>Reset</button>
      <button className= "decrement" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
