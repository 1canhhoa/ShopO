
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { LogoApp } from '~/Assests/svg'
import { useSelector } from 'react-redux'
import { GoDotFill } from 'react-icons/go'
import { BsFillPencilFill } from 'react-icons/bs'
import { PiUserCircleDuotone } from 'react-icons/pi'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BiPlus } from 'react-icons/bi'
import axios from 'axios'
import { toast } from "react-toastify";
import Loader from '~/components/Loader'
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/perspective.css'//animation tippy
import { citys } from '~/static/data'
const SellerForm = () => {
  const { user } = useSelector(state => state.user)
  const { isAuthenticatedSeller, seller } = useSelector(state => state.seller)
  // const em = user.email
  const [openAddPickupAddress, setOpenAddPickupAddress] = useState(false)
  // pickup-address
  const [namePickupAdrs, setNamePickupAdrs] = useState('too')
  const [phonePickupAdrs, setphonePickupAdrs] = useState('121212')
  const [addressPickupAdrs, setAddressPickupAdrs] = useState('thaibinh')
  const [detailAddressPickupAdrs, setDetailAddressPickupAdrs] = useState('ggg')
  const [savePickupAdrs, setSavePickupAdrs] = useState(false)
  // info-Shop
  const [image, setImage] = useState({})
  const [city, setCity] = useState('')
  const [arrPickupAddress, setArrPickupAddress] = useState('')
  const [nameShop, setNameShop] = useState('tohien')
  const [zipcode, setZipcode] = useState('7400')
  const [emailShop, setEmailShop] = useState('')
  const [phoneNumberShop, setPhoneNumberShop] = useState('121231231')
  const [loadpage, setloadpage] = useState(false)
  // 
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("/api/v1/profile").then((res) => {
      setEmailShop(res.data.email)
    })
  }, [])
  const handleLogout = () => {
    axios.get('/api/v1/logout', { withCredentials: true })
      .then((res => {
        toast.success('log out success')
        window.location.reload(true)
        navigate('/login')
      })).catch((error) => {
        console.log(error.response.data);
      })
  }
  const handleSavePickupAdrs = () => {
    const Arr = {}
    namePickupAdrs && phonePickupAdrs && addressPickupAdrs && detailAddressPickupAdrs ?
      (
        setSavePickupAdrs(true),
        setOpenAddPickupAddress(false),
        toast.success("Saved success"),
        Arr.name = namePickupAdrs,
        Arr.phone = phonePickupAdrs,
        Arr.address = addressPickupAdrs,
        Arr.detailAddress = detailAddressPickupAdrs,
        setArrPickupAddress(JSON.stringify({ ...Arr }))
      ) : toast.error("please fill complete")
  }
  const onImageChange = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    if (event.target.files && event.target.files[0]) {
      setImage({ url: URL.createObjectURL(event.target.files[0]), file: event.target.files[0] });
      // setImage(event.target.files[0]);
    }
  }
  const handleSudmitSellerForm = (e) => {
    e.preventDefault()
    const config = { Headers: { "Content-Type": "multipart/form-data" } }
    const newForm = new FormData()
    newForm.append('zipcode', zipcode)
    newForm.append('city', city)
    newForm.append('file', image.file)
    newForm.append('nameShop', nameShop)
    newForm.append('emailShop', emailShop)
    newForm.append('phoneNumber', phoneNumberShop)
    newForm.append('arrPickupAddress', arrPickupAddress)
    if (city === 'please choose one') {
      toast.error('please choose your city')
    } else {
      setloadpage(true)
      axios
        .post("/api/v1/shop/create-shop", newForm, config)
        .then((res) => {
          console.log(res.data.message)
          setloadpage(false)
          toast.success("create shop success please check email to login shop")
          setImage(''); setNameShop(''); setZipcode(''), setCity('')
          setPhoneNumberShop(''); setAddressPickupAdrs('')
        })
        .catch((error) => {
          setloadpage(false)
          toast.error(error.response.data)
        })
    }
  }
  return (
    <>
      {loadpage && <Loader />}
      <div className='w-full h-screen flex flex-col justify-between items-start bg-slate-300'>
        {/* part 1 */}
        <div className=" w-full min-w-[1200px] min-h-[72px] h-[10%] py-4 px-4 bg-red-200">
          <div className='flex justify-between items-center'>
            <div className="th-fl gap-2">
              <Link to="/">
                <LogoApp color='bg-shop_main' />
              </Link>
              <span className='h-6 border-l-[2px] border-gray-300'></span>
              <span className='text-xl font-semibold'>Sign up to become a ShopO Seller</span>
            </div>
            {/* <Tippy
              placement='bottom-end'
              animation='perspective'
              theme="notification"
              interactive
              content={
                <div className="">
                  <div onClick={handleLogout} className="py-2 pl-2 cursor-pointer hover:text-teal-400 hover:bg-slate-100 font-semibold w-[150px]">Log out</div>
                </div>
              }
            >
              <button className='th-fl gap-1'>
                <img src={`http://localhost:4000/${user?.avatar}`} alt="" className='w-8 h-8 rounded-full' />
                <span className='font-normal'>Nham Hien</span>
                <FiChevronDown />
              </button>
            </Tippy> */}
          </div>
        </div>
        {/* part 2 */}
        <div className='w-full th-bd h-[90%] min-h-[700px] min-w-[1200px] th-fl rounded-sm shadow-inner'>
          <div className=' overflow-x-scroll h-full w-full flex flex-col p-4 bg-white'>
            {/* Row 1 */}
            <div className='h-[15%]'>
              <div className='w-full h-full th-fl text-2xl font-semibold'>
                Signup Seller
              </div>
            </div>
            <span className='w-full border-b-[1px] border-gray-300'></span>
            {/* Row 2 */}
            <div className='h-[85%] w-full relative flex justify-center items-center'>
              {/* form */}
              <form onSubmit={handleSudmitSellerForm} className=' w-[50%] overflow-y-scroll p-4 text-sm h-full gap-8 flex flex-col items-start'>
                {/* NameShop */}
                <div className='th-fl gap-1'>
                  <GoDotFill color='red' />
                  <span htmlFor="" className='w-[120px]'>NameShop</span>
                  <div className="border-[1px] border-gray-300 w-[300px] h-8 gap-2 px-2 rounded-sm flex justify-between items-center">
                    <input required value={nameShop} name='nameShop' onChange={(e) => setNameShop(e.target.value)} type="text" className='w-full h-full outline-none' placeholder='input' />
                    <span className='text-gray-400'>3/20</span>
                  </div>
                </div>
                {/* Pick-up address */}
                <div className='flex justify-center items-start gap-1'>
                  <GoDotFill color='red' />
                  <span htmlFor="" className='w-[120px]'>Pick-up address</span>
                  {!savePickupAdrs && <div onClick={() => setOpenAddPickupAddress(true)} className=' cursor-pointer th-fl  border-[1px] py-1/2 border-gray-300 gap-1'>
                    <BiPlus />
                    {/* <span className='font-normal'>Add</span> */}
                    <input className='w-[30px] cursor-pointer text-transparent outline-none' required type="text" placeholder='add' />
                  </div>}
                  {savePickupAdrs && <div className='flex flex-col justify-center items-start'>
                    <div className='flex justify-center items-center gap-1 '>
                      <span>{namePickupAdrs}</span>
                      <span className='h-3 border-l-[1px] border-gray-400'></span>
                      <span>{phonePickupAdrs}</span>
                    </div>
                    <div>{addressPickupAdrs}</div>
                    <div>{detailAddressPickupAdrs}</div>
                    <div onClick={() => setOpenAddPickupAddress(true)} className='th-fl  border-[1px] px-3 py-1/2 border-gray-400 gap-1'>
                      <BsFillPencilFill />
                      <span className='font-normal'>Edit</span>
                    </div>
                  </div>}
                </div>
                {/* Email Shop */}
                <div className='th-fl gap-1'>
                  <GoDotFill color='red' />
                  <span htmlFor="" className='w-[120px]' >Email</span>
                  <div className="border-[1px] select-none w-[300px] h-8 gap-2 px-2 rounded-sm flex justify-between items-center border-gray-300">
                    <input disabled required value={emailShop} name='emailShop' onChange={(e) => setEmailShop(e.target.value)} type="email" className='w-full h-full outline-none select-none' placeholder='input' />
                    <span className='text-gray-400'>3/20</span>
                  </div>
                </div>
                {/* phoneNumber Shop */}
                <div className='th-fl gap-1'>
                  <GoDotFill color='red' />
                  <span htmlFor="" className='w-[120px]'>PhoneNumber</span>
                  <div className="border-[1px] border-gray-300 w-[300px] h-8 gap-2 px-2 rounded-sm flex justify-between items-center">
                    <input required value={phoneNumberShop} name='phoneNumberShop' onChange={(e) => setPhoneNumberShop(e.target.value)} type="text" className='w-full h-full outline-none' placeholder='input' />
                    <span className='text-gray-400'>3/20</span>
                  </div>
                </div>
                {/* city */}
                <div className='th-fl gap-1'>
                  <GoDotFill color='red' />
                  <span htmlFor="" className='w-[120px]'>city</span>
                  <select required value={city} onChange={(e) => setCity(e.target.value)} className='w-[300px]  h-8 overflow-y-auto border-[1px] border-gray-300 rounded-sm outline-none' name="" id="" >
                    <option value="" className=' pt-20 text-base font-normal'>please choose one</option>
                    {citys.map((c, i) => (
                      <option key={i} value={c.city}>{c.city}</option>
                    ))}
                  </select>
                </div>
                {/* Zip Code*/}
                <div className='th-fl gap-1'>
                  <GoDotFill color='red' />
                  <span htmlFor="" className='w-[120px]'>Zip code</span>
                  <div className="border-[1px] border-gray-300 w-[300px] h-8 gap-2 px-2 rounded-sm flex justify-between items-center">
                    <input required value={zipcode} name='zipcode' onChange={(e) => setZipcode(e.target.value)} type="text" className='w-full h-full outline-none' placeholder='input' />
                    <span className='text-gray-400'>3/20</span>
                  </div>
                </div>
                {/* Submit */}
                <div className=' flex justify-start gap-4 w-full'>

                  <button className={`py-2 px-8 bg-shop_main text-white rounded-sm  ` + (isAuthenticatedSeller ? 'w-[221px]' : 'w-[442px]')}>Submit</button>
                  {isAuthenticatedSeller && <Link className='w-[221px]' to={`/dashboard/overview/${seller.name}`} ><button className='w-full py-2 px-8  bg-shop_main text-white rounded-sm'>go to your shop</button></Link>}
                </div>
                {/* image */}
                <div className='absolute left-[1000px] w-[30%] flex flex-col gap-2 justify-start pt-[5%] items-center '>
                  {!image.file && <PiUserCircleDuotone size={100} color='gray' />}
                  {image.file && <img src={image.url} alt="" className='w-[60px] object-contain h-[60px] rounded-full' />}
                  <div className='w-full text-center'>{image.name}</div>
                  <input required type="file" id="file-input" name="file-input" className="mx-auto w-[86px]" onChange={onImageChange} />
                  <span className='text-sm font-normal text-gray-400'>File size: maximum 1 MB</span>
                  <span className='text-sm font-normal text-gray-400'>File extension: .JPEG, .PNG</span>
                </div>
              </form>
              <span className=' h-[50%] w-[1px] mb-36 border-[1px] border-gray-200'></span>
            </div>
            {/* Row 3 */}
            {/* <div className='h-[15%]'></div> */}
          </div>
        </div >
        {openAddPickupAddress &&
          <div className='th-fl text-sm z-50 h-screen w-full fixed top-0 right-0 bg-[#dbdbdb] bg-opacity-50'>
            <div className='w-[500px] shadow-md absolute overflow-y-auto bg-white p-4'>
              <div className='flex justify-between py-2 items-center'>
                <span className='text-lg font-light text-gray-500'>Pick Up Address</span>
              </div>
              <div action="" className='overflow-auto'>
                <Box component="form" sx={{ justifyContent: 'center', flexDirection: 'column', display: 'flex', paddingTop: '10px', alignItems: 'start' }} noValidate autoComplete="off" >
                  <TextField name='namePickupAdrs' value={namePickupAdrs} onChange={(e) => setNamePickupAdrs(e.target.value)} size='small' sx={{ width: '95%' }} id="outlined-basic" label="FullName" variant="outlined" />
                </Box>
                <Box component="form" sx={{ justifyContent: 'center', flexDirection: 'column', display: 'flex', paddingTop: '20px', alignItems: 'start' }} noValidate autoComplete="off" >
                  <TextField name='phonePickupAdrs' value={phonePickupAdrs} onChange={(e) => setphonePickupAdrs(e.target.value)} size='small' sx={{ width: '95%' }} id="outlined-basic" label="PhoneNumber" variant="outlined" />
                </Box>
                <div className='flex justify-between py-2 items-center'>
                  <span className='text-sm font-semibold text-gray-500'>Address</span>
                </div>
                <Box component="form" sx={{ justifyContent: 'center', flexDirection: 'column', display: 'flex', alignItems: 'start' }} noValidate autoComplete="off" >
                  <TextField name='addressPickupAdrs' value={addressPickupAdrs} onChange={(e) => setAddressPickupAdrs(e.target.value)} size='small' sx={{ width: '95%' }} id="outlined-basic" label="Address" variant="outlined" />
                </Box>
                <Box component="form" sx={{ justifyContent: 'center', flexDirection: 'column', display: 'flex', paddingY: '20px', alignItems: 'start' }} noValidate autoComplete="off" >
                  <TextField name='detailAddressPickupAdrs' value={detailAddressPickupAdrs} size='small' onChange={(e) => setDetailAddressPickupAdrs(e.target.value)} sx={{ width: '95%' }} id="outlined-basic" label="DetailAddress" variant="outlined" />
                </Box>
                <button onClick={() => setOpenAddPickupAddress(false)} className='py-2 px-8 text-shop_main hover:bg-[#0000000b] bg-white rounded-sm'>Cancel</button>
                <button onClick={handleSavePickupAdrs} className='py-2 px-8 bg-shop_main hover:bg-sky-500 text-white rounded-sm'>Save</button>
              </div>
            </div>
          </div >
        }

      </div >
    </>
  )
}

SellerForm.propTypes = {

}

export default SellerForm
