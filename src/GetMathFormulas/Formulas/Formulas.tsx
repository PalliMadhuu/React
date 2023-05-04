import React, { FC, useRef } from 'react';
import './Formulas.css';
import { AreaOfRectangle,AreaOfSquare,AreaOfTriangle } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';

interface FormulasProps {}

const Formulas: FC<FormulasProps> = () => {
  function generateFormula(event:any)
{
  event.preventDefault();
  let item:any;
  if(formRef.current)
  {
    item=formRef.current.GetItem.value;
    switch (item)
    {
        case 'square' : dispatch(AreaOfSquare()) ;break;
          case 'rectangle':  dispatch(AreaOfRectangle()) ; break;
          case 'triangle' :dispatch(AreaOfTriangle())
    }
  }

}
  const formRef=useRef<HTMLFormElement>(null);
  const dispatch=useDispatch();
  const formula=useSelector((state:any)=>state.formula)
  return(
    
  <div className="Formulas" data-testid="Formulas">

    <h1>Math Formulas</h1>
<form onSubmit={generateFormula} ref={formRef}>
<select name="GetItem">
  <option>choose </option>
  <option value="square">Area Of Square</option>
  <option value="triangle">Area Of Traingle</option>
  <option value="rectangle">Area Of Rectangle</option>
</select>
<button type="submit" >Get Formula</button>
</form>
<p>formula : {formula.formula}</p>
<p>Example : {formula.example}</p>
  </div>
  )
}

export default Formulas;
