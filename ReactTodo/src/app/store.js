import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/sliceTodo';

export const store = configureStore({
    reducer: todoReducer
});
