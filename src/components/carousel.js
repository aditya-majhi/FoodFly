import React from 'react' ;

function Carousel() {
  return (
      <div className='mt-10 relative'>
        <div className='absolute h-full w-full p-2 bg-black/60 flex flex-col justify-center'>
            <h2 className='text-white font-bold text-3xl mx-auto md:mx-12 md:text-5xl'>Get Flat <span className='text-yellow-500'>50%</span> Off,</h2>
            <h2 className='text-white font-bold text-3xl mx-auto md:mx-12 md:text-5xl'>On your First Order</h2>
            <div className='flex mx-auto space-x-2 mt-4 md:mx-12'>
              <button className='text-yellow-500 border border-yellow-500 px-2 py-1 rounded-full font-semibold hover:text-yellow-600 hover:border-yellow-600 '>Order Now</button>
              <button className='text-white bg-yellow-500 border border-yellow-500 rounded-full px-2 py-1 font-semibold hover:bg-yellow-600'>Sign In</button>
            </div>
        </div>
        <img className='max-h-[400px] object-cover w-full' src="https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
      </div>
  );
}

export default Carousel ;
