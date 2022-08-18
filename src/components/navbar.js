import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    const [menu , setMenu] = useState(false) ;

    function handleClick() {
        setMenu(!menu) ;
    }

  return (
    <div>
        <nav className='shadow-md px-2 py-4'>
            <div className='menu-top flex justify-between'>
                <div className='Brand flex items-center space-x-2 md:space-x-5'>
                    <div className='menu-icon w-fit cursor-pointer md:hidden' onClick={handleClick}>
                        <MenuIcon />
                    </div>
                    <div className='text-lg font-semibold md:text-xl'>
                        <h1>f<span className='mx-[1px] font-bold text-yellow-500'>OO</span>d Fly</h1>
                    </div>
                    <div className='pages hidden md:block'>
                        <ul className='text-lg flex items-center space-x-2'>
                            <li className='hover:scale-110 hover:text-yellow-400 duration-300 cursor-pointer'>Home</li>
                            <li className='hover:scale-110 hover:text-yellow-400 duration-300 cursor-pointer'>Foods</li>
                            <li className='hover:scale-110 hover:text-yellow-400 duration-300 cursor-pointer'>Track Order</li>
                        </ul>   
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <div className='bg-gray-100 border border-gray-100 rounded-full items-center pl-3 hidden md:flex'>
                        <input className='bg-gray-100 w-[200px]' placeholder='Search here'/>
                        <div className='border rounded-full bg-yellow-500 cursor-pointer border-yellow-500 px-3 py-0.5'>
                            <SearchIcon size={20} className='text-white'/>
                        </div>
                    </div>
                    <button className='border rounded-full px-2 py-1 border-yellow-500 font-semibold cursor-pointer hover:border-yellow-600 hover:text-yellow-500'>Log In</button>
                    <button className='border rounded-full px-2 py-1 bg-yellow-500 border-yellow-500 text-white font-semibold cursor-pointer hover:bg-yellow-600'>Sign In</button>
                </div>
            </div>
            <div className='search-bar flex items-center bg-gray-100 w-3/4 relative h-fit mx-auto pl-3 border border-gray-100 rounded-full mt-2 md:hidden'>
                <input className='bg-gray-100 focus:outline-none w-[240px] py-0.5' type="text" placeholder='Search here'/>
                <div className='absolute right-0 border rounded-full bg-yellow-500 px-3 py-0.5 cursor-pointer hover:bg-yellow-600'>
                    <SearchIcon className='text-white'/>
                </div>
            </div>
        </nav>
        {menu && <div className='bg-black/70 absolute top-0 left-0 w-full h-full ease-in-out duration-500 z-10'>
            <div className='bg-white h-full w-3/4 py-3 px-3'>
                <div className=' flex justify-between '>
                    <div className='text-lg font-semibold'>
                        <h1>f<span className='mx-[1px] font-bold text-yellow-500'>OO</span>d Fly</h1>
                    </div>
                    <div className='w-fit cursor-pointer' onClick={handleClick}>
                        <CloseIcon />
                    </div>
                </div>
                <ul className='text-lg my-6 space-y-3'>
                    <li className='hover:scale-110 hover:text-yellow-400 ease-out duration-100 cursor-pointer'>Home</li>
                    <li className='hover:scale-110 hover:text-yellow-400 ease-out duration-100 cursor-pointer'>Foods</li>
                    <li className='hover:scale-110 hover:text-yellow-400 ease-out duration-100 cursor-pointer'>Track Order</li>
                </ul>
            </div>
        </div>}
    </div>
  )
}

export default Navbar ;
