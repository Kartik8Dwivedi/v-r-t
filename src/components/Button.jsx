import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <div className='w-screen flex justify-center mt-20'>
        <button className='bg-yellow-500 text-2xl flex justify-center items-center text-blue-900  w-32 h-14 rounded-[30px]' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button