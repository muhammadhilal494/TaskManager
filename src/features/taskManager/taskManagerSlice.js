import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    tasks: [{id: 1,text: "Hello World"}]
}

export const taskManagerSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {            
                id: nanoid() ,
                text: action.payload
        }
        state.tasks.push(task)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        }
    }
})

export const {addTask, removeTask} = taskManagerSlice.actions;

export default taskManagerSlice.reducer;