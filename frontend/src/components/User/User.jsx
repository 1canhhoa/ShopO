import React, { useEffect, useState } from 'react'
import { PiUserCircleLight } from 'react-icons/pi'
import { BsFillPencilFill, BsTicketPerforated } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import UserNotifications from './UserNotifications/UserNotifications'
import UserPurchase from './UserPurchase/UserPurchase'
import UserAccount from './UserAccount/UserAccount'
import { useLocation } from 'react-router-dom'
import Profile from './UserAccount/Profile'
import route from '~/configs/route'
import UserVouchers from './UserVouchers/UserVouchers'
import Payment from './UserAccount/Payment'
import OderUpdate from './UserNotifications/OderUpdate'
import Refunds from './UserNotifications/Refunds'
import Addresses from './UserAccount/Addresses'
import { useDispatch, useSelector } from 'react-redux'
import { ActionGetAllAddress } from '~/Redux/actions/address'
const menu = [
  {
    name: 'My Account',
    icon: <AiOutlineUser />,
    url: '/account',
    items: [
      { name: "Profile", url1: '/profile' },
      { name: "Banks & Cards", url1: '/payment' },
      { name: "Addressses", url1: '/address' },
      { name: "Change Password", url1: '/verify' },
      { name: "Notification Setting", url1: '/notification' }]
  },
  {
    name: 'My Purchase',
    icon: <HiOutlineNewspaper />,
    url: '/purchase',
    items: []
  },
  {
    name: 'Notifications',
    icon: <MdOutlineNotificationsActive />,
    url: '/notifications',
    items: [
      { name: "Order Updates", url1: '/oder' },
      { name: "Refunds", url1: '/refunds' },
      { name: "Promotions", url1: '/promotion' },
      { name: "Wallet Updates", url1: '/wallet' },
      { name: "ShopO Updates", url1: '/shopo' }
    ]

  },
  {
    name: 'My Vouchers',
    icon: <BsTicketPerforated />,
    url: '/vouchers',
    items: []
  },
]
const User = () => {
  console.log('2');
  const { pathname } = useLocation()
  const [activeManuItem, setActiveMenuItem] = useState(0)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handleActiveMenuItems = (i) => {
    setActiveMenuItem(i)
  }
  useEffect(() => {
    dispatch(ActionGetAllAddress(user._id))
  }, [dispatch, user._id])
  return (
    <div className='w-full min-w-[1216px] pt-2 pb-20 bg-[#f5f5f5]'>
      <div className=' min-w-[918px] h-full pt-4 mx-auto flex justify-center items-start py-2 px-6 '>
        <div className=' w-[20%] mx-2 gap-10 flex flex-col pt-6 justify-center items-center'>
          {/* user */}
          <div className='flex  w-full justify-start gap-2 items-center'>
            <PiUserCircleLight size={45} />
            <div className='items-start flex-col flex  justify-center'>
              <div className='text-sm  font-semibold'>Nham Hien</div>
              <div className='flex text-xs font-medium text-gray-500 items-center justify-center'>
                <span className=''><BsFillPencilFill size={13} /></span>
                <span className='pl-1'>Edit Profile</span>
              </div>
            </div>
          </div>
          {/* Menu */}
          <div className='gap-2 w-full flex flex-col items-start justify-start '>
            {menu.map((m, i) => {
              const rs = m?.items.length > 0 ? m?.items[0]?.url1 : ''
              const inActive = 'text-sm font-normal text-gray-700 flex cursor-pointer mb-2 justify-start items-center gap-2 '
              const Active = 'text-sm font-normal text-red-500 flex cursor-pointer mb-2 justify-start items-center gap-2 '
              return (
                <div key={i} className='flex w-full flex-col justify-center items-start '>
                  <NavLink to={{ pathname: `/user${m.url}${rs}` }} onClick={() => handleActiveMenuItems(i)} className={({ isActive }) => isActive && m?.items.length === 0 ? Active : inActive}>
                    <div>{m.icon}</div>
                    <div className=' text-sm font-semibold'>{m.name}</div>
                  </NavLink>
                  {
                    activeManuItem === i && m.items.length > 0 && <div className='flex pb-2 ml-1 970:ml-8 gap-2 flex-col justify-center items-start'>
                      {m.items.map((d, i) => {
                        const inActive = 'text-sm font-normal text-gray-700'
                        const Active = 'text-sm font-normal text-red-500'
                        return (
                          <NavLink key={i} to={`/user${m.url}${d.url1}`} className={({ isActive }) => isActive ? Active : inActive}>{d.name}</NavLink>
                        )
                      })}
                    </div>
                  }
                </div>
              )
            })}
          </div>
        </div>
        <div className=' w-[80%] h-full'>
          {pathname === route.user_notications && <UserNotifications />}
          {pathname === route.user_notications_oder && <OderUpdate />}
          {pathname === route.user_notications_refunds && <Refunds />}
          {pathname === route.user_purchase && <UserPurchase />}
          {pathname === route.user_account && <UserAccount />}
          {pathname === route.user_account_payment && <Payment />}
          {pathname === route.user_account_profile && <Profile />}
          {pathname === route.user_vouchers && <UserVouchers />}
          {pathname === route.user_account_address && <Addresses />}
        </div>
      </div>
    </div >
  )
}

export default User