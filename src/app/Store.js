import {configureStore} from '@reduxjs/toolkit';
import taskManagerReducer from '../features/taskManager/taskManagerSlice'

export const store = configureStore({
    reducer: taskManagerReducer
})