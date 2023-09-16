import React from 'react'
import * as AiIcons from 'react-icons/ai'

const Todos = ({ allTodos, onDelete, onComplete }) => {
  return (
    <>
      {allTodos.map((data, index) => {
        const { id, todoName, isCompleted } = data;
        return (
          <div key={index} className={isCompleted ? 'py-3 bg-green-50 border-green-300 px-2 mt-2 rounded-md border flex items-center gap-3' : 'py-3 bg-white px-2 mt-2 rounded-md border flex items-center gap-3'}>
            <div className="mr-auto flex items-center gap-3">
              <div className='flex items-center'>
                <button onClick={() => onComplete(id, isCompleted)} className='h-[20px] w-[20px] flex items-center justify-center border rounded-full text-green-500 border-green-500'>
                  <AiIcons.AiOutlineCheck />
                </button>
              </div>
              <div>
                <h3 className='text-gray-700 font-[500] text-lg'>
                  {todoName}
                </h3>
              </div>
            </div>
            <div>
              <button onClick={() => onDelete(id)} className='h-[20px] w-[20px] rounded-full border border-red-500 text-red-500 flex items-center justify-center'>
                <AiIcons.AiOutlineClose />
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Todos