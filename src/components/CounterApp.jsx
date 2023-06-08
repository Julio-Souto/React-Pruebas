import { useState } from 'react'; 
import PropTypes from 'prop-types';
import style from './counterapp.module.css';
import ButtonClick from './ButtonClick';

export default function CounterApp({value = 0, incremento = 0}){
  const [count, setCount] = useState(value);
  let menos = () => {
    setCount(count - incremento);
  }
  let mas = () => {
    setCount(count + incremento);
  }
  let resetC = () => {
    if(count==0)
      setCount(value);
    else
      setCount(0);
  }
  return <>
    <div className={style.counter+" space-y-4"}>
      <h1>CounterApp</h1>
      <h2 className={style.count}>{ count }</h2>
      <ButtonClick click={menos} text={"-"} />
      <ButtonClick click={resetC} text={"reset"} />
      <ButtonClick click={mas} text={"+"} />
    </div>
  </>
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}