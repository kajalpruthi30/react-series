import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {setTodos} from './reducers/todoSlice'
import './App.css'

function App() {

  const dispatch = useDispatch();

  // From Redux
  const todos = useSelector(state => state.todos)

  
  // Fetch todos after loading the application
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos: "));
    if (storedTodos && storedTodos.length > 0) {
      // Dispatch an action to update the Redux state with the fetched todos
      dispatch(setTodos(storedTodos));
    }
  }, [dispatch]);


  // // To store in localStorage - whenever there's a change in todos, store them
  useEffect(() => {
    localStorage.setItem("todos: ", JSON.stringify(todos))
  },[todos])

  

  return (
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop over todos and Add TodoItem here */}
                {todos.map((curr) => (
                  <div key={curr.id} className='w-full'>
                    <TodoItem todo={curr}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
  );
}

export default App
