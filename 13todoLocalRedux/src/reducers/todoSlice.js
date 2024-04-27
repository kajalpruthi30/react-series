import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    // todos: [{id: "1", title: "Hello", completed: false}]
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
        
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload)
            state.todos[index].title = action.payload
        },
        toggleChecked: (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload ? {...todo, completed:!todo.completed} : todo))
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        },
    }
})

export const {addTodo, removeTodo, updateTodo, toggleChecked, setTodos} = todoSlice.actions
export default todoSlice.reducer