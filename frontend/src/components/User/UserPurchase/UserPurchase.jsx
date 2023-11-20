import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiCake3Line } from 'react-icons/ri'
import { BsChatDots } from 'react-icons/bs'
import { PiTruckDuotone } from 'react-icons/pi'
import { ActionGetAllOrderByUser } from '~/Redux/actions/order'
import ComponentPurchase from './componentPurchase'
import ConfettiCpn from '~/components/ConfettiCpn'
import { toast } from 'react-toastify'
import { ActionCreateOrderAndDeleteIncarts, ActionOrderClearState } from '~/Redux/actions/order'
import { useLocation } from 'react-router-dom';


const UserPurchase = () => {
  const [active, setActive] = useState(0)
  const { allOrders, messageCreateOrder, errorCreateOrder, type } = useSelector(state => state.order)
  const { allCarts, checkedProductsId } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(ActionGetAllOrderByUser())
  }, [dispatch])
  const menu = [
    { name: 'All' },
    { name: 'Processing' },
    { name: 'Completed' },
    { name: 'Cancelled' },
  ]
  // tổng tiền , sô lượng từng sản phẩm,ảnh
  return (
    <div className=' h-full '>
      <div className='bg-white w-full h-[50px] flex justify-between'>
        {menu?.map((m, i) => (
          <span key={i} onClick={() => setActive(i)} className={'flex-1 th-fl cursor-pointer shadow-sm ' + (active === i ? 'border-b-[2px] border-red-500 text-red-500' : '')}>{m?.name}</span>
        ))}
      </div>
      {active === 0 && <ComponentPurchase menu={menu} active={0} />}
      {active === 1 && <ComponentPurchase menu={menu} active={1} />}
      {active === 2 && <ComponentPurchase menu={menu} active={2} />}
      {active === 3 && <ComponentPurchase menu={menu} active={3} />}
    </div >
  )
}

export default UserPurchase
