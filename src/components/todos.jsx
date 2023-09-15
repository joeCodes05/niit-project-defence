import React from 'react'

const Todos = ({ allTodos }) => {
  return (
    <>
      {allTodos.map((data, index) => {
        const { id, todoName, isCompleted } = data;
        return (
          <div key={index} className='py-3 cursor-pointer px-2 mt-2 rounded-md border flex items-center gap-3'>
            <div className='flex items-center'>
              <button className='h-[20px] w-[20px] border rounded-full'></button>
            </div>
            <div>
              <h3 className='text-gray-700 font-[500] text-lg'>
                {todoName}
              </h3>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Todos