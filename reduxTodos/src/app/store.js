import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../functionss/TodoFunctions/todosSlice'

export const store=configureStore({
    reducer:todosReducer
})