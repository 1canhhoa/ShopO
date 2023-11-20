import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiCake3Line } from 'react-icons/ri'
import { BsChatDots } from 'react-icons/bs'
import { PiTruckDuotone } from 'react-icons/pi'
import { ActionGetAllOrderByUser } from '~/Redux/actions/order'
import ComponentPurchase from './componentPurchase'
import { server } from '~/contants/contant'
const UserPurchase = () => {
  const [active, setActive] = useState(0)
  const { allOrders, messageCreateOrder, errorCreateOrder, rs } = useSelector(state => state.order)
  const { allCarts, checkedProductsId } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log('rs', rs);
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(ActionGetAllOrderByUser())
  }, [dispatch])
  const menu = [
    { name: 'All' },
    { name: 'Processing' },
    { name: 'Completed' },
    { name: 'Cancel' },
  ]
  // tổng tiền , sô lượng từng sản phẩm,ảnh
  return (
    <div className=' h-full '>
      <div className='bg-white w-full h-[50px] flex justify-between'>
        {menu?.map((m, i) => (
          <span key={i} onClick={() => setActive(i)} className={'flex-1 th-fl cursor-pointer shadow-sm ' + (active === i ? 'border-b-[2px] border-red-500 text-red-500' : '')}>{m?.name}</span>
        ))}
      </div>

      {active === 0 &&
        allOrders?.map((a, i) => (
          <div key={i} className='shadow-sm h-full mt-3 bg-white'>
            {/* product */}
            <div className='px-6'>
              {/* shop */}
              <div className='flex  justify-between items-center border-b-[1px] py-2 border-gray-300'>
                <div className='flex gap-4 text-xs justify-between items-center'>
                  <span className='font-bold  text-sm'>{a?.products[0]?.product?.shopName}</span>
                  <span className='th-fl gap-1 border-[1px] border-gray-300 p-1'><RiCake3Line className='inline' /> View Shop</span>
                  <span className='th-fl gap-1 rounded-sm cursor-pointer px-4 py-1.5 bg-red-500 text-white'><BsChatDots className='inline' color='white' /> Chat</span>
                </div>
                <div className="th-fl gap-4">
                  {a?.status === 'processing' && <span className='th-fl gap-2 text-teal-400 text-sm pr-4 border-r-[1px] border-gray-300'><PiTruckDuotone size='20' /> Đơn hàng đang được giao đến cho bạn </span>}
                  {a?.status === 'succeed' && <span className='th-fl gap-2 text-teal-400 text-sm pr-4 border-r-[1px] border-gray-300'><PiTruckDuotone size='20' /> Đơn hàng đã được giao thành công </span>}
                  {a?.status === 'cancelled' && <span className='th-fl gap-2 text-teal-400 text-sm pr-4 border-r-[1px] border-gray-300'><PiTruckDuotone size='20' /> Đơn hàng đã được hủy </span>}
                  {a?.status === 'processing' && <span className='text-sm text-red-500'>PROCESSING</span>}
                  {a?.status === 'succeed' && <span className='text-sm text-red-500'>COMPLETED</span>}
                  {a?.status === 'cancelled' && <span className='text-sm text-red-500'>CANCELLED</span>}
                </div>
              </div>
              {/* product */}
              {a?.products.map((b, i) => {
                const prd = b?.product
                return (
                  <div key={i} className='py-2 flex justify-between items-center' >
                    <div className="flex gap-3">
                      <img className='w-20 h-20 object-cover rounded-sm' src={`${server}/${prd?.avatar}`} alt="" />
                      <div className=" flex flex-col justify-center items-start gap-1">
                        <span className='font-medium'>{prd?.name}</span>
                        <span className='text-sm text-gray-500'>Variation: {b?.class + ','}{b?.capa}</span>
                        <span className='text-sm'>x{prd?.quanti}</span>
                      </div>
                    </div>
                    <div className='flex gap-1 text-sm'>
                      <span className='text-gray-400 line-through tracking-tighter'>{prd?.originalPrice}</span>
                      <span className='text-red-500 tracking-tighter'>{prd?.discountPrice}</span>
                    </div>
                  </div>
                )
              }
              )}
            </div>
            {/*  buy again */}
            <div className='p-6 border-t-[1px] border-gray-300'>
              <div className='w-full text-end pb-4'>
                <div className='text-red-500'><span className='text-sm text-black'>Order Total</span>: ${a?.totalPrice}</div>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>
                  Rate products by
                  <span className='underline'> 31-10-2002</span>
                  <span className='text-red-500'> Rate now and get 200 coins</span>
                </span>
                <div className='flex justify-center gap-3 items-center'>
                  <button className='hover:bg-red-600 px-14 py-2 rounded-sm bg-red-500 text-white text-sm'>Rate</button>
                  <button className='hover:bg-gray-100 px-6 py-2 rounded-sm border-[1px] border-gray-300 text-sm'>Contact seller</button>
                  <button className='hover:bg-gray-100 px-10 py-2 rounded-sm border-[1px] border-gray-300 text-sm'>Buy again</button>
                </div>
              </div>
            </div>
          </div>))
      }
      {
        active === 1 && <div className='shadow-sm h-full mt-3 bg-white'>
          processing
        </div>
      }
      {
        active === 2 && <div className='shadow-sm h-full mt-3 bg-white'>
          completed
        </div>
      }
      {
        active === 3 && <div className='shadow-sm h-full mt-3 bg-white'>
          cancel
        </div>
      }
    </div >
  )
}

export default UserPurchase

