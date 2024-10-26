import React from 'react'


const Btn = () => {
    const userInput=()=>{}
  return (
    <>
    <p className='text-center text-3xl mt-2 font-semibold'>Stay Update with TrendyNews</p>
    <div className='flex justify-center  '>
        <button className='bg-orange-400 rounded-full p-2 ms-4 w-32 mt-4 ' onClick={userInput} value="Sport">Sport</button>
        <button className='bg-orange-400 rounded-full p-2 ms-4 w-32 mt-4 ' onClick={userInput} value="Politics">Politics</button>
       <button className='bg-orange-400 rounded-full p-2 ms-4 w-32 mt-4 ' onClick={userInput} value="Entertainment"> Entertainment</button>
        <button className='bg-orange-400 rounded-full p-2 ms-4 w-32 mt-4 ' onClick={userInput} value="Health">Health</button>
        <button className='bg-orange-400 rounded-full p-2 ms-4 w-32 mt-4 ' onClick={userInput} value="Fitness">Fitness</button>
    </div>
 
    </>
  )
}

export default Btn