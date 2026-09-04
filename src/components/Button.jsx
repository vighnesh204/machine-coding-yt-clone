import React from 'react'

const Button = ({ item }) => {
  return (
    <div>
       <button className='px-4 py-2 bg-gray-200 rounded-lg font-semibold text-sm hover:border hover:border-gray-400'>{item}</button>
    </div>
  )
}

export default Button