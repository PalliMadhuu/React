import {AnyAction} from '@reduxjs/toolkit'
import {areaOfRectangle,areaOfSquare,areaOfTriangle} from './FormulaTypes'
const initialState={formula:'',example:''}

export function GetFormula(state=initialState,action:any)
{
       switch(action.type)
       {
        case areaOfRectangle:return {...state,formula:'length * breadth ',example:action.payLoad}
        case areaOfTriangle:return {...state,formula:'1/2 * base * height ',example:action.payLoad}
        case areaOfSquare:return {...state,formula:'Side * Side ',example:action.payLoad}
        default :return state
    }
}