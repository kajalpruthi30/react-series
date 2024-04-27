import { createContext, useContext } from "react";

// 1. Context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo msg",
            // completed here means checked i.e., the task is done 
            completed: false
        },
    ],

    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    deleteTodo: (id) => {},
    toggleChecked: (id) => {}
})

// 2. Provider
export const TodoProvider = TodoContext.Provider

// 3. Consumer hook
export const useTodo = () => {
  return useContext(TodoContext);
}