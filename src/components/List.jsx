import React from 'react'

const List = ({ title }) => {
  return (
    <div className='flex justify-center'>
        <ul className='list-disc mt-5'>
            {
                title.map((element) => {
                    return <li className='text-white text-xl ml-10'>{element}</li>
                })
            }
        </ul>
    </div>
  )
}

export default List