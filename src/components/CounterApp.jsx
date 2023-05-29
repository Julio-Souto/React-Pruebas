import { useState } from 'react'; 
import style from './counterapp.module.css';

export default function CounterApp({value = 0}){
  const [count, setCount] = useState(value);
  let menos = () => {
    setCount(count - 1);
  }
  let mas = () => {
    setCount(count + 1);
  }
  let resetC = () => {
    if(count==0)
      setCount(value);
    else
      setCount(0);
  }
  return <>
    <div className={style.counter}>
      <h1>CounterApp</h1>
      <h2 className={style.count}>{ count }</h2>
      <button onClick={menos}>-</button>
      <button onClick={resetC}>reset</button>
      <button onClick={mas}>+</button>
    </div>
  </>
}

