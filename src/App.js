import React, { useState } from 'react'
import Header from './components/header'
import Input from './components/input'
import Todos from './components/todos'

const App = () => {
  const [allTodos, setAllTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  return (
    <>
      <main className='bg-slate-50 w-screen h-screen flex items-center justify-center'>
        <div className='todo_wrap overflow-hidden bg-white rounded-[10px] shadow-lg ring-1 ring-gray-200 w-[450px] max-h-[500px] h-[500px] relative'>
          <Header />
          <Input />
          <div className='todo_content_wrap px-[15px] overflow-y-auto'>
            <h5 className='text-gray-400 text-sm text-center mt-2 font-light'>All todos</h5>
            <div className='all_todo_wrap'>
              <Todos allTodos={allTodos} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App