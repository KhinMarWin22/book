import React from 'react'
import { Link } from 'react-router-dom'

const BooklistsComponents = ({data}) => {
  return (
   <div className='  w-[320px] h-[480px]  rounded-lg '>
     <div className="max-w-sm rounded border overflow-hidden shadow-lg">
        <Link to={`/detail/${data.id}`}>
        <img className=" w-full h-[320px]  aspect-auto    hover:opacity-60 hover:scale-105 duration-500     rounded-t-lg   "  src={data.image} alt="Sunset in the mountains" /></Link>
 
  <div className="px-6 py-4">
    <div className="font-bold text-2xl font-serif mb-2 line-clamp-1">{data.book}</div>
    <p className='text-red-400 font-bold mb-1'>{data.author}</p>
   
    <p className="text-gray-700 text-base font-mono line-clamp-2 mb-3">
        {data.description}
    </p>
    <Link to={`/detail/${data.id}`}>
    <button className='bg-slate-700 text-white px-3 font-medium rounded-md py-2 '>More detail</button></Link>
   
  </div>
  
</div>
   </div>
  )
}

export default BooklistsComponents