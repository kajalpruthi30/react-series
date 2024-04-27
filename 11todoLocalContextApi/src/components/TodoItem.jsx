import React, { useState, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
    // Individual todo message
    const [msg, setMsg] = useState(todo.title);

    // false - show pencil
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    // Importing from context
    const { updateTodo, deleteTodo, toggleChecked } = useTodo();

    // 1. Function
    const edit = () => {
        updateTodo(todo.id, msg);
    };

    // 2. Function
    const del = () => {
        deleteTodo(todo.id);
    };

    // 3. Function
    const toggle = () => {
        // This will set reverse of the current value of completed
        toggleChecked(todo.id);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'
            }`}
        >
            {/* Checkbox */}
            <input type="checkbox" checked={todo.completed} className="cursor-pointer" onChange={toggle} />

            {/* Task Message */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
                } ${todo.completed ? 'line-through' : ''}`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {

                    if (isTodoEditable) {
                        // On 2nd click
                        edit();
                        setIsTodoEditable(false);

                    }
                    else  {
                        // On 1st click - state changes to true (save)
                        setIsTodoEditable((prev) => !prev)
                    }
                }}

                // disable the button when task is completed
                disabled={todo.completed}
            >
                {isTodoEditable ? '📁' : '✏️'}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={del}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

