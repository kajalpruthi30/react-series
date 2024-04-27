import React, {useState} from 'react'
import {useDispatch } from 'react-redux'
import { addTodo } from '../reducers/todoSlice'

function TodoForm() {

  const[msg, setMsg] = useState("" )
  const dispatch = useDispatch()

  const add = (e) => {
    e.preventDefault()
    if(!msg) return
    dispatch(addTodo(msg))
    setMsg('')
  }

  return (
    <form onSubmit={add} className="flex">
        <input
            onChange={(e) => setMsg(e.target.value)}
            type="text"
            value={msg}
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default TodoForm
