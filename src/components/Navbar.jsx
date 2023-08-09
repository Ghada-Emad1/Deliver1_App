import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { useState } from 'react'

export const Navbar=()=>{
    const [nav,setnav]=useState(false);
    return(
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/**left side */}
            <div className='flex items-center'>
              <div onClick={()=>setnav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
              </div>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl px-3'>Best <span className='font-bold'>Eats</span></h1>
              <div className='hidden lg:flex items-center bg-gray-200 rounded-full
              p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>PickUp</p>
              </div>
            </div>
            {/**search input */}
            <div className='bg-gray-200 flex items-center rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20}/>
                <input className='bg-transparent p-2 focus:outline-none
                w-full' type='text' placeholder='Search Food'/>
            </div>
           
           {/**cart button */}
           <div>
            <button className='bg-black text-white hidden md:flex
            items-center py-2 rounded-full'>
              <BsFillCartFill size={20}className='mr-2'/>Cart
            </button>
            
           </div>


        {/**mobile Menut */}
        {/**overlay */}
        {nav? <div className='bg-black/80 fixed z-10 top-0 h-screen
        w-full left-0'></div>:''}
       

        {/**side drawer menu */}

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setnav(!nav)}/>
        <h2 className='p-4 text-3xl'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='flex items-center text-xl py-4'><TbTruckDelivery size={20} className='mr-4'/>Orders</li>
                <li className='flex items-center text-xl py-4'><MdFavorite size={20} className='mr-4'/>Favourites</li>
                <li className='flex items-center text-xl py-4'><FaWallet size={20} className='mr-4'/>Wallet</li>
                <li className='flex items-center text-xl py-4'><MdHelp size={20} className='mr-4'/>Help</li>
                <li className='flex items-center text-xl py-4'><AiFillTag size={20} className='mr-4'/>Promotions</li>
                <li className='flex items-center text-xl py-4'><BsFillSaveFill size={20} className='mr-4'/>Best Ones</li>
                <li className='flex items-center text-xl py-4'><FaUserFriends size={20} className='mr-4'/>Invite Friends</li>
            </ul>
            
        </nav>
        </div>
        </div>
    )
}