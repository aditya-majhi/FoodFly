import React, { useState } from 'react'
import foodApi from '../API/foodApi'
import FoodItem from './foodItem'

function FoodItems() {

  const [items , setItems] = useState(foodApi);

  function filterItems(type){
    const arr = foodApi.filter( (fItem) => {
        return fItem.cat === type ;
    })

    setItems(arr) ;
  }

  return (
    <div className=''>
      <div className='btn flex items-center justify-center my-4 space-x-2'>
        <button className='text-yellow-500 border border-yellow-500 px-2 py-1 rounded-full font-semibold  hover:border-yellow-500 hover:bg-yellow-500 hover:text-white' onClick={() => setItems(foodApi)}>All</button>
        <button className='text-yellow-500 border border-yellow-500 px-2 py-1 rounded-full font-semibold  hover:border-yellow-500 hover:bg-yellow-500 hover:text-white' onClick={() => filterItems("Pizza")}>Pizza</button>
        <button className='text-yellow-500 border border-yellow-500 px-2 py-1 rounded-full font-semibold  hover:border-yellow-500 hover:bg-yellow-500 hover:text-white' onClick={() => filterItems("Burger")}>Burger</button>
        <button className='text-yellow-500 border border-yellow-500 px-2 py-1 rounded-full font-semibold  hover:border-yellow-500 hover:bg-yellow-500 hover:text-white' onClick={() => filterItems("Chicken")}>Chicken</button>
      </div>
      <div className='flex flex-wrap justify-center'>
        {
          items.map( (fItem) => {
            return (
              <FoodItem 
                src = {fItem.src}
                title = {fItem.title}
              />
            );
          })
        }
      </div>
    </div>
  )
}

export default FoodItems

