import React from 'react'

function FoodItem(props) {
  return (
    <div className='border border-gray-200 rounded-md flex flex-col items-center m-3 p-2 w-1/2 md:w-1/4 lg:1/5'>
      <img className='h-[175px]  object-cover border rounded-md' src={props.src} alt=''/>
      <h2 className='font-semibold text-lg'>{props.title}</h2>
      <p>Rupees</p>
      <button className='text-white bg-yellow-500 border border-yellow-500 rounded-full px-2 py-1 font-semibold hover:bg-yellow-600 hover:scale-105 duration-150 my-2'>Order Now</button>
    </div>
  )
}

export default FoodItem ;
