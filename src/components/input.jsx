import React, { useState } from 'react'

const Input = () => {
  const [todo, setTodo] = useState('');
  // add todo to local storage on submit
  let addedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const addTodo = () => {
    addedTodos = [...addedTodos, {
      id: Math.random() * 1000000,
      todoName: todo,
      isCompleted: false
    }];

    // save newly added todo to localstorage
    localStorage.setItem('todos', JSON.stringify(addedTodos));
  }
  return (
    <>
      <div className="input_wrap bg-white py-[10px] px-[15px] shadow">
        <div className="flex flex-col gap-2">
          <div className='w-full'>
            <input type="text" onChange={e => setTodo(e.target.value)} value={todo} className='p-2 w-full focus:border-indigo-500 outline-none border rounded-md' placeholder='Type here...' />
          </div>
          <div className='w-full'>
            <button onClick={addTodo} className='p-2 w-full hover:bg-indigo-600 duration-300 rounded-md bg-indigo-500 text-white'>
              Add todo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Input