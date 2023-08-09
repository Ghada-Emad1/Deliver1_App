import { useState } from 'react'
import {data} from '../data/data.js'
export const Food=()=>{
    const[food,setfood]=useState(data);
    {/**filter type */}
    const filterType=(category)=>{
        setfood(data.filter((item)=>{
            return item.category===category
        }))
    }
    {/**filter price */}
    const filterPrice=(price)=>{
        setfood(data.filter((item)=>{
            return item.price===price
        }))
    }
    return(
        <div className='max-w-[1640px] mx-auto px-4 py-12'>
          <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Items</h1>
          {/**filter row */}
          <div className='flex flex-col md:flex-row justify-between'>

            {/**filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter types</p>
                <div className='flex flex-wrap justify-between'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=>setfood(food)}>All</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterType('burger')}>Burgers</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterType('pizza')}>Pizza</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterType('salad')}>Salads</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterType('chicken')}>Chicken</button>
                </div>
            </div>

            {/**filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterPrice('$')}>$$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterPrice('$$')}>$$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterPrice('$$$')}>$$$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'onClick={()=>filterPrice('$$$$')}>$$$$</button>
                </div>
            </div>
          </div>

          {/**Display foods*/}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
            {food.map((item,index)=>(
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] rounded-t-lg object-cover'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-600 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
          </div>

        
         
        </div>
    )
}