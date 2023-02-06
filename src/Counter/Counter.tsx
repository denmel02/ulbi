import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const click = () => setCount((oldCount) => oldCount + 1);

  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ click }>Add</button>
    </div>
  )
}
