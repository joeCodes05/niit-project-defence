import React, { useState } from 'react'
import Header from './components/header'
import Todos from './components/todos'
import Swal from 'sweetalert2';

const App = () => {
  const [todo, setTodo] = useState('');
  // add todo to local storage on submit
  const [allTodos, setAlltodos] = useState([]);
  const addTodo = () => {
    if (todo.length < 1) {
      Swal.fire(
        'Error?',
        'Input field cannot be empty!',
        'error'
      )
    } else {
      setAlltodos([...allTodos, {
        id: Math.random() * 10000,
        todoName: todo,
        isCompleted: false
      }]);
      setTodo('')
    }
  }

  // delete todo event
  const deleteTodo = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setAlltodos(allTodos.filter((todo) => todo.id !== id));
        Swal.fire(
          'Deleted!',
          'Your todo has been deleted.',
          'success'
        )
      }
    })
  }

  // complete todo event
  const completeTodo = (id, isCompleted) => {
    if (!isCompleted) {
      Swal.fire(
        'Congratulations!',
        'You have completed this todo!',
        'success'
      )
    }
    setAlltodos(allTodos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }
  return (
    <>
      <main className='bg-slate-50 w-screen h-screen flex items-center justify-center'>
        <div className='todo_wrap overflow-hidden bg-white rounded-[10px] shadow-lg ring-1 ring-gray-200 w-[450px] max-h-[500px] h-[500px] relative'>
          <Header />
          {/* input */}
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
          <div className='todo_content_wrap max-h-[100%] pb-[180px] px-[15px] overflow-y-auto'>
            <h5 className='text-gray-400 text-sm text-center mt-2 font-light'>All todos</h5>
            <div className='all_todo_wrap'>
              <Todos onDelete={deleteTodo} onComplete={completeTodo} allTodos={allTodos} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App