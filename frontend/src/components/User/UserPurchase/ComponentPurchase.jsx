import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiCake3Line } from 'react-icons/ri'
import { BsChatDots } from 'react-icons/bs'
import { PiTruckDuotone } from 'react-icons/pi'
import { ActionCreateConversation } from '~/Redux/actions/chat'
import { ActionGetAllOrderByUser } from '~/Redux/actions/order'
import noProduct from '~/Assests/images/noProducts.jpg'
import { server } from '~/contants/contant'
const ComponentPurchase = ({ active, menu }) => {
  const { allOrders, messageCreateOrder, errorCreateOrder, rs, rs1 } = useSelector(state => state.order)
  const { allCarts, checkedProductsId } = useSelector(state => state.cart)
  const { user, isAuthenticated } = useSelector(state => state.user)
  const [allOrderAgain, setAllOrderAgain] = useState([])

  const dispatch = useDispatch()
  console.log('rs1', rs1);
  console.log(allOrders);
  useEffect(() => {
    dispatch(ActionGetAllOrderByUser())
  }, [dispatch])
  const [emty, setEmty] = useState([])
  useEffect(() => {
    const a = allOrders?.map(a => a?.products.map(b => b[0]?.status))
    let rs = [...new Set(a.flat())];
    setEmty(rs)
    console.log('rs', rs);
    console.log('active', active);
  }, [allOrders])
  const handleOpenChat = (shopId) => {
    dispatch({ type: 'open', payload: true })
    if (isAuthenticated) {
      const groupTitle = shopId + user._id
      dispatch(ActionCreateConversation({ userId: user._id, groupTitle, sellerId: shopId }))
    } else {
      toast.error('please login to create a conversation')
    }
  }
  return (
    <div className=' h-full '>
      {allOrders?.map((b, i) => {
        console.log('aaaa');
        return (
          <div key={i} className='shadow-sm h-full my-3 bg-white'>
            <div div className='px-6' >
              {/* nhóm những sản phẩn cùng 1 productId */}
              {b?.products?.map((c, i) => {
                if (
                  (active === 1 && c[0]?.status === 'Processing') ||
                  (active === 2 && c[0]?.status === 'Completed') ||
                  (active === 3 && c[0]?.status === 'Cancelled') ||
                  (active === 0)
                ) {
                  console.log('bbbb');
                  return (<>
                    {/* shop */}
                    <div key={i} className='flex  justify-between items-center border-b-[1px] py-2 border-gray-300'>
                      <div className='flex gap-4 text-xs justify-between items-center'>
                        <span className='font-bold  text-sm'>{c[0]?.product?.shopName}</span>
                        <span className='th-fl gap-1 border-[1px] border-gray-300 p-1'><RiCake3Line className='inline' /> View Shop</span>
                        <span onClick={() => handleOpenChat(c[0]?.product?.shopId)} className='th-fl gap-1 rounded-sm cursor-pointer px-4 py-1.5 bg-red-500 text-white'><BsChatDots className='inline' color='white' /> Chat</span>
                      </div>
                      <div className="th-fl gap-4">
                        {c[0]?.status === 'Processing' && <span className='th-fl gap-2 text-teal-400 text-sm pr-4 border-r-[1px] border-gray-300'><PiTruckDuotone size='20' /> Đơn hàng đang được giao đến cho bạn </span>}
                        {c[0]?.status === 'Completed' && <span className='th-fl gap-2 text-teal-400 text-sm pr-4 border-r-[1px] border-gray-300'><PiTruckDuotone size='20' /> Đơn hàng đã được giao thành công </span>}
                        {c[0]?.status === 'Cancelled' && <span className='th-fl gap-2 text-teal-400 text-sm pr-4 border-r-[1px] border-gray-300'><PiTruckDuotone size='20' /> Đơn hàng đã được hủy </span>}
                        {c[0]?.status === 'Processing' && <span className='text-sm text-red-500'>PROCESSING</span>}
                        {c[0]?.status === 'Completed' && <span className='text-sm text-red-500'>COMPLETED</span>}
                        {c[0]?.status === 'Cancelled' && <span className='text-sm text-red-500'>CANCELLED</span>}
                      </div>
                    </div>
                    {/* product */}
                    {c?.map((a, i) => {
                      console.log("active", active);
                      const prd = a?.product
                      return (
                        <div key={i} className='py-2 flex justify-between items-center' >
                          <div className="flex gap-3">
                            <img className='w-20 h-20 object-cover rounded-sm' src={`${server}/${prd?.avatar}`} alt="" />
                            <div className=" flex flex-col justify-center items-start gap-1">
                              <span className='font-medium'>{prd?.name}</span>
                              <span className='text-sm text-gray-500'>Variation: {a?.class + ','}{a?.capa}</span>
                              <span className='text-sm'>x{a?.quanti}</span>
                            </div>
                          </div>
                          <div className='flex gap-1 text-sm'>
                            <span className='text-gray-400 line-through tracking-tighter'>{prd?.originalPrice}</span>
                            <span className='text-red-500 tracking-tighter'>{prd?.discountPrice}</span>
                          </div>
                        </div>

                      )
                    })}
                    {/* buy again */}
                    <div className='p-3 border-t-[1px] border-gray-300'>
                      <div className='w-full text-end pb-4'>
                        <div className='text-red-500'><span className='text-sm text-black'>Order Total</span>: ${b?.totalPrice}</div>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-sm'>
                          Rate products by
                          <span className='underline'> 31-10-2002</span>
                          <span className='text-red-500'> Rate now and get 200 coins</span>
                        </span>
                        <div className='flex justify-center gap-3 items-center'>
                          {(b?.status === 'succeed') && <button className='hover:bg-red-600 px-14 py-2 rounded-sm bg-red-500 text-white text-sm'>Rate</button>}
                          <button className='hover:bg-gray-100 px-6 py-2 rounded-sm border-[1px] border-gray-300 text-sm'>Contact seller</button>
                          {(b?.status === 'succeed' || b?.status === 'cancelled') && <button className='hover:bg-gray-100 px-10 py-2 rounded-sm border-[1px] border-gray-300 text-sm'>Buy again</button>}
                        </div>
                      </div>
                    </div>
                  </>)
                }
              })}
            </div>
          </div>)

      })}
      {
        (
          (active === 1 && emty?.includes('Processing') === false) ||
          (active === 2 && emty?.includes('Completed') === false) ||
          (active === 3 && emty?.includes('Cancelled') === false) ||
          allOrders?.length === 0
        )
          ? <div className=' w-full  bg-white mt-4 flex flex-col items-center py-10'>
            <img src={noProduct} className='w-[100px] rounded-md h-[100px]' alt="" />
            <div className=' text-xl mt-4'>No Orders yet</div>
          </div> : null}
      {/* {
        allOrders?.length === 0 && <div className=' w-full  bg-white mt-4 flex flex-col items-center py-10'>
          <img src={noProduct} className='w-[100px] rounded-md h-[100px]' alt="" />
          <div className=' text-xl mt-4'>No Orders yet</div>
        </div>
      } */}
    </div >
  )
}

export default ComponentPurchase
