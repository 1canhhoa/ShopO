import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ProductCard from '~/components/Products/ProductCard'
import { AiOutlinePlus, AiOutlineGift, AiOutlineUser, AiOutlineMessage, AiOutlineUsergroupDelete, AiOutlineStar } from 'react-icons/ai'
import { FiUserCheck } from 'react-icons/fi'
import { BsWechat } from 'react-icons/bs'
import { ActionGetAllProductbyShopId, ActionGetAllProductbyShopName } from '~/Redux/actions/product';
// we need prop isOwner cause it used at two page : user and shop  
const DashBoardOverView = ({ isOwner }) => {
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
    isOwner ? dispatch(ActionGetAllProductbyShopId(seller._id)) :
      dispatch(ActionGetAllProductbyShopName(name))
  }, [])
  const { seller } = useSelector(state => state.seller)
  const { products, shop } = useSelector(state => state.product)
  const [active, setActive] = useState(1)
  const dispatch = useDispatch()
  return (
    <div className='w-[85%] min-w-[1216px] p-8'>
      {/* INFO SHOP */}
      <div className='w-full  flex justify-start gap-32 items-center'>
        {/* content left */}
        <div className='h-[150px] w-[400px] rounded-md th-bd flex justify-start items-center relative'>
          <img className='bg-contain w-full h-full rounded-md' src=" https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" alt="" />
          <div className='absolute flex gap-4 pl-12 flex-col justify-center items-start w-full h-full top-0 left-0 bg-slate-700 bg-opacity-70'>
            {/* avatar*/}
            <div className='flex justify-between gap-4 text-white items-center'>
              <img className='w-[80px] h-[80px] object-contain rounded-full border-[2px] border-gray-400' src={`http://localhost:4000/${seller?.avatar}`} alt="" />
              <div className=' flex flex-col'>
                <span className=' text-lg '>{isOwner === false ? (shop?.name) : (seller?.name)}</span>
                <span className='text-xs'>Join On {isOwner === false ? (shop?.createdAt?.slice(0, 10)) : (seller?.createdAt?.slice(0, 10))}</span>
              </div>
            </div>
            {/* button*/}
            {isOwner === false && <Stack Stack spacing={2} className='th-fl ' direction="row">
              <Button
                startIcon={<AiOutlinePlus size={15} />}
                className='w-[150px] text-xs min-h-[30px] font-semibold box-border border-[0.5px] hover:border-[1px] text-white border-white hover:border-white'
                variant="outlined">FOLLOW</Button>
              <Button
                startIcon={<BsWechat size={15} />}
                className='w-[150px] text-xs min-h-[30px] font-semibold box-border border-[0.5px] hover:border-[1px] text-white border-white hover:border-white'
                variant="outlined">CHAT</Button>
            </Stack>}
          </div>
        </div>
        {/* content center */}
        <div className='w flex gap-6 flex-col justify-center items-start'>
          <div className='flex justify-center gap-1 items-center'>
            <AiOutlineGift size={20} />
            <span className='text-sm font-medium'>Products:</span>
            <span className='text-sm font-medium text-red-500'>280</span>
          </div>
          <div className='flex justify-center gap-1 items-center'>
            <AiOutlineUser size={20} />
            <span className='text-sm font-medium'>Following:</span>
            <span className='text-sm font-medium text-red-500'>2</span>
          </div>
          <div className='flex justify-center gap-1 items-center'>
            <AiOutlineMessage size={20} />
            <span className='text-sm font-medium'>Chat Performance:</span>
            <span className='text-sm font-medium text-red-500'>97% (Within Hours)</span>
          </div>
        </div>
        {/* content right */}
        <div className='w flex gap-6 flex-col justify-center items-start'>
          <div className='flex justify-center gap-1 items-center'>
            <AiOutlineUsergroupDelete size={20} />
            <span className='text-sm font-medium'>Followers:</span>
            <span className='text-sm font-medium text-red-500'> 38,3k</span>
          </div>
          <div className='flex justify-center gap-1 items-center'>
            <AiOutlineStar size={20} />
            <span className='text-sm font-medium'>Rating:</span>
            <span className='text-sm font-medium text-red-500'>4.9 (9,7k rating)</span>
          </div>
          <div className='flex justify-center gap-1 items-center'>
            <FiUserCheck size={20} />
            <span className='text-sm font-medium'>joined:</span>
            <span className='text-sm font-medium text-red-500'> 7 Years Ago</span>
          </div>
        </div>
      </div >
      {/* divider */}
      <div className='w-full border-t-[1px] border-gray-200 mt-10 h-[20px] '></div>
      {/* PRODUCT */}
      <div className=" w-full">
        <div className="flex w-full items-center justify-between">
          <div className="w-full flex">
            <div className="flex items-center" onClick={() => setActive(1)}>
              <h5
                className={`font-[600] text-[20px] ${active === 1 ? "text-red-500" : "text-[#333]"
                  } cursor-pointer pr-[20px]`}
              >
                Shop Products
              </h5>
            </div>
            <div className="flex items-center" onClick={() => setActive(2)}>
              <h5
                className={`font-[600] text-[20px] ${active === 2 ? "text-red-500" : "text-[#333]"
                  } cursor-pointer pr-[20px]`}
              >
                Running Events
              </h5>
            </div>
            <div className="flex items-center" onClick={() => setActive(3)}>
              <h5
                className={`font-[600] text-[20px] ${active === 3 ? "text-red-500" : "text-[#333]"
                  } cursor-pointer pr-[20px]`}
              >
                Shop Reviews
              </h5>
            </div>
          </div>
          <div>
          </div>
        </div>
        <br />
        {active === 1 && (
          <div className="grid grid-cols-3 gap-[25px] md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {products &&
              products.map((i, index) => (
                <ProductCard data={i} key={index} isShop={true} />
              ))}
            {products?.length < 1 && <span className='text-base'>Chưa có sản phẩm nào</span>}
          </div>
        )}
      </div>
      <div>
      </div>
    </div >
  )
}

DashBoardOverView.propTypes = {

}

export default DashBoardOverView
