import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { categoriesData } from '~/static/data';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreateProduct, AcionProductClearState } from '~/Redux/actions/product'
import { ImCancelCircle } from 'react-icons/im'
import LoaderBig from '../LoaderBig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
const capa = ['123', '987', '3733', '11']
const DashBoardCreateProduct = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  const { loadingCp, success, error } = useSelector(state => state.product)
  const { seller } = useSelector(state => state.seller)
  const [images, setImages] = useState([]);
  const [name, setName] = useState("product-1");
  const [description, setDescription] = useState("sdsd");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("sdsd");
  const [originalPrice, setOriginalPrice] = useState('22');
  const [discountPrice, setDiscountPrice] = useState('22');
  const [open, setOpen] = useState(false)
  const [stock, setStock] = useState('22');
  // option
  const [imageOption, setImageOption] = useState()
  const [imageOptions, setImageOptions] = useState([])//
  const [nameOptions, setNameOptions] = useState([])//
  const [nameOption, setNameOption] = useState('')
  // const [capacities, setCapacities] = useState([])

  const [capacitiess, setCapacitiess] = useState([])//
  const [capacities, setCapacities] = useState([])
  const [capacity, setCapacity] = useState('')
  const [priceCapacity, setPriceCapacity] = useState('')

  // 
  const inputRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log('imageOptions', imageOptions);
  console.log('image', images);
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(AcionProductClearState())
    } else if (success === true) {
      toast.success("create product Success")
      // navigate(`/dashboard/overview/${seller.name}`);
      dispatch(AcionProductClearState())
      // window.location.reload(true);
    }
  }, [success, error, dispatch])
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = imageOptions.concat(images)
    console.log(arr);
    const newForm = new FormData()
    arr.forEach(i => newForm.append('images', i))
    // imageOptions[0].forEach(i => newForm.append('imagesOption', i))/
    newForm.append('name', name)
    newForm.append('description', description)
    newForm.append('category', category)
    newForm.append('tags', tags)
    newForm.append('originalPrice', originalPrice)
    newForm.append('discountPrice', discountPrice)
    newForm.append('stock', stock)
    newForm.append('shopId', seller._id)
    newForm.append('nameOptions', JSON.stringify(nameOptions))
    newForm.append('capacities', JSON.stringify(capacitiess))
    dispatch(ActionCreateProduct(newForm))
  }
  const handleImageChange = (e) => {
    e.preventDefault()
    const files = Array.from(e.target.files);
    // nếu chon ảnh lần 2 thì lấy file mới
    setImages([...files])
    // nếu chon ảnh lần 2 thì lấy cả file cũ lẫn mới
    // setImages(prev => [...prev, ...files])
  };
  const handleAddCapacity = () => {
    if (capacity && priceCapacity) {
      console.log('1');
      setCapacities(prev => {
        const arr = { capacity, priceCapacity }
        return (
          [...prev, arr]
        )
      })
      setPriceCapacity('')
      setCapacity('')
      inputRef.current.focus()
    }
  }
  const handleDeleteItemCapacities = (i) => {
    const arr = capacities.filter((c, index) => index !== i)
    setCapacities([...arr])
  }
  const handleSaveOption = () => {
    setOpen(!open)
    setNameOptions([...nameOptions, nameOption])
    setImageOptions([...imageOptions, imageOption])
    setCapacitiess([...capacitiess, capacities])
    setNameOption('')
    setCapacities([])
    setImageOption('')
  }
  const handleUpdateOption = (i) => {
    setOpen(!open)
    setNameOption(nameOptions[i])
    setImageOption(imageOptions[i])
    setCapacities(capacitiess[i])
  }
  const handleOpen = () => {
    setOpen(!open)
    setNameOption('')
    setImageOption('')
    setCapacities([])
  }
  return (
    <>
      {loadingCp && <LoaderBig />}
      <div className='w-full bg-slate-100 flex justify-center items-start p-8 '>
        <div className='transition-all duration-500 ease-linear w-[320px] sm:w-[600px] shadow-md px-4 bg-white'>
          <form onSubmit={handleSubmit}>
            <br />
            {/* NAME */}
            <div>
              <label className="pb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                name="name"
                value={name}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your product name..."
              />
            </div>
            <br />
            {/* Description */}
            <div>
              <label className="pb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                cols="30"
                required
                rows="8"
                type="text"
                name="description"
                value={description}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your product description..."
              ></textarea>
            </div>
            <br />
            {/* Category */}
            <div>
              <label className="pb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="category" id="category"
                className="w-full mt-2 border h-[35px] rounded-[5px]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option label="Please Select" value="">Choose a category</option>
                {categoriesData &&
                  categoriesData.map((i, index) => (
                    <option value={i.title} key={index}>
                      {i.title}
                    </option>
                  ))}
              </select>
            </div>
            <br />
            {/* TAGS */}
            <div>
              <label className="pb-2">Tags</label>
              <input
                required
                type="text"
                name="tags"
                value={tags}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter your product tags..."
              />
            </div>
            <br />
            {/* Original Price */}
            <div>
              <label className="pb-2">Original Price</label>
              <input
                required
                type="number"
                name="originalPrice"
                value={originalPrice}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="Enter your product price..."
              />
            </div>
            <br />
            {/* Price (With Discount) */}
            <div>
              <label className="pb-2">
                Price (With Discount) <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                name="discountPrice"
                value={discountPrice}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="Enter your product price with discount..."
              />
            </div>
            <br />
            {/* Product Stock */}
            <div>
              <label className="pb-2">
                Product Stock <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="number"
                name="stock"
                value={stock}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setStock(e.target.value)}
                placeholder="Enter your product stock..."
              />
            </div>
            <br />
            {/* Optional Ptroduct */}
            <div className='mb-8'>
              <label className="">
                Option <span className="text-red-500">*</span>
              </label>
              <div className='flex mt-4 justify-start items-center'>
                <AiOutlinePlusCircle onClick={handleOpen} size={30} className="" color="#555" />
                <div className='flex justify-start gap-4 ml-4 items-center flex-wrap'>
                  {nameOptions?.map((n, i) => (
                    <div onClick={() => handleUpdateOption(i)} key={i} className='cursor-pointer border-[1px] rounded-md flex justify-center items-center gap-1 border-gray-400 px-2 py-1'>
                      {n}
                    </div>
                  ))}
                </div>
              </div>

            </div>
            {/* Upload Images */}
            <div className=''>
              <label className="pb-4">
                Upload Images <span className="text-red-500">*</span>
              </label>
              <br />
              <input required type="file" name="" id="upload" className="absolute -translate-x-7 opacity-0" multiple onChange={handleImageChange}
              />
              <div className="w-full flex items-center flex-wrap">
                <label htmlFor="upload" className='' required>
                  <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                </label>
                {images &&
                  images.map((m, i) => (
                    <img
                      src={URL.createObjectURL(m)}
                      key={i}
                      alt=""
                      className="h-[60px] w-[60px] rounded-full object-cover m-2"
                    />
                  ))}
              </div>
              <br />
            </div>
            <div>

              <button
                type="submit"
                value="submit"
                className="w-full mx-auto font-semibold px-4 py-2 rounded-md th-fl bg-teal-400 mb-4"
              >
                Create Product
              </button>

            </div>
          </form>
          {open &&
            <div className='fixed th-fl z-[1000] bg-[#bdbdbd] bg-opacity-50  w-full top-0 left-0 h-screen'>
              <div className='bg-white gap-2 absolute flex flex-col items-center justify-center p-4 w-[500px]'>
                <span className=' text-xl text-gray-500 font-semibold'>Create option</span>
                {/* Name */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>name:</label>
                  <input value={nameOption} onChange={(e) => setNameOption(e.target.value)} required placeholder='enter... ' className=' pl-4 h-11 border-[1px] border-gray-300 rounded-sm outline-none' type="text" />
                </div>
                {/* capacity */}
                <div className='w-full  flex flex-col'>
                  <div className='flex'>
                    <label htmlFor="" className='text-gray-500 w-[45%] font-semibold text-sm'>capacity:</label>
                    <label htmlFor="" className='text-gray-500 w-[45%] font-semibold text-sm'>price:</label>
                  </div>
                  <div className='w-full border-[1px] flex justify-start items-center border-gray-300 bg-teal-400 '>
                    <input ref={inputRef} value={capacity} placeholder='enter...' className=' h-11 w-[90%] pl-4 outline-none border-r-[1px] border-gray-300 ' type='text' onChange={(e) => setCapacity(e.target.value)} />
                    <input ref={inputRef} value={priceCapacity} placeholder='enter...' className=' h-11 w-[90%] pl-4 outline-none  ' type='number' onChange={(e) => setPriceCapacity(e.target.value)} />
                    <span onClick={handleAddCapacity} className='text-white cursor-pointer px-2'>Add</span>
                  </div>
                  <div className='flex justify-start gap-4 mt-4 items-center flex-wrap'>
                    {capacities?.map((c, i) => (
                      <div key={i} className='border-[1px] rounded-md flex justify-center items-center gap-1 border-gray-400 pl-2 pr-0.5 py-1'>
                        {c.capacity}({c.priceCapacity})
                        <ImCancelCircle onClick={() => handleDeleteItemCapacities(i)} className='cursor-pointer' color='gray' />
                      </div>
                    ))}
                  </div>
                </div>
                {/* image */}
                <div className='w-full  flex flex-col'>
                  <label htmlFor="" className='text-gray-500 font-semibold text-sm'>image:</label>
                  <input required className='absolute bottom-16 left-7 h-2 w-2 opacity-0' id='image-option' type='file' onChange={(e) => setImageOption(e.target.files[0])} />
                  <div className='flex justify-start items-center'>
                    <label htmlFor="image-option"><AiOutlinePlusCircle size={30} className="mt-3" color="#555" /></label>
                    {imageOption && <img src={URL.createObjectURL(imageOption)} alt="" className="h-[60px] w-[60px] rounded-full object-cover m-2" />}
                  </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                  <div onClick={() => setOpen(!open)} className='cursor-pointer px-4 py-2 bg-teal-500 rounded-sm text-white'>Cancel</div>
                  <button onClick={handleSaveOption} disabled={capacities && nameOption && imageOption ? false : true}
                    className={'px-4 py-2 bg-teal-500 rounded-sm text-white ' + ((capacities.length > 0 && nameOption && imageOption) ? null : 'bg-opacity-60')}>save</button>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </>
  )
}

DashBoardCreateProduct.propTypes = {

}

export default DashBoardCreateProduct
