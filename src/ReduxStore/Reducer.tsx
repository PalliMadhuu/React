import { AnyAction } from "redux";

const initialState={count:0}
export  function countReducer(state=initialState,action:AnyAction)
  {
        switch(action.type)
        {
          case 'Increment':return {...state,count:state.count+1}
          case 'Decrement':return {...state,count:state.count-1}
          default :return {...state,count:0}
        }
  }