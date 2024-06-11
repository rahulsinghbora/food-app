import React from 'react'
import { FiPlus,FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQty, removeFromCart,incrementQty } from '../slices/Cartslice';
import toast from 'react-hot-toast';

const ItemCard = ({id,name,qty,price,img}) => {
  
  const dispatch=useDispatch()

  return (<>
    <div className='flex gap-2 shadow-md rounded-lg mb-3 p-2 '>
    <MdDelete onClick={()=>{dispatch(removeFromCart({id,img,name,qty,price})); toast(`${name} Removed! `, {
  icon: '👋',
});}} className='absolute right-7  text-gray-600 cursor-pointer'/>
        <img src={img} alt="" className='w-[50px] h-[50px] '/>
        <div >
            <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between '>
        <span className='text-green-500 font-bold'>₹{price}</span>
            <div className='flex justify-center items-center gap-2 absolute right-7'>
                <FiMinus onClick={()=> qty>1&&dispatch(decrementQty({id}))} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                <span>{qty}</span>
                <FiPlus onClick={()=>qty>=1&& dispatch(incrementQty({id}))} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
            </div>
        </div>
        </div>
    </div>
  </>)
}

export default ItemCard