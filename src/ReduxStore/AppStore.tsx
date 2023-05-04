import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './Reducer';


export const store = configureStore(
    {
        reducer: {
            count:countReducer

        }
    }
)


