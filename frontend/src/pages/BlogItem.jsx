import React from 'react'
import noData from '~/Assests/images/noData.jpeg'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa"
const BlogItem = () => {
  return (
    <div className=' max-w-[550px] border-[1px] border-gray-300'>
      <img src={noData} className='w-[550px] h-[320px]' alt="" />
      <div className='pl-8 pr-12  gap-4 flex flex-col mt-4'>
        <div className='flex justify-start items-center gap-4'>
          <div className='justify-start gap-1 items-center flex'>
            <FaRegUser color='#0ea5e9' size={15} />
            <span className='text-base font-normal text-gray-500'>By Admin</span>
          </div>
          <div className='justify-start gap-1 items-center flex'>
            <MdOutlineMessage size={17} color='#0ea5e9' />
            <span className='text-base font-normal text-gray-500'>6 Comments</span>
          </div>
        </div>
        <div className='font-bold text-2xl'>
          Reprehenderit Non Esse Anim Laboris Reprehenderit Officia
        </div>
        <div className='text-base text-gray-500 font-medium'>irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint...</div>
        <button className='flex text-base justify-start items-center gap-2 mb-4'>View more <FaArrowRight size={15} /></button>
      </div>

    </div>
  )
}

export default BlogItem
