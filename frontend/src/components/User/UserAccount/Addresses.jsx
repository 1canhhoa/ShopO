import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { AiOutlinePlus } from 'react-icons/ai'
import { addressData } from '~/static/data'
import Map from '~/components/Map'
import axios from 'axios'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { ActionClear, ActionDeleteAddress, ActionSetDefault, ActioncreateAddress } from '~/Redux/actions/address'
const Addresses = ({ type }) => {
  const [openAdd, setOpenAdd] = useState(false)
  const [openAddress, setOpenAddress] = useState(false)

  const [fullName, setFullName] = useState("Nhâm Văn Hiến")
  const [phoneNumber, setPhoneNumber] = useState('0358405385')
  const [valueAddress, setValueAddress] = useState('Phường Mộ Lao, Quận Hà Đông, Hà Nội')
  const [streetNameOrOther, setStreetNameOrOther] = useState('Học Viện Công Nghệ Bưu Chính Viễn Thông, � � � � � � �')
  const [homeAndWork, setHomeAndWork] = useState('')
  const [isDefault, setIsDefault] = useState(false)
  const [addressId, setAddressId] = useState(null)
  const [position, SetPosition] = useState(null)
  const [active, setActive] = useState(1)
  const [activeCLickDistrict, setActiveClickDistrict] = useState(null)
  const [activeClickCity, setActiveClickCity] = useState(null)
  // const [activeClickWard, setActiveClickWard] = useState(null)
  const [arrAddressTheFirstIsDefault, setArrAddressTheFirstIsDefault] = useState([])
  const [openConfirmDelete, setOpenConfirmDelete] = useState({})
  const { user } = useSelector(state => state.user)
  const { allAddresses, message, error } = useSelector(state => state.address)
  const dispatch = useDispatch()

  // notification after dispatch
  useEffect(() => {
    if (message) {
      toast.success(message)
    } else {
      toast.error(error);
    }
    dispatch(ActionClear())
  }, [message, dispatch, error])
  // Sắp xếp lại danh sách địa chỉ để đặt địa chỉ mặc định lên đầu
  useEffect(() => {
    if (allAddresses) {

      const sortedAddresses = [...allAddresses]?.sort((a, b) => {
        if (a.default && !b.default) {
          return -1; // a lên đầu mảng
        } else if (!a.default && b.default) {
          return 1; // b lên đầu mảng
        } else {
          return 0; // giữ nguyên thứ tự
        }
      });
      console.log('sortedAddresses', sortedAddresses);
      setArrAddressTheFirstIsDefault(sortedAddresses)
    }
  }, [allAddresses])
  // hủy scroll của màn hình phía sau màn hình fixed
  useEffect(() => {
    if (openAdd) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openAdd]);
  // Xử lý sự kiện khi click bên ngoài
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenAddress(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (activeClickCity !== null) {
      const city = addressData[activeClickCity]?.city
      setValueAddress(city)
      if (activeCLickDistrict !== null) {
        const district = addressData[activeClickCity]?.district[activeCLickDistrict]
        const value = addressData[activeClickCity]?.city + ' , ' + district
        console.log('value', value);
        setValueAddress(value)
      }
    }
  }, [activeCLickDistrict, activeClickCity])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (homeAndWork) {
      setOpenAdd(false)
      setAddressId(null)
      setIsDefault(false)
      dispatch(ActioncreateAddress({ addressId, user, fullName, phoneNumber, valueAddress, streetNameOrOther, homeAndWork, isDefault }))
    } else {
      toast.error("pleasee choose one label as !!!")
    }
  }
  const handleClickCity = (i) => {
    setActive(2)
    activeClickCity === i ? '' : (setActiveClickCity(i), setActiveClickDistrict(null))
  }
  const handleClickDistrict = (i) => {
    setActive(3)
    activeCLickDistrict === i ? '' : setActiveClickDistrict(i)
  }
  const handleClickWard = (i) => {
    setOpenAddress(false)
  }
  const handleChecked = (e) => {
    const { checked } = e.target
    checked ? setIsDefault(true) : setIsDefault(false)
  }
  const handleSetDefault = (addressId) => {
    dispatch(ActionSetDefault(user._id, addressId))
  }
  const handleUpdateAddress = (address, i) => {
    setOpenAdd(true)
    setFullName(address.name)
    setPhoneNumber(address.phone)
    setValueAddress(address.address)
    setStreetNameOrOther(address.addressOther)
    setHomeAndWork(address.homeOrWork)
    setIsDefault(address.default)
    setAddressId(address._id)
    SetPosition(i)
  }
  const handleDelete = (id) => {
    setOpenConfirmDelete(false)
    dispatch(ActionDeleteAddress(id, user._id))
  }
  const variant = {
    initial: {
      scaleX: 0,
      scaleY: 0,
    },
    open: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 0
      }
    },
    openChild: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25
      }
    },
    closed: {
      scaleX: 0,
      scaleY: 0,
    },
  }
  return (
    <>
      <div className={'w-full shadow-sm mb-4  bg-white h-full ' + (type === 'checkout' ? 'overflow-auto max-h-[500px] pb-2' : 'min-w-[900px]')}>
        <div className=' border-b-[1px] border-gray-300 flex justify-between items-center py-4 px-4'>
          <span className=' text-xl font-semibold'>My Addresses</span>
          <button onClick={() => (setIsDefault(false), setAddressId(null), setOpenAdd(true))} className='px-4 py-2 bg-orange-500 rounded-sm hover:bg-orange-600 text-white'><AiOutlinePlus className='inline' /> Add new Address</button>
        </div>
        <div className={'px-10  ' + (type === 'checkout' ? null : 'py-8')}>
          {type !== 'checkout' && <div className='pb-4 text-xl  font-medium tracking-wide'>Address</div>}
          {arrAddressTheFirstIsDefault?.map((a, i) => (
            <div key={a._id} className='py-4  overflow-x-auto flex justify-between items-center border-b-[1px] border-gray-300'>
              {/* info-left */}
              <div className=''>
                <span className='text-base font-semibold border-r-[1px]  border-gray-300 pr-2'>{a?.name}</span>
                <span className='pl-2 text-gray-600'>{a?.phone}</span>
                <div className=' text-gray-600 text-sm'>{a?.addressOther}</div>
                <div className=' text-gray-600 text-sm'>{a?.address}</div>
                {a.default && <div className='px-2 border-[1px] inline-block border-red-300 text-red-500 py-0.5'>Default</div>}
              </div>
              {/* edit and set Default */}
              <div className=' gap-2 flex flex-col justify-end items-end'>
                <div className='flex gap-2'>
                  <button onClick={() => handleUpdateAddress(a, i)} className='text-sm text-blue-500'>Edit</button>
                  {!a.default && <button onClick={() => setOpenConfirmDelete({ open: true, id: a._id })} className='text-sm text-blue-500'>Delete</button>}
                </div>
                <button disabled={a.default ? true : false} onClick={() => handleSetDefault(a._id)} className={'text-sm border-[1px] px-2 rounded-sm py-1.5  border-gray-300 ' + (a.default ? 'text-gray-400' : '')}>Set as default</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* open add new address */}
      <motion.div variants={variant} initial='initial' animate={openAdd ? 'open' : 'closed'} className={'fixed z-50 top-0 left-0 th-fl h-screen w-full ' + (openAdd ? 'bg-[#00000066]' : '')}>
        <motion.form variants={variant} initial='initial' animate={openAdd ? 'openChild' : 'closed'} onSubmit={(e) => handleSubmit(e)} className="fixed bg-white rounded-md p-8">
          <span className='text-xl font-semibold'>New Address</span>
          {/* name and phone */}
          <div className=' flex mt-4 justify-between gap-2 items-center'>
            <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className='py-2 pl-4 pr-8 outline-none border-gray-400 border-[1px] rounded-sm placeholder:text-sm' placeholder='Full Name' type="text" />
            <input required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='py-2 pl-4 pr-8 px-4 outline-none border-gray-400 border-[1px] rounded-sm placeholder:text-sm' placeholder='Phone Number' type="text" />
          </div>
          {/* address */}
          <div ref={ref} className='relative mt-4'>
            <input required value={valueAddress} onChange={(e => { })} onClick={() => setOpenAddress(true)} placeholder='City,District,Ward' className='placeholder:text-sm py-2 px-4 w-full outline-none border-gray-400 border-[1px] rounded-sm' type="text" />
            {openAddress && <div className='z-[2000] absolute w-full  border-[1px] border-gray-300 top-12 bg-white left-0'>
              <div className=' flex border-gray-400'>
                <div onClick={() => setActive(1)} className={"w-1/3 text-center py-2 cursor-pointer " + (active === 1 ? " text-red-600 border-b-[2px] border-red-600" : "")}>City</div>
                <div onClick={() => activeClickCity !== null ? setActive(2) : ''} className={"w-1/3 text-center py-2 " + (activeClickCity === null ? 'cursor-not-allowed' : 'cursor-pointer') + (active === 2 ? " text-red-600 border-b-[2px] border-red-600" : "")}>District</div>
                <div onClick={() => activeCLickDistrict !== null ? setActive(3) : ''} className={"w-1/3 text-center py-2 cursor-pointer " + (active === 3 ? " text-red-600 border-b-[2px] border-red-600" : "")}>Ward</div>
              </div>
              {active === 1 &&
                <div className='text-black relative h-[250px] bg-white overflow-auto scrollbar flex flex-col'>
                  {addressData?.map((a, i) => (
                    <div key={i} onClick={() => handleClickCity(i)}
                      className={'z-50 relative text-black p-3 font-medium hover:bg-gray-200 text-sm '
                        + (activeClickCity === i ? 'text-red-600' : '')}>{a.city}</div>
                  ))}
                </div>}
              {active === 2 &&
                <div className='text-black relative h-[250px] bg-white overflow-auto scrollbar flex flex-col'>
                  {addressData[activeClickCity].district?.map((a, i) => (
                    <div key={i} onClick={() => handleClickDistrict(i)}
                      className={'z-50 relative text-black p-3 font-medium hover:bg-gray-200 text-sm '
                        + (activeCLickDistrict === i ? 'text-red-600' : '')}>{a}</div>
                  ))}
                </div>}
              {active === 3 &&
                <div className='text-black relative h-[250px] bg-white overflow-auto scrollbar flex flex-col'>
                  {addressData[0]?.district?.map((a, i) => (
                    <div onClick={() => handleClickWard(i)} key={i}
                      className='z-50 relative text-black p-3 font-medium hover:bg-gray-200 text-sm'>{i}</div>
                  ))}
                </div>}
            </div>}
            <textarea
              required
              onChange={(e) => setStreetNameOrOther(e.target.value)}
              value={streetNameOrOther}
              disabled={valueAddress ? false : true}
              placeholder='Street name, building, house No.'
              className={'placeholder:text-sm border-[1px] border-gray-400 w-full outline-none mt-4 p-2 '
                + (valueAddress ? '' : 'cursor-not-allowed')}
              name="" id="" cols="30" rows="2">
            </textarea>
            <Map />
            {/* home and work */}
            <div className='mt-2'>
              <label htmlFor="">Label as</label><br />
              <div className='mt-4'>
                <span onClick={() => setHomeAndWork('home')} id='home' className={'cursor-pointer mr-2 px-3 py-2 rounded-sm border-[1px] border-gray-300 ' + (homeAndWork === 'home' ? 'bg-slate-500 text-white' : '')}>Home</span>
                <span onClick={() => setHomeAndWork('work')} id='work' className={'cursor-pointer  px-3 py-2 rounded-sm border-[1px] border-gray-300 ' + (homeAndWork === 'work' ? 'bg-slate-500 text-white' : '')}>Work</span>
              </div>
            </div>
            {/* de default */}
            <div className='flex mt-3 gap-2'>
              <input disabled={position === 0 && addressId !== null ? true : false} checked={isDefault} onChange={(e) => handleChecked(e)} type="checkbox" />
              <span className='text-sm text-gray-500'>Set default Address</span>
            </div>
          </div>
          <div className='w-full mt-6 text-end '>
            <div onClick={() => setOpenAdd(false)} className=' cursor-pointer inline-block px-10 py-2 mr-4 rounded-sm hover:bg-slate-100'>Cancel</div>
            <button className='px-10 py-2 cursor-pointer  bg-orange-500 rounded-sm text-white hover:bg-orange-600'>Submit</button>
          </div>
        </motion.form>
      </motion.div>
      {openConfirmDelete?.open &&
        <div className='fixed z-50 top-0 left-0 th-fl bg-[#00000066] w-full h-screen'>
          <div className="fixed bg-white rounded-md p-8">
            <span>Delete Address</span>
            <div className='w-full mt-6 text-end '>
              <div onClick={() => setOpenConfirmDelete(false)} className=' cursor-pointer inline-block px-10 py-2 mr-4 rounded-sm hover:bg-slate-100'>Cancel</div>
              <button onClick={() => handleDelete(openConfirmDelete.id)} className='px-10 py-2 cursor-pointer  bg-orange-500 rounded-sm text-white hover:bg-orange-600'>Confirm</button>
            </div>
          </div>
        </div>
      }
      {/* <div>{JSON.stringify(allAddresses)}</div> */}
    </>
  )
}

Addresses.propTypes = {

}

export default Addresses
