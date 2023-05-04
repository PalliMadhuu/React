import { configureStore } from '@reduxjs/toolkit';
import {GetFormula} from './FormulaReducer'

export const storeFormula=configureStore(
    {
        reducer:
        {
            formula:GetFormula
        }
    }
)