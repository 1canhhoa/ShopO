import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import ProductDetailCard from '~/components/ProductDetailCard'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { PiHeartThin, PiHeartFill, PiEyeLight, PiShoppingCartLight } from 'react-icons/pi'
import { HandleRating } from '~/static/functions';
function ProductCard({ data }) {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)
  const d = data.name
  const product_name = d.replace(/\s+/g, "-")
  const stars = HandleRating(data.rating, AiFillStar, AiOutlineStar)
  return (
    // border-[1px] border-white hover:-translate-y-1 hover:border-shop_main
    <>
      <li className=' th-animation-hover w-full hover:-translate-y-4 md:hover:-translate-y-1 relative flex box-border flex-col justify-center items-center shadow-2xl group hover:border-shop_main border-[1px] border-white'>
        <div className='bg-white w-full hover:z-0'>
          {/* image product */}
          <Link to={`/product/${product_name}`} className=''>
            <img src={data.image_Url[0].url} alt="" className='px-4 h-[190px] object-contain mx-auto' />
          </Link>
          {/* imfomation product */}
          <div className=' flex flex-col px-2 pt-2 pb-2 justify-start items-start'>
            <a href='https://www.apple.com/vn/store' className='text-xs font-light mb-1 text-shop_main' >{data.shop.name}</a>
            <Link to={`/product/${product_name}`} className='text-sm font-normal' >
              {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
            </Link>
            <div className='flex justify-center items-center py-2'>
              {data.price && <div className=' line-through text-gray-400 text-xs '>
                {data.price}$
              </div>}
              {data.price && <div className='text-xs text-gray-400 font-light px-1'>-</div>}
              <div className=' text-red-400 text-sm '>{data.discount_price}$</div>
            </div>
            <div className='flex justify-between items-center text-sm py-2'>
              {stars.map((A, i) => <A color='#facc15' key={i} />)}
              <div className=' ml-2'>
                <span className='text-xs font-normal'>Sold </span>
                <span className='text-[11px] font-normal'>{data.total_sell} </span>
              </div>
            </div>
            <div className='text-xs font-light text-gray-500'>
              {data.city}
            </div>
          </div>
          {/* heart,shop,eye Icon */}
          <div className=' absolute right-1 top-5 '>
            {click && <PiHeartFill color='red' onClick={() => setClick(!click)} size={20} />}
            {!click && <PiHeartThin onClick={() => setClick(!click)} size={20} />}
            {/* <PiEyeFill size={25} /> */}
            <PiEyeLight onClick={() => setOpen(!open)} size={20} className='z-50' />
            <PiShoppingCartLight size={20} />
          </div>
        </div>
        {/* button when you hover into li element */}
        <button className='z-10 w-full font-normal absolute -bottom-[33px] hidden group-hover:block py-2  bg-shop_main text-xs border-shop_main'>Search for similar products</button>
      </li>
      {/* open when click eye icon */}
      {open && <ProductDetailCard click={click} setClick={setClick} setOpen={setOpen} open={open} data={data} />}
    </>
  )
}
ProductCard.propTypes = {
  data: PropTypes.object,
};

export default ProductCard