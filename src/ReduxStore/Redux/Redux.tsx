import React, { FC } from 'react';
import './Redux.css';
import { useDispatch, useSelector } from 'react-redux';
import { readConfigFile } from 'typescript';

interface ReduxProps {}
const Redux: FC<ReduxProps> = () => {
  const dispatch=useDispatch();
  const count = useSelector((state: any) => state.count.count);
  return(
  <div className="Redux" data-testid="Redux">
    <p>count : {count}</p>
    <button onClick={() => dispatch({ type: 'Increment' })}>Increment +</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement -</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
  </div>
  )
}

export default Redux;
