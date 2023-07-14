import React from 'react'

const Header = ({ title }) => {
  let arr = title.split("Header");
  console.log(arr)
  return (
    <div>
        <h1 className='text-white flex justify-center mt-10 text-2xl'>{arr[0]} <span className='px-2 text-yellow-500'>Header</span>{arr[1]}</h1>
    </div>
  )
}

export default Header