import React from 'react'
import { IoMdStar } from "react-icons/io";

const Feedback = () => {
  return (
    <div className='h-[390px] flex flex-col gap-10 bg-[#f8f8f8] max-w-[310px] w-[310px]  text-sm font-medium shadow-sm'>
      <div className='flex px-4 pt-4'>
        <IoMdStar size={20} color='#fbbf24' />
        <IoMdStar size={20} color='#fbbf24' />
        <IoMdStar size={20} color='#fbbf24' />
        <IoMdStar size={20} color='#fbbf24' />
        <IoMdStar size={20} color='#fbbf24' />
        <span className='text-sm'>(5.0)</span>
      </div>
      <div className='text-base px-4 font-medium text-gray-500 tracking-wider'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
      <div className='flex px-4 justify-start gap-2 items-center'>
        <img className='rounded-full w-12 h-12 object-cover' src='https://picsum.photos/id/237/200/300' alt="" />
        <div>
          <div className='text-base font-semibold'>Im Dog</div>
          <div className='text-gray-500'>London Uk</div>
        </div>
      </div>
    </div>
  )
}

export default Feedback