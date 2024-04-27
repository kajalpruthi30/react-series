import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {

  // each todo in all todos - value in prevValues

  // Array of all the todos
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // adding new todo in the beginning of the array
    setTodos((prevValues) => [{ id: Date.now(), title, completed: false }, ...prevValues]);
  }

  const updateTodo = (id, newTitle) => {
    // setTodos((prevValues) => prevValues.map((value) => (value.id === id ? title : value)))
    setTodos((prevValues) => prevValues.map((value) => (value.id === id ? { ...value, title: newTitle } : value)))
  }

  const deleteTodo = (id) => {
    // Kept all the values and delete the one with the given id
    setTodos((prevValues) => prevValues.filter((value) => value.id!== id))
  }
 
  // Toggling the checkbox - toggle checked means completed
  const toggleChecked = (id) => {
    setTodos((prevValues) => prevValues.map((value) => (value.id === id ? {...value, completed:!value.completed} : value)))
  }


  
  // Fetch todos after loading the application
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos: "))
    if( storedTodos && storedTodos.length > 0 ) {
      setTodos(storedTodos)
    }
  },[])


  // To store in localStorage - whenever there's a change in todos, store them
  useEffect(() => {
    localStorage.setItem("todos: ", JSON.stringify(todos))
  },[todos])

  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleChecked}}>
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
    </TodoProvider>
  );
}

export default App
