
import { useEffect, useState } from 'react'
import { BsMessenger, BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiFillInstagram, AiFillHeart, AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'
import { FaMotorcycle } from 'react-icons/fa6'
import { BiChevronDown } from 'react-icons/bi'
import { productData } from '~/static/data'
import { useNavigate } from 'react-router-dom'
import Ratings from "./Ratings";
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BsWechat } from 'react-icons/bs'
import { useLocation, Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy
import { useDispatch, useSelector } from 'react-redux'
import { ActionAddTocart, ActionClearCart } from '~/Redux/actions/cart'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { ActionCreateConversation } from '~/Redux/actions/chat'

const ProductDetails = ({ data }) => {
  const { allCarts, message, error } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.user)
  const [valueVoucher, setValueVoucher] = useState(null)
  const [select, setSelect] = useState(null)
  const [count, setCount] = useState(1)
  const [selectColor, setSelectColor] = useState(-1)
  const [selectCapacity, setSelectCapacity] = useState(-1)
  const [arrCapacity, setArrCapacity] = useState([])
  const [arrCapacitiesOfoOption, setArrCapacitiesOfoOption] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    if (message) {
      toast.success(message)
    } else {
      toast.error(error)
    }
    dispatch(ActionClearCart())
  }, [dispatch, message, error])
  const handleSelect = (tab) => {
    setSelect(tab)
  }
  const handleSelectColor = (tab) => {
    setSelect(null)
    // khi select color đồng thời lấy ra những option của nó (giả sử select iphone màu vàng đồng thời lấy ra mảng [128gb,256gb,516gb])
    const capacitiesOfoOption = data?.capacities[tab]?.capacity.map(a => a.capacity)
    setArrCapacitiesOfoOption(capacitiesOfoOption)
    selectColor === tab ? '' : (setSelectColor(tab), setSelectCapacity(-1))
  }
  const handleSelectCapacity = (tab) => {
    selectCapacity === tab ? '' : setSelectCapacity(tab)
  }
  const handleDecreaseQuantity = () => {
    count === 1
      ? ''
      : setCount(count - 1)
  }
  const handleIncreaseQuantity = () => {
    if (count !== data.stock) {
      setCount(count + 1)
    }
  }
  const handleAddtocard = (product, emailUser) => {
    if (count > -1 && selectColor > -1 && selectCapacity > -1) {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        dispatch(ActionAddTocart({ product, emailUser, count, selectColor, selectCapacity }));
      }
    } else {
      toast.error("pleaser choose full  color and capacity")
    }
  }

  useEffect(() => {
    const save = []
    const x = data?.capacities?.map((a) => {
      return a.capacity.map(b => b.capacity)
    })
    // nối 3 mảng thành 1 mảng vd: [[1,2],[2,4],[4,6]] ==> [1,2,2,4,4,6]
    const rs = save.concat.apply([], x)
    // lấy phần tử unique
    const uniqueElements = [...new Set(rs)]
    setArrCapacity(uniqueElements)
  }, [data])
  return (
    <div className=' bg-slate-100 overflow-x-auto pt-12'>
      <div className='w-[90%] min-w-[450px] h-max flex flex-col md:flex-row md:justify-center md:items-center mx-auto bg-white'>
        {/* CoLumn 1 */}
        <div className='h-full min-h-[740px] w-full md:w-[40%] flex flex-col justify-start gap-8 items-center'>
          {/* Content1 */}
          <div className=' th-fl md:w-full py-2 min-h-[550px] md:h-full'>
            {(
              () => {
                if ((select === 0 && selectColor > -1) || (select && selectColor > -1) || (select === 0 && selectColor == -1) || (select && selectColor == -1)) {
                  return (
                    <img id='image' src={`http://localhost:4000/${data?.images[select]}`} className=' h-[450px] ' alt='error1' />
                  )
                }
                else if (select === null && selectColor == -1) {
                  return (
                    <img id='image' src={`http://localhost:4000/${data?.images[0]}`} className='h-[450px] ' alt='error3' />
                  )
                } else if (select === null && selectColor > -1) {
                  return (
                    <img id='image' src={`http://localhost:4000/${data?.capacities[selectColor]?.url}`} className='h-[450px]' alt='error4' />
                  )
                }
              }
            )()}
          </div>
          {/* Content2 */}
          <div className='pl-4 flex justify-start items-center gap-2 overflow-auto'>
            {data?.images?.map((d, i) => {
              return (
                <img onMouseEnter={() => handleSelect(i)} key={i} src={`http://localhost:4000/${d}`} className={'w-[80px] h-[80px] border-[1px] ' + (select === i ? 'border-red-500 border-[2px]' : 'border-gray-300')} alt="" />
              )
            })}
          </div>
          {/* Content3 */}
          <div className='w-full flex flex-col 900:flex-row 900:justify-between 900:items-center 900:p-1 xl:px-16'>
            <div className=' th-fl gap-2'>
              <span className='text-base font-medium'>Share:</span>
              <BsMessenger color='#0584ff' size={20} />
              <BsFacebook color='#3c5999' size={20} />
              <BsTwitter color='#10c2ff' size={20} />
              <AiFillInstagram color='#f04d5b' size={22} />
            </div>
            <div className="th-fl ml-4">
              <AiFillHeart size={25} className='text-red-500' />
              <span className='text-base font-medium ml-2'>Favorite (15)</span>
            </div>

          </div>
        </div>
        {/* CoLumn 2 */}
        <div className='h-full min-h-[740px] w-full md:w-[60%] pt-6 relative'>
          <div className='h-[90%] pb-8 w-full px-6 gap-6 text-base font-light'>
            {/* NAME */}
            <div className=" text-xl font-medium">
              {data?.name}
            </div>
            {/* RATINGS */}
            <div className="mt-1 py-2 flex text-sm font-light justify-between items-center">
              <div className='th-fl gap-2'>
                <div className='th-fl gap-1'>
                  <div className='font-normal'>1246</div>
                  <div className='font-normal text-gray-600'>ratings</div>
                </div>
                <span className='border-l-[1px] border-black h-3'></span>
                <div className='th-fl'>
                  <Ratings rating={4.1} />
                  <span className='text-gray-600'>Ratings</span>
                </div>
                <span className='border-l-[1px] border-black h-3'></span>
                <div className='th-fl gap-1'>
                  <span className='font-normal'>{data?.sold_out}</span>
                  <span className='text-gray-600'>Sold out</span>
                </div>
              </div>
              <div>Report</div>
            </div>
            {/* TOTAL PRICE */}
            <div className='bg-slate-200 flex justify-start pl-2 gap-2 items-center'>
              <div className="mt-2 w-max text-xl line-through font-medium text-gray-600  py-4">
                {data?.originalPrice * count}$
              </div>
              <div className="mt-2 w-full text-3xl font-medium text-red-600  py-4">
                {data?.discountPrice * count}$
              </div>
            </div>
            {/* 5 ITEMS */}
            <div className='flex pl-4 pt-4 gap-6 flex-col'>
              {/* Item 1 Shop Vouchers*/}
              <div className="text-sm mt-2 flex justify-start items-center">
                <span className='  w-[120px] font-normal text-gray-500'>Vouchers Shop</span>
                <Tippy
                  animation={'perspective'}
                  theme="light"
                  interactive
                  // visible
                  placement='bottom-end'
                  offset={[-10, 20]}//trai , tren
                  delay={[0, 0]}
                  content={
                    <div className=' p-4'>
                      <div className='flex flex-col justify-start items-start'>
                        <span className='text-base font-normal'>Shop Vouchers</span>
                        <span className='text-sm py-2 text-gray-600'>Save more by applying these Shop Vouchers to the items in your shopping cart.</span>
                      </div>
                      <div className="w-full flex flex-col gap-2 ">
                        {/* Voucher 1 */}
                        <div className='px-2 h-[100px] w-[330] border-[1px] border-gray-300 flex justify-between items-center'>
                          <div className='flex h-full justify-center items-center'>
                            <img className='w-[100px] h-full object-cover' src='https://png.pngtree.com/png-vector/20220514/ourmid/pngtree-voucher-discount-vector-png-image_4609862.png' alt="" />
                            <div className='flex pl-2 flex-col justify-center items-start'>
                              <span className='font-medium'>3% off</span>
                              <span className='font-normal'>Min. Spend ₫150k Capped at ₫9k</span>
                              <span className='font-light text-xs'>Valid Till: 23.11.2023</span>
                            </div>
                          </div>
                          <button onClick={() => setValueVoucher(1)} className=' hover:bg-red-600 px-4 rounded-sm py-2 bg-red-500 text-white'>Claim</button>
                        </div>
                        {/* Voucher 2 */}
                        <div className='px-2 h-[100px] w-[330] border-[1px] border-gray-300 flex justify-between items-center'>
                          <div className='flex h-full justify-center items-center'>
                            <img className='w-[100px] h-full object-cover' src='https://png.pngtree.com/png-vector/20220514/ourmid/pngtree-voucher-discount-vector-png-image_4609862.png' alt="" />
                            <div className='flex pl-2 flex-col justify-center items-start'>
                              <span className='font-medium'>3% off</span>
                              <span className='font-normal'>Min. Spend ₫150k Capped at ₫9k</span>
                              <span className='font-light text-xs'>Valid Till: 23.11.2023</span>
                            </div>
                          </div>
                          <button onClick={() => setValueVoucher(2)} className='hover:bg-red-600 px-4 rounded-sm py-2 bg-red-500 text-white'>Claim</button>
                        </div>
                        {/* Voucher 3 */}
                        <div className='px-2 h-[100px] w-[330] border-[1px] border-gray-300 flex justify-between items-center'>
                          <div className='flex h-full justify-center items-center'>
                            <img className='w-[100px] h-full object-cover' src='https://png.pngtree.com/png-vector/20220514/ourmid/pngtree-voucher-discount-vector-png-image_4609862.png' alt="" />
                            <div className='flex pl-2 flex-col justify-center items-start'>
                              <span className='font-medium'>3% off</span>
                              <span className='font-normal'>Min. Spend ₫150k Capped at ₫9k</span>
                              <span className='font-light text-xs'>Valid Till: 23.11.2023</span>
                            </div>
                          </div>
                          <button onClick={() => setValueVoucher(3)} className='hover:bg-red-600 px-4 rounded-sm py-2 bg-red-500 text-white'>Claim</button>
                        </div>
                      </div>
                    </div>
                  }
                >
                  {valueVoucher ? <div className='font-normal th-fl gap-2'>
                    {valueVoucher === 1 && <span className=' text-red-600 p-[2px] text-xs rounded-sm bg-red-100 cursor-pointer'>3% OFF</span>}
                    {valueVoucher === 2 && <span className=' text-red-600 p-[2px] text-xs rounded-sm bg-red-100 cursor-pointer'>9% OFF</span>}
                    {valueVoucher === 3 && <span className=' text-red-600 p-[2px] text-xs rounded-sm bg-red-100 cursor-pointer'>16% OFF</span>}

                  </div> :
                    <div className='font-normal th-fl gap-2'>
                      <span className=' text-red-600 p-[2px] text-xs rounded-sm bg-red-100 cursor-pointer'>3% OFF</span>
                      <span className=' text-red-600 p-[2px] text-xs rounded-sm bg-red-100 cursor-pointer'>9% OFF</span>
                      <span className=' text-red-600 p-[2px] text-xs rounded-sm bg-red-100 cursor-pointer'>18% OFF</span>
                    </div>}
                </Tippy>
              </div>
              {/* Item 2 Protection*/}
              <div className="flex justify-start items-center">
                <span className=' w-[120px] font-normal text-sm text-gray-500'>Protection</span>
                <div className='th-fl gap-2'>
                  <span className='font-normal text-sm '>Bảo hiểm Thiết bị điện tử</span>
                  <span className='text-[10px] leading-4 px-1 h-full font-bold bg-red-500 rounded-r-md rounded-tl-md text-white'>New</span>
                </div>
                <div className="text-xs font-medium text-blue-600"> Learn more</div>

              </div>
              {/* Item 3 Shipping*/}
              <div className="flex justify-start items-start">
                <span className=' w-[120px] font-normal text-sm text-gray-500'>Shipping</span>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-start gap-2 items-center'>
                    <img className='w-[20px] h-[20px]' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png" alt="" />
                    <span className='text-sm'>Free shipping</span>
                  </div>
                  <div className='flex gap-2 justify-start items-start'>
                    <FaMotorcycle size={18} />
                    <div className='gap-2 flex font-normal text-sm flex-col items-start justify-center'>
                      <div className='th-fl gap-10'>
                        <span>Shipping To</span>
                        <button className='th-fl'>
                          <span>Đông Á,Đông Hưng,Thái Bình</span>
                          <BiChevronDown size={15} />
                        </button>
                      </div>
                      <div className='th-fl gap-8'>
                        <span>Shipping Fee</span>
                        <button className='th-fl'>
                          <span>₫0</span>
                          <BiChevronDown size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 4 colors*/}
              <div className="flex flex-wrap">
                <span className='w-[120px] font-normal text-sm text-gray-500 pr-12'>Colors</span>
                {data?.capacities?.map((p1, i) => {
                  return (
                    <button key={i} onClick={() => handleSelectColor(i)}
                      className={'mr-2 px-2 py-1 border-[1px] border-gray-300 ' + (selectColor === i ? "bg-teal-400 text-white  border-[2px] border-teal-500 font-medium" : null)}>{p1.name}</button>
                  )
                })}
              </div>
              {/* Item 5 Capacity*/}
              <div className="flex ">
                <span className='font-normal w-[120px] text-sm text-gray-500'>Capacity</span>
                {arrCapacity?.map((a, i) =>
                  <button key={i} onClick={() => handleSelectCapacity(i)}
                    className={'pr-2 mr-2 px-2 py-1 border-[1px] border-gray-300 ' + (!arrCapacitiesOfoOption?.includes(a) ? "text-gray-300 " : '  ') + (selectCapacity === i ? "bg-teal-400 text-white  border-[2px] border-teal-500 font-medium" : null)}
                    disabled={(!arrCapacitiesOfoOption?.includes(a) ? true : false)}
                  >
                    {a}
                  </button>)}
                {/* {data?.capacities[selectColor]?.capacity.map((d, i) => <button key={i} onClick={() => handleSelectCapacity(i)}
                  className={'pr-2 mr-2 px-2 py-1 border-[1px] border-gray-300 ' + (selectCapacity === i ? "bg-teal-400 text-white  border-[2px] border-teal-500 font-medium" : null)}
                >
                  {d.capacity}
                </button>)} */}
              </div>
            </div>
            {/* Quantity */}
            <div className='w-max pl-4 th-fl'>
              <span className='font-normal w-[120px] text-sm text-gray-500'>Quantity</span>
              <div className='w-max justify-between flex  my-8 rounded-sm'>
                <button onClick={handleDecreaseQuantity} className='w-10 py-1 px-2 text-base bg-teal-400 rounded-tl-sm rounded-bl-sm flex items-center justify-center'><AiOutlineMinus /></button>
                <span className='w-10 min-w-[40px] py-1 px-3 text-base bg-gray-200 flex items-center justify-center'>{count}</span>
                <button onClick={handleIncreaseQuantity} className='basis-1/3 py-1 px-2 text-base bg-teal-400 flex items-center justify-center'><AiOutlinePlus /></button>
              </div>
              <span className='font-normal ml-2 text-sm text-gray-500'>{data?.stock} pieces available</span>
            </div>
            {/* Button Buy now */}
            <div className='flex pl-4 justify-start items-center gap-4'>
              <button onClick={() => handleAddtocard(data, user.email)} className='px-6 py-3 min-w-[180px] bg-red-600 hover:bg-red-700 text-white rounded-sm th-fl'>
                <AiOutlineShoppingCart />
                <span className=''  >Add to Cart</span>
              </button>
              <Link
                to={{ pathname: '/cart' }}
                state={{ type: 'buynow' }}//gửi qua ProductDetails
              ><button onClick={() => handleAddtocard(data, user.email)} className='px-6 py-3 min-w-[180px] bg-red-600 hover:bg-red-700 text-white rounded-sm '>Buy now</button></Link>
            </div>
          </div>
          {/* return 7 days  */}
          <div className='flex border-t-[1px] p-6 w-full h-[10%] border-gray-300  justify-between items-center'>
            <Tippy
              interactive
              theme='light'
              placement='bottom-end'
              content=
              {
                <div className='p-4'>
                  <div>7 Days Free Return for all Shopee Mall products to</div>
                  <div>ensure that you are happy with your purchase.</div>
                </div>
              }
            >
              <div className='th-fl'>
                <img className='w-5 h-5' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png" alt="" />
                <span className='text-sm'>7 Days Return</span>
              </div>
            </Tippy>
            <Tippy
              interactive
              theme='light'
              placement='bottom-end'
              content=
              {
                <div className='p-4'>
                  <div>Get double your money back if you receive a </div>
                  <div>non-authentic product from Shopee Mall.</div>
                </div>
              }
            >
              <div className='th-fl'>
                <img className='w-5 h-5' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png" alt="" />
                <span className='text-sm'>100% Authentic</span>
              </div>
            </Tippy>
            <Tippy
              theme='light'
              interactive
              placement='bottom-end'
              content=
              {
                <div className='p-4'>
                  <div>Enjoy Free Shipping on all products purchased </div>
                  <div>from Shopee Mall.</div>
                </div>
              }
            >
              <div className='th-fl'>
                <img className='w-5 h-5' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png" alt="" />
                <span className='text-sm'>Free Shipping</span>
              </div>
            </Tippy>
          </div>
        </div>
      </div>
      <ProductDetailsInfo data={data} />
    </div >
  )
}
const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  const { user, isAuthenticated } = useSelector(state => state.user)
  const { conversation, conversations, success, error } = useSelector(state => state.chat)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (success) {
      toast.success(success)
    }
    if (error) {
      toast.error(error)
    }
    dispatch({
      type: 'clearMassageChat'
    })
  }, [dispatch, error, success])

  const handleMessages = async () => {
    dispatch({ type: 'open', payload: true })
    if (isAuthenticated) {
      const groupTitle = data.shopId + user._id
      dispatch(ActionCreateConversation({ userId: user._id, groupTitle, sellerId: data.shopId }))
    } else {
      toast.error('please login to create a conversation')
    }
  }
  return (
    <div className=" w-[90%] min-w-[450px] !bg-white mx-auto 800px:px-10 py-2 mt-8 mb-8 rounded">
      <div className='py-2 w-full  flex h-[400px] md:h-[280px] lg:h-[150px] flex-col md:flex-row lg:justify-between lg:items-center '>
        {/* conten1 */}
        <div className=' w-[33%] h-full min-w-[380px] border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-gray-200 flex justify-start items-center relative'>
          <div className='absolute flex gap-4 pl-12 flex-col text-black justify-center items-start w-full h-full top-0 left-0'>
            {/* avatar*/}
            <div className='flex justify-between gap-4 text-black items-center'>
              <Link to={`/view-shop/${data?.shop?.name}`}><img className='object-contain w-[80px] h-[80px] rounded-full border-[2px] border-gray-400' src={`http://localhost:4000/${data?.shop?.avatar}`} alt="" /></Link>
              <div className=' flex flex-col'>
                <Link ><span className=' text-lg '>{data?.shop?.name}</span></Link>
                <span className='text-xs'>Join On {data?.shop?.createdAt?.slice(0, 10)}</span>
              </div>
            </div>
            {/* button*/}
            <Stack spacing={2} className='th-fl  ' direction="row">
              <Button
                startIcon={<AiOutlinePlus size={15} />}
                className='w-[150px] text-xs min-h-[30px] font-semibold box-border border-[0.5px] hover:border-[1px] text-black border-gray-400 hover:border-gray-400'
                variant="outlined">FOLLOW</Button>
              <Button
                onClick={handleMessages}
                startIcon={<BsWechat size={15} />}
                className='w-[150px] text-xs min-h-[30px] font-semibold box-border border-[0.5px] hover:border-[1px] text-black border-gray-400 hover:border-gray-400'
                variant="outlined">CHAT</Button>
            </Stack>
          </div>
        </div>
        <div className=' w-[67%] gap-2 md:gap-0 flex flex-col lg:flex-row justify-between items-center'>
          {/* conten2 */}
          <div className=' min-w-[180px] h-full w-full lg:w-[33%] px-8 flex flex-col gap-6'>
            <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
              <span className='text-gray-500 font-medium '>Ratings</span>
              <span className='text-red-500'>52,8k</span>
            </div>
            <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
              <span className='text-gray-500 font-medium'>Products</span>
              <span className='text-red-500'>250</span>
            </div>
          </div>
          {/* conten3 */}
          <div className=' h-full w-full lg:w-[33%] min-w-[180px] px-8 flex flex-col gap-6'>
            <div className='  text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
              <span className='text-gray-500 font-medium'>Response Rate</span>
              <span className='text-red-500'>100%</span>
            </div>
            <div className=' text-sm flex min-w-[180px] justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
              <span className='text-gray-500 font-medium'>Response Time</span>
              <span className='text-red-500'>within hours</span>
            </div>
          </div>
          {/* conten4 */}
          <div className=' h-full w-full lg:w-[33%] min-w-[180px] px-8 flex flex-col gap-6'>
            <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
              <span className='text-gray-500 font-medium'>Joined</span>
              <span className='text-red-500'>15 months ago</span>
            </div>
            <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
              <span className='text-gray-500 font-medium'>Follower</span>
              <span className='text-red-500'>63,7k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between border-b px-4 pt-10 pb-2">
        <div className="relative">
          <h5 onClick={() => setActive(1)} className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] " + (active === 1 ? 'text-[crimson]' : '')}>
            Product Details
          </h5>
          {active === 1 ? <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]" /> : null}
        </div>
        <div className="relative">
          <h5 onClick={() => setActive(2)} className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] " + (active === 2 ? 'text-[crimson]' : '')}>
            Product Reviews
          </h5>
          {active === 2 ? <div className='absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]' /> : null}
        </div>
        <div className="relative">
          <h5 onClick={() => setActive(3)} className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px] " + (active === 3 ? 'text-[crimson]' : '')} >
            Seller Information
          </h5>
          {active === 3 ? <div className='absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]' /> : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 px-4 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data?.description}
          </p>
        </>
      ) : null}
      {active === 3 && (
        <div className='py-2 w-full  flex h-[400px] md:h-[280px] lg:h-[150px] flex-col md:flex-row lg:justify-between lg:items-center '>
          {/* conten1 */}
          <div className=' w-[33%] h-full min-w-[380px] border-b-[1px] md:border-b-[0px] md:border-r-[1px] border-gray-200 flex justify-start items-center relative'>
            <div className='absolute flex gap-4 pl-12 flex-col text-black justify-center items-start w-full h-full top-0 left-0'>
              {/* avatar*/}
              <div className='flex justify-between gap-4 text-black items-center'>
                <Link to={`/view-shop/${data?.shop?.name}`}><img className='object-contain w-[80px] h-[80px] rounded-full border-[2px] border-gray-400' src={`http://localhost:4000/${data?.shop?.avatar}`} alt="" /></Link>
                <div className=' flex flex-col'>
                  <Link ><span className=' text-lg '>{data?.shop?.name}</span></Link>
                  <span className='text-xs'>Join On {data?.shop?.createdAt?.slice(0, 10)}</span>
                </div>
              </div>
              {/* button*/}
              <Stack spacing={2} className='th-fl  ' direction="row">
                <Button
                  startIcon={<AiOutlinePlus size={15} />}
                  className='w-[150px] text-xs min-h-[30px] font-semibold box-border border-[0.5px] hover:border-[1px] text-black border-gray-400 hover:border-gray-400'
                  variant="outlined">FOLLOW</Button>
                <Button
                  onClick={handleMessages}
                  startIcon={<BsWechat size={15} />}
                  className='w-[150px] text-xs min-h-[30px] font-semibold box-border border-[0.5px] hover:border-[1px] text-black border-gray-400 hover:border-gray-400'
                  variant="outlined">CHAT</Button>
              </Stack>
            </div>
          </div>
          <div className=' w-[67%] gap-2 md:gap-0 flex flex-col lg:flex-row justify-between items-center'>
            {/* conten2 */}
            <div className=' min-w-[180px] h-full w-full lg:w-[33%] px-8 flex flex-col gap-6'>
              <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
                <span className='text-gray-500 font-medium '>Ratings</span>
                <span className='text-red-500'>52,8k</span>
              </div>
              <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
                <span className='text-gray-500 font-medium'>Products</span>
                <span className='text-red-500'>250</span>
              </div>
            </div>
            {/* conten3 */}
            <div className=' h-full w-full lg:w-[33%] min-w-[180px] px-8 flex flex-col gap-6'>
              <div className='  text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
                <span className='text-gray-500 font-medium'>Response Rate</span>
                <span className='text-red-500'>100%</span>
              </div>
              <div className=' text-sm flex min-w-[180px] justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
                <span className='text-gray-500 font-medium'>Response Time</span>
                <span className='text-red-500'>within hours</span>
              </div>
            </div>
            {/* conten4 */}
            <div className=' h-full w-full lg:w-[33%] min-w-[180px] px-8 flex flex-col gap-6'>
              <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
                <span className='text-gray-500 font-medium'>Joined</span>
                <span className='text-red-500'>15 months ago</span>
              </div>
              <div className=' text-sm flex justify-start lg:gap-0 gap-4 lg:justify-between items-center px-2'>
                <span className='text-gray-500 font-medium'>Follower</span>
                <span className='text-red-500'>63,7k</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};
ProductDetailsInfo.propTypes = {
  data: PropTypes.object,
};
ProductDetails.propTypes = {
  data: PropTypes.object,
};
export default ProductDetails