import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BsShieldCheck } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  cyan,
  deepOrange,
  deepPurple,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";
const Payment = props => {
  const [openAddNewCard, setOpenAddNewCard] = useState(false)
  const [openAddUserInfo, setOpenAddUserInfo] = useState(false)
  const [openAddNewBank, setOpenAddNewBank] = useState(false)
  return (
    <div className='w-full h-full  '>
      {/* Add new card */}
      <div className='flex flex-col'>
        <div className='py-4 border-b-[1px] border-gray-300 flex justify-between items-center'>
          <div className='text-lg font-semibold'>Credit / Debit Card</div>
          <button onClick={() => setOpenAddNewCard(true)} className='flex rounded-sm px-4 py-2 bg-red-500  justify-center items-center'>
            <BiPlus color='white' size={25} />
            <span className='text-white font-light'>Add New Card</span>
          </button>
        </div>
        <div className="text-lg text-center text-gray-400 p-32">
          You dont have cards yet.
        </div>
      </div>
      {/* My Bank Accounts */}
      <div className='flex flex-col'>
        <div className='py-4 border-b-[1px] border-gray-300 flex justify-between items-center'>
          <div className='text-lg font-semibold'>My Bank Accounts</div>
          <button onClick={() => setOpenAddUserInfo(true)} className='flex rounded-sm px-4 py-2 bg-red-500  justify-center items-center'>
            <BiPlus color='white' size={25} />
            <span className='text-white font-light'>Add New Bank Account</span>
          </button>
        </div>
        <div className="flex py-4 justify-between items-center">
          {/* left */}
          <div className='flex w-[60%] justify-between items-center '>
            <div className='th-fl gap-2'>
              <img className='w-[60px] h-[60px]' src='https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-MB-Bank-MBB.png' alt="" />
              <div className='flex gap-1 flex-col justify-center items-start'>
                <div className='flex gap-2 justify-center items-center'>
                  <span>MB - NHTMCP QUAN DOI</span>
                  <span className='text-sm text-gray-500'>Checked</span>
                  <span className='px-2 py-0.5 text-xs rounded-md bg-teal-400 text-white'>Default</span>
                </div>
                <span className='text-sm'>Full Name:NHAM VAN HIEN</span>
                <span className='text-sm'>Branch: Ha noi/ Chi nhanh khac (MB)</span>
              </div>
            </div>
            <div>sotaikhoan</div>
          </div>
          {/* right */}
          <div className='flex justify-end items-center gap-12 w-[40%]'>
            <button className='underline text-sm text-blue-600'>Delete</button>
            <button className=''>Set Default</button>
          </div>
        </div>
      </div>
      {/* open Add new card */}
      {openAddNewCard && <div className='th-fl z-50 h-screen w-full fixed top-0 right-0 bg-[#dbdbdb] bg-opacity-50'>
        <div className='w-[500px] h-[90%] shadow-md absolute overflow-y-auto bg-white p-4'>
          <div className='text-lg font-semibold text-start py-4'>Add Card</div>
          <form action="" className='overflow-auto'>
            <div className='flex justify-start items-start bg-sky-100 p-2 border-[1px] border-sky-400 gap-2 '>
              <BsShieldCheck className='pb-4' size={45} color='#38bdf8' />
              <div className='flex flex-col'>
                <span className='text-sm '>Your card details are protected.</span>
                <span className='text-xs text-gray-500'>We partner with CyberSource, a VISA company to ensure that your card details are kept safe and secure. Shopee will not have access to your card info.</span>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-md font-semibold text-gray-500'>Card Details</span>
              <div className='flex items-center gap-4 py-4 justify-end'>
                <img className='w-[28px] h-[28px]' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/9f6f1831fb61c65952c4cdb1189d7cb8.png' alt="" />
                <img className='w-[24px] h-[24px]' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/dbce829e363223fdf7e24a5a589f4372.png' alt="" />
              </div>
            </div>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Card Number" variant="outlined" />
            </Box>
            <div className='flex mx-auto gap-4 justify-between w-[95%] items-center'>
              <Box component="form" sx={{ width: '75%' }} noValidate autoComplete="off">
                <TextField sx={{ width: '100%' }} size='medium' id="outlined-basic" label="Expiry Date" variant="outlined" />
              </Box>
              <Box component="form" sx={{ width: '25%', paddingY: '20px' }} noValidate autoComplete="off">
                <TextField sx={{ width: '100%' }} size='medium' id="outlined-basic" label="CVV" variant="outlined" />
              </Box>
            </div>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Name on card" variant="outlined" />
            </Box>
            <div className='flex justify-between py-2 items-center'>
              <span className='text-md font-semibold text-gray-500'>Billing Address</span>
            </div>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Address" variant="outlined" />
            </Box>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', paddingY: '20px', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Postal code" variant="outlined" />
            </Box>
            {/* <Stack spacing={2} sx={} direction="row"> */}
            <div className='flex justify-end w-[95%] mx-auto items-center'>
              <Button onClick={() => setOpenAddNewCard(false)} sx={{ paddingX: 10, paddingY: 1, color: (theme) => theme._white }} variant="text">Cancel</Button>
              <Button className='bg-shop_main' sx={{
                paddingX: 10, paddingY: 1,
                bgcolor: (theme) => theme._white,
                "&:hover": { backgroundColor: (theme) => theme._sky_500 },
              }} variant="contained">Submit</Button>
            </div>
            {/* </Stack> */}
          </form>
        </div>
      </div>}
      {openAddUserInfo && <div className='th-fl z-50 h-screen w-full fixed top-0 right-0 bg-[#dbdbdb] bg-opacity-50'>
        <div className='w-[500px] shadow-md absolute overflow-y-auto bg-white p-4'>
          <form action="" className='overflow-auto'>
            <div className='flex justify-between py-2 items-center'>
              <span className='text-md font-semibold text-gray-500'>User Information</span>
            </div>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Address" variant="outlined" />
            </Box>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', paddingY: '20px', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Postal code" variant="outlined" />
            </Box>
            <div className='flex justify-end w-[95%] mx-auto items-center'>
              <Button
                onClick={() => setOpenAddUserInfo(false)}
                sx={{ paddingX: 10, paddingY: 1, color: (theme) => theme._white }} variant="text">Cancel</Button>
              <Button
                className='bg-shop_main'
                onClick={() => setOpenAddNewBank(true)}
                sx={{
                  paddingX: 10, paddingY: 1,
                  bgcolor: (theme) => theme._white,
                  "&:hover": { backgroundColor: (theme) => theme._sky_500 },
                }} variant="contained">Submit</Button>
            </div>
          </form>
        </div>
      </div>}
      {openAddNewBank && <div className='th-fl z-50 h-screen w-full fixed top-0 right-0 bg-[#dbdbdb] bg-opacity-50'>
        <div className='w-[500px] shadow-md absolute overflow-y-auto bg-white p-4'>
          <form action="" className='overflow-auto'>
            <div className='flex justify-between py-2 items-center'>
              <span className='text-md font-semibold text-gray-500'>Add Bank Account</span>
            </div>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Address" variant="outlined" />
            </Box>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', paddingTop: '20px', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Postal code" variant="outlined" />
            </Box>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', paddingTop: '20px', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Postal code" variant="outlined" />
            </Box>
            <Box component="form" sx={{ justifyContent: 'center', display: 'flex', paddingTop: '20px', alignItems: 'center' }} noValidate autoComplete="off" >
              <TextField size='medium' sx={{ width: '95%' }} id="outlined-basic" label="Postal code" variant="outlined" />
            </Box>
            <div className='flex justify-end w-[95%] pt-5 mx-auto items-center'>
              <Button onClick={() => { setOpenAddNewBank(false); setOpenAddUserInfo(false) }} sx={{ paddingX: 10, paddingY: 1, color: (theme) => theme._white }} variant="text">Cancel</Button>
              <Button
                onClick={() => setOpenAddNewBank(true)}
                sx={{
                  paddingX: 10, paddingY: 1,
                  bgcolor: (theme) => theme._white,
                  "&:hover": { backgroundColor: (theme) => theme._sky_500 },
                }} variant="contained">Submit</Button>
            </div>
          </form>
        </div>
      </div>}
    </div >
  )
}

Payment.propTypes = {

}

export default Payment
