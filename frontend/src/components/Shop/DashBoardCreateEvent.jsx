import React, { useEffect } from 'react'
import PropTypes, { number } from 'prop-types'
import { useState } from 'react';
import { categoriesData } from '~/static/data';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { ActionEventClearState } from '~/Redux/actions/event'
import LoaderBig from '../LoaderBig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { ActionCreateEvent } from '~/Redux/actions/event';
const DashBoardCreateEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { loadingCp, success, product, error } = useSelector(state => state.event)
  const { seller } = useSelector(state => state.seller)
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("sdsd");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("sdsd");
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [stock, setStock] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch()

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    console.log(startDate);
    // 3ngày sau
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    console.log(minEndDate);
    setStartDate(startDate);
    setEndDate(null);
    document.getElementById("end-date").min = minEndDate.toISOString.slice(0, 10);
  };

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
  };
  // "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)" -----> 2011-10-05
  const today = new Date().toISOString().slice(0, 10);

  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10) : "";


  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(ActionEventClearState())
    } else if (success === true) {
      toast.success("create event Success")
      // navigate(`/dashboard/overview/${seller.name}`);
      dispatch(ActionEventClearState())
      // window.location.reload(true);
    }
  }, [success, error, dispatch])
  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData()
    images.forEach(i => newForm.append('images', i))
    newForm.append('name', name)
    newForm.append('description', description)
    newForm.append('category', category)
    newForm.append('tags', tags)
    newForm.append('originalPrice', originalPrice)
    newForm.append('discountPrice', discountPrice)
    newForm.append('stock', stock)
    newForm.append('shopId', seller._id)
    newForm.append('start_date', startDate)
    newForm.append('end_date', endDate)
    dispatch(ActionCreateEvent(newForm))
  }
  const handleImageChange = (e) => {
    e.preventDefault()
    const files = Array.from(e.target.files);
    setImages([...files])
  };
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
            {/* Start Date */}
            <div>
              <label className="pb-2">
                Event Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="price"
                id="start-date"
                required
                value={startDate ? startDate.toISOString().slice(0, 10) : ""}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleStartDateChange}
                min={today}
                placeholder="Enter your event product stock..."
              />
            </div>
            <br />
            {/* End date */}
            <div>
              <label className="pb-2">
                Event End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="price"
                id="end-date"
                required
                value={endDate ? endDate.toISOString().slice(0, 10) : ""}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleEndDateChange}
                min={minEndDate}
                placeholder="Enter your event product stock..."
              />
            </div>
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
            {/* Upload Images */}
            <div className=''>
              <label className="pb-2">
                Upload Images <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                required
                type="file"
                name=""
                id="upload"
                className="absolute -translate-x-7 opacity-0"
                multiple
                onChange={handleImageChange}
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
                Create Event
              </button>

            </div>
          </form>

        </div>
      </div>
    </>
  )
}

DashBoardCreateEvent.propTypes = {

}

export default DashBoardCreateEvent

