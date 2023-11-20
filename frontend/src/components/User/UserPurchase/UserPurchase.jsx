import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionGetAllOrderByUser } from '~/Redux/actions/order'
import ComponentPurchase from './componentPurchase'


const UserPurchase = () => {
  const [active, setActive] = useState(0)
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
