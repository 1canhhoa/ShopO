import React, { useEffect, useState, useRef } from 'react'
import { LetterIcon } from '~/Assests/svg'
import { useSelector, useDispatch } from 'react-redux'
import { BiSolidMap } from 'react-icons/bi'
import { AiOutlineWechat, AiFillBank } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Addresses from '../User/UserAccount/Addresses'
import { BsTicketPerforated } from 'react-icons/bs'
import { FcMoneyTransfer } from 'react-icons/fc'
import { BsPaypal } from 'react-icons/bs'
import paypalImg from '~/Assests/images/paypal-img.png'
import { ActionAllCheckedProduct } from '~/Redux/actions/cart'
import PayPal from './PayPal'
import axios from 'axios'
import { redirect, useNavigate } from 'react-router-dom'
import { ActionAnimateWhenCheckout, ActionCreateOrderAndDeleteIncarts, ActionOrderClearState } from '~/Redux/actions/order'
import { toast } from 'react-toastify'
import ConfettiCpn from "~/components/ConfettiCpn";
import Swal from 'sweetalert2'
const Checkout = () => {
  const [open, setOpen] = useState(false)
  const [animateConfetti, setAnimateConfetti] = useState(false)
  const [checkedProduct, setCheckedProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [methodpayment, setMethodPayment] = useState('cashOnDelivery')
  const [buttonText, setButtonText] = useState('Place Order');
  const [productsOder, setProductsOder] = useState([])

  const { user } = useSelector(state => state.user)
  const { allCarts, checkedProductsId } = useSelector(state => state.cart)
  const { allAddresses, message, error } = useSelector(state => state.address)
  const { allOrders, messageCreateOrder, errorCreateOrder } = useSelector(state => state.order)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log('checkedProductsId',);
    if (checkedProductsId.length === 0) {
      navigate('/cart')
      toast.error('please checkout a product')
    }
  }, [checkedProductsId.length, navigate])
  useEffect(() => {
    if (messageCreateOrder) {
      setTimeout(() => {
        setAnimateConfetti(true)
        // if ordered successfully , so its open table notice , 
        // then only when you Click Button OK , it will navigate to '/user/purchase'
        Swal.fire('Congrat!', 'Order was created', 'succeed').then(() => {
          navigate('/user/purchase')
          window.location.reload()
        })
      }, 500)
    }
    if (errorCreateOrder) {
      toast.error(errorCreateOrder)
    }
    dispatch(ActionOrderClearState())
  }, [dispatch, errorCreateOrder, messageCreateOrder, navigate])
  const handleSubmit = async () => {
    try {
      setButtonText('ordering...')
      dispatch(ActionCreateOrderAndDeleteIncarts({ products: productsOder, totalPrice: totalPrice, orderBy: user._id, checkoutBy: methodpayment }))
      setButtonText('Place Order')
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    const abc = allCarts?.filter((a) => checkedProductsId.includes(a._id))
    const xyz = abc?.map((a) => {
      const prd = a?.product
      const class1 = prd?.capacities[a?.class]?.name
      const capa1 = prd?.capacities[a?.class]?.capacity[a?.capa]?.capacity
      const totalPriceProduct = prd?.discountPrice * a?.quanti
      // prd?.capacities[1]?.url
      return ({
        product: {
          originalPrice: prd?.originalPrice,
          discountPrice: prd?.discountPrice,
          shopName: prd?.shop?.name,
          shopId: prd?.shopId,
          productId: prd?._id,
          name: prd?.name,
          avatar: prd?.capacities[1]?.url,
        },
        class: class1,
        capa: capa1,
        cartId: a?._id,
        quanti: a?.quanti,
        transportFee: 0,
        totalPriceProduct: totalPriceProduct
      })
    })
    setProductsOder(xyz)
  }, [allCarts, checkedProductsId])
  // {prd?.capacities[b?.class]?.name},  {prd?.capacities[b?.class]?.capacity[b?.capa]?.capacity}
  useEffect(() => {
    // lấy những idcart đã check trong localstore , để tiếp tục lấy ra carts trong allcarts
    // sau đó sắp xếp cart theo từng shop
    const abc = allCarts?.filter((a) => checkedProductsId.includes(a._id))
    const valueUnique = []
    const arrangeItemCart = abc?.map((a, i) => {
      if (!valueUnique.includes(a.product.shopId)) {
        valueUnique[i] = a.product.shopId
        return abc?.filter(b => b.product.shopId === a.product.shopId)
      }
    }).filter(c => c !== undefined)
    // tổng tất cả sản phẩm
    const totalPrice = abc?.reduce((acc, item) => acc + item?.quanti * item?.product?.discountPrice, 0)
    setTotalPrice(totalPrice)
    setCheckedProduct(arrangeItemCart)
  }, [allCarts, checkedProductsId])
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
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
    closed: {
      scaleX: 0,
      scaleY: 0,
    },
  }
  const variant2 = {
    initial: {
      scaleX: 0,
      scaleY: 0,
    },
    open: {
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
  const handleTotalPriceOfOneShop = (a) => {
    const totalPrice = a?.reduce(
      (acc, item) => acc + item?.quanti * item?.product?.discountPrice, 0)
    return totalPrice
  }
  const handleTotalItemOfOneShop = (a) => {
    const totalItems = a?.reduce(
      (acc, item) => acc + item?.quanti, 0)
    return totalItems
  }
  console.log("checkedProduct", checkedProduct);
  return (
    <div className=' h-full relative min-w-[1216px] mx-auto flex justify-center bg-bgr-page'>
      <div className=' flex w-[1216px] flex-col top-0 justify-center pt-4 mx-auto'>
        <div className={`overflow-hidden relative h-[180px] shadow-sm w-full `}>
          <LetterIcon />
          <div className='absolute z-0 w-full p-8 top-0 left-0'>
            {allAddresses?.filter((a, i) => a.default === true)?.map((b, i) => (
              <div key={i} className="grid gap-4">
                <span className='text-red-600 text-lg'><BiSolidMap className='inline' color='red' /> Delivery Address</span>
                <div className='flex gap-10'>
                  <span className='font-bold'>{b?.name} (+84) <br /> {b?.phone}</span>
                  <span className=''></span>
                  <span className='max-w-[780px]'>{b?.address}, {b?.addressOther}</span>
                  <span className='mt-9 px-1 py-0.1 h-fit rounded-sm border-red-500 border-[1px] text-[10px] leading-[12px] text-red-600'>Default</span>
                  <span onClick={() => setOpen(true)} className='mt-8 cursor-pointer text-sm text-blue-600'>change</span>
                  <motion.div variants={variant} initial='initial' animate={open ? 'open' : 'closed'} className={'fixed z-50 top-0 left-0 th-fl  h-screen w-full ' + (open ? '  bg-[#00000066]' : '')}>
                    <motion.div variants={variant2} initial='initial' animate={open ? 'open' : 'closed'} onSubmit={(e) => handleSubmit(e)}
                      className=" p-4 fixed max-h-[650px] w-[500px] bg-white rounded-md">
                      <Addresses type='checkout' />
                      <div className='w-full mt-6 pr-6 text-end '>
                        <div onClick={() => setOpen(false)} className=' cursor-pointer inline-block px-10 py-2 mr-4 rounded-sm hover:bg-slate-100'>Cancel</div>
                        <button className='px-10 py-2 cursor-pointer  bg-orange-500 rounded-sm text-white hover:bg-orange-600'>Confirm</button>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div >
        <div className='w-full flex flex-col gap-5  my-4 '>
          {/* categories */}
          <div className='flex px-8 py-4 bg-white justify-between items-start'>
            <span className='w-[60%]  text-base font-medium '>Products Ordered</span>
            <div className='flex gap-10 w-[40%]'>
              <span className='w-[25%] text-sm text-gray-400'>Unit Price</span>
              <span className='w-[50%] text-sm text-gray-400'>Amount</span>
              <span className='w-[25%] text-sm text-gray-400'>Item Subtotal</span>
            </div>
          </div>
          {/* product */}
          {checkedProduct?.map((a, i) => {
            const totalPriceOfOneShop = handleTotalPriceOfOneShop(a)
            const totalItemOfOneShop = handleTotalItemOfOneShop(a)
            console.log('totalPriceOfOneShop', totalPriceOfOneShop);
            return (
              <div key={i} className='bg-white p-8 shadow-sm'>
                <div className='pb-2'>
                  <span className=' text-base font-semibold pr-2 border-r-[1px] border-gray-300'>{a[0]?.product?.shop?.name}</span>
                  <div className='inline px-2'>
                    <AiOutlineWechat color='teal' size={20} className='inline pr-0.5' />
                    <span className='text-teal-700 text-sm'>Chat now</span>
                  </div>
                </div>
                {a?.map((b, i) => {
                  const prd = b?.product
                  return (
                    <div key={i} className='flex pb-6 pl-2 justify-between items-start'>
                      <div className='w-[60%] pr-8 justify-between flex  text-base font-medium '>
                        <div className='flex  w-[70%]'>
                          <img className='w-8 h-8 mr-4 rounded-full object-cover border-[1px] border-gray-200' src={`http://localhost:4000/${prd?.capacities[1]?.url}`} alt="" />
                          <span className=''>{prd?.name}</span>
                        </div>
                        <div className='text-sm text-gray-500'>Variation: {prd?.capacities[b?.class]?.name},{prd?.capacities[b?.class]?.capacity[b?.capa]?.capacity}</div>
                      </div>
                      <div className='flex gap-10 w-[40%]'>
                        <span className='w-[25%] text-sm '>{prd?.discountPrice}</span>
                        <span className='w-[50%] text-sm '>{b?.quanti}</span>
                        <span className='w-[25%] text-sm '>{prd?.discountPrice * b?.quanti}</span>
                      </div>
                    </div>
                  )
                })}
                <div className='gap-24 text-sm font-medium py-3 border-t-[1px] border-b-[1px] border-dashed border-gray-200  flex justify-end items-center'>
                  <div className='flex justify-between items-center gap-2 '><BsTicketPerforated size={25} color='red' /><span>Voucher Shop</span></div>
                  <span className='text-blue-500'>Select Voucher</span>
                </div>
                <div className=' py-4 flex justify-between items-center gap-8'>
                  <div className='text-sm '>
                    <label htmlFor="">Message</label>
                    <input type="text" placeholder='please leave a message' className='pl-2 ml-2 border-[1px] border-gray-300 w-[300px] outline-none text-gray-400 py-2 rounded-sm' />
                  </div>
                  <div className='text-sm '>
                    <label htmlFor="">Coupoun Code</label>
                    <input type="text" placeholder='enter your coupoun code' className='pl-2 ml-2 border-[1px] border-gray-300 w-[300px] outline-none text-gray-400 py-2 rounded-sm' />
                  </div>
                  <div className='text-sm '>
                    has decreased:0đ
                  </div>
                </div>
                <div className='gap-24 text-sm font-medium py-3 border-t-[1px] border-dashed border-b-[1px] border-gray-200  flex justify-end items-center'>
                  Total Item ({totalItemOfOneShop} items) : {totalPriceOfOneShop}
                </div>
              </div>
            )
          })}
          {/* voucher shop and total price */}
          <div className='gap-24 bg-white text-sm font-medium py-3 px-20 shadow-sm border-gray-200  flex justify-between items-center'>
            <div className='flex justify-between items-center gap-2 '><BsTicketPerforated size={25} color='red' /><span>Voucher App</span></div>
            <span className='text-blue-500'>Select Voucher</span>
          </div>
          <div className='gap-24 bg-white text-sm font-medium py-3 px-20 shadow-sm border-gray-200 '>
            <div className='border-b-[1px] py-2 border-gray-200 flex justify-start items-center gap-8'>
              <div className='flex justify-between items-center text-lg font-semibold gap-2 '>Payment Method</div>
              <div className='flex gap-2'>
                <button onClick={() => setMethodPayment('cashOnDelivery')} className={' th-btn ' + (methodpayment === 'cashOnDelivery' ? 'text-red-500 !border-red-500 !border-[2px]' : '')}>Cash on Delivery</button>
                <button onClick={() => setMethodPayment('paypal')} className={' th-btn ' + (methodpayment === 'paypal' ? 'text-red-500 !border-red-500 !border-[2px]' : '')}>PayPal</button>
                <button onClick={() => setMethodPayment('crebitCard')} className={' th-btn ' + (methodpayment === 'crebitCard' ? 'text-red-500 !border-red-500 !border-[2px]' : '')}>Crebit Card</button>
              </div>
            </div>
            <div className=' border-b-[1px] border-gray-200 flex py-4 justify-start items-center gap-8'>
              <div className='flex justify-between items-center text-lg font-semibold gap-2 '>Payment Method</div>
              {methodpayment === 'cashOnDelivery' && <div className='th-fl gap-2'>
                <FcMoneyTransfer size={30} />
                <span className='text-teal-400 font-bold'>bạn đã chọn thanh toán bằng tiền mặt</span>
              </div>}
              {methodpayment === 'crebit cash' && <div className='th-fl gap-2'>
                <AiFillBank size={30} color='teal' />
                <span className='text-teal-400 font-bold'>bạn đã chọn thanh toán bằng thẻ ngân hàng</span>
              </div>}
              {methodpayment === 'paypal' && <div className='th-fl gap-2'>
                <img src={paypalImg} className='w-16 h-8' alt="" />
                <span className='text-teal-400 font-bold'>bạn đã chọn thanh toán bằng Paypal</span>
              </div>}
              {methodpayment === null && <div className='th-fl gap-2'>
                <span className='text-red-600'>vui lòng chọn một phương thức thanh toán</span>
              </div>}
            </div>
            <div className=' flex justify-start items-start py-4 gap-8'>
              <div className=" py-4 gap-3 flex h-full flex-col">
                <div className='text-base text-gray-600'>Shipping Total:<span className='text-base font-bold'> Free ship</span></div>
                <div className='text-base text-gray-600'>Total Payment:
                  <span className='text-xl font-semibold text-red-500'> ₫{totalPrice}</span>
                </div>
              </div>
              {(methodpayment === 'cashOnDelivery' || methodpayment === 'crebitCard') && <button disabled={buttonText === "Place Order" ? false : true} onClick={handleSubmit} className={'px-8 py-4 bg-orange-600 text-base font-semibold rounded-sm text-white ' + (buttonText === 'Place Order' ? 'hover:bg-orange-700 ' : 'bg-opacity-30')}>{buttonText}</button>}
              {methodpayment === 'paypal' && <PayPal
                payload={{ products: productsOder, totalPrice: totalPrice, orderBy: user._id, checkoutBy: methodpayment }}
                setAnimateConfetti={setAnimateConfetti} amount={totalPrice} />}
            </div>
          </div>
        </div>
      </div >
      {animateConfetti && <ConfettiCpn />}
    </div>
  )
}

export default Checkout
