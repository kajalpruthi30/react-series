import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    // todos: [{id: "1", text:"Web Pages"}]
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
        // property along with the functions
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            console.log(state.todos)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer