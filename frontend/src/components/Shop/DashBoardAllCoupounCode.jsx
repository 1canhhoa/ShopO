import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { AiOutlineDelete, AiOutlineEye, AiOutlinePlus } from 'react-icons/ai'
import LoaderBig from '../LoaderBig'
import { DataGrid } from '@mui/x-data-grid'
import { ActionDeleteEvent, ActionGetAllEventByShopId } from '~/Redux/actions/event'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { toast } from 'react-toastify'
const DashBoardAllCoupounCode = () => {
  window.scrollTo(0, 0)
  const [open, setOpen] = useState(false)
  const [coupouns, setCoupouns] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [name, setName] = useState('tohien')
  const [discountPercent, setDiscountPercent] = useState('22')
  const [minAmount, setMinAmount] = useState('22')
  const [maxAmount, setMaxAmount] = useState('22')
  const { isLoading, events, message } = useSelector((state) => state.event);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.product);
  console.log('products', products);
  console.log('events', events);
  console.log('message', message);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    axios.delete(`/api/v1/delete-coupoun/${id}`).then(() => {
      toast.success("delete coupoun successfully")
      setTimeout(() => {
        window.location.reload(true)
      }, 1000);
    }).catch((error) => {
      toast.error(error.response.data.message)
    })
  };
  useEffect(() => {
    axios.get(`/api/v1/get-all-coupoun/${seller._id}`).then((res) => {
      setCoupouns(res.data)
      // window.location.reload(true)
    }).catch((error) => {
      toast.error(error.response.data)
    })
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('/api/v1/create-coupoun', {
        name, minAmount, maxAmount, discountPercent, shopId: seller._id,
      }, { withCredentials: true })
      setOpen(!open)
      toast.success('create coupoun success')
      setTimeout(() => {
        window.location.reload(true)
      }, 1000)
    } catch (error) {
      toast.error(error.response.data)
    }


  }

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "discountPercent",
      headerName: "discount percent",
      type: "number",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "minAmount",
      headerName: "min amount",
      type: "number",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "maxAmount",
      headerName: "max amount",
      type: "number",
      minWidth: 100,
      flex: 1.4,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "Preview",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "Delete",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  coupouns?.forEach((item) => {
    row.push({
      id: item._id,
      name: item.name,
      discountPercent: "US$ " + item.discountPercent,
      minAmount: item.minAmount,
      maxAmount: item.maxAmount,
    });
  });

  return (
    <>
      {isLoading ? (
        <LoaderBig />
      ) : (

        <div className="w-full mx-8 pt-1 mt-10  bg-white">
          <div className='w-full flex justify-end mb-2'>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={() => setOpen(!open)} className='bg-black hover:bg-[#282c2c] text-white'>
                <AiOutlinePlus />
                <span className='ml-2 font-semibold'>Create Coupoun</span></Button>
            </Stack>
          </div>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
          {open &&
            <div className='fixed th-fl z-[1000] bg-[#bdbdbd] bg-opacity-50  w-full top-0 left-0 h-screen'>
              <form onSubmit={handleSubmit} className='bg-white gap-2 absolute flex flex-col items-center justify-center p-4 w-[500px]'>
                <span className=' text-xl text-gray-500 font-semibold'>Create coupoun code</span>
                {/* Name */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>name:</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder='enter... ' className=' pl-4 h-11 border-[1px] border-gray-300 rounded-sm outline-none' type="text" />
                </div>
                {/* Discount Percentenge */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>Discount Percentenge:</label>
                  <input value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} required placeholder='enter... ' className=' pl-4 h-11 border-[1px] border-gray-300 rounded-sm outline-none' type="number" />
                </div>
                {/* Min Amount */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>Min Amount:</label>
                  <input value={minAmount} onChange={(e) => setMinAmount(e.target.value)} required placeholder='enter... ' className=' pl-4 h-11 border-[1px] border-gray-300 rounded-sm outline-none' type="number" />
                </div>
                {/* Max Amount */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>Max Amount:</label>
                  <input value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} required placeholder='enter... ' className=' pl-4 h-11 border-[1px] border-gray-300 rounded-sm outline-none' type="number" />
                </div>
                {/* Selected Product */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>Selected Product:</label>
                  <select required className='outline-none py-2 px-4 border-[1px] border-gray-300'
                    value={selectedProducts}
                    onChange={(e) => setSelectedProducts(e.target.value)}
                  >
                    <option value="">please choose one</option>
                    {products?.map((p, i) => (
                      <option className='z-50' value={p?.name} key={i} >{p?.name}</option>
                    ))}
                  </select>
                </div>
                <div className='flex w-full gap-4'>
                  <span onClick={() => setOpen(!open)} className='px-12 py-2 bg-shop_main  text-whit rounded-sm text-white '> Cancel</span>
                  <button className='cursor-pointer px-12 py-2 bg-shop_main  text-whit rounded-sm text-white '> Create</button>
                </div>
              </form>
            </div>}
        </div >
      )}
    </>
  )
}

DashBoardAllCoupounCode.propTypes = {

}

export default DashBoardAllCoupounCode
