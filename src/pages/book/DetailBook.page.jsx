import React from 'react'
import useFetch from '../../hook/useFetch'
import { GetBookData } from '../../service/books.service'
import {useParams,useNavigate} from "react-router-dom"
import LoadingComponents from '../../Loading.components'

const DetailBookPage = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const {data,error,loading} = useFetch(GetBookData,`books/${id}`);
    const handleBack = () => {
        nav(-1);
      };

  return (
    <div className='mx-auto  max-w-[88%] h-screen   container mt-24'>
               <button onClick={handleBack} className='mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
            </button>
    {loading ? (
     <div role="status" className="space-y-8 grid grid-cols-12  max-w-[80%] mx-auto  mt-16 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
     <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
         <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
             <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
         </svg>
     </div>
     <div className="w-full">
         <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
     </div>
     <span className="sr-only">Loading...</span>
 </div>
    ) : (
      <>
        {error ? (
          <h1>Error</h1>
        ) : (
          <div className="">
     
           <div className='grid grid-cols-12 mt-4 max-w-[80%] mx-auto   border  bg-slate-100 justify-center items-center '>
           <div className=' col-span-5  w-[261px] h-[350px] '>
              <img className=" h-[350px]"
                src={data.image}
                alt="barna.jpg"
                
                
              />
            </div>
            <div className=' col-span-5  '>
              <h1 className="text-2xl font-bold font-serif">{data.book}</h1>
              <h2 className="text-lg my-2 text-red-500 font-bold ">{data.author}</h2>
              <h2 className="text-lg mb-2   text-slate-600">{data.slug}</h2>

              <p className='text-lg font-mono'>{data.description}</p>
            </div>
           </div>
           
          </div>
        )}
      </>
    )}
  </div>
  )
}

export default DetailBookPage