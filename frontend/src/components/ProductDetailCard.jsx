import { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import PropTypes, { bool } from 'prop-types';
import { HandleRating } from '~/static/functions';
import { AiFillStar, AiOutlineStar, AiOutlineMessage, AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { PiHeartThin, PiHeartFill } from 'react-icons/pi'

const ProductDetailCard = ({ setOpen, open, data, click, setClick }) => {
  const [count, setCount] = useState(1)

  const stars = HandleRating(data.rating, AiFillStar, AiOutlineStar)

  return (
    <div className='z-50 fixed w-full h-screen top-0 left-0 flex justify-center items-center'>
      <div className='relative block h-[80vh] w-[70%] bg-white shadow-2xl rounded-2xl'>
        <RxCross1 onClick={() => setOpen(!open)} className='absolute th z-50 top-0 right-0' />
        <div className=' flex flex-col md:flex-row overflow-y-scroll h-full'>
          {/* column 1 */}
          <div className='th-border-test w-full md:h-full'>
            <img src={data.image_Url[0].url} alt="" className='rounded-tl-2xl rounded-tr-2xl 2xl md:h-[65%] w-full th-border-test ' />
            <div className="m-2">
              {/* logo shop */}
              <div className='my-2 flex justify-start items-center'>
                <img src={data.shop.shop_avatar.url} className='h-[40px] w-[40px] rounded-full' alt="" />
                <div className='ml-2 text-xs flex flex-col font-light text-shop_main'>
                  <div>{data.shop.name}</div>
                  <div className='text-black'>({data.shop.ratings}) ratings</div>
                </div>
              </div>
              {/* stars */}
              <div className='flex my-4'>
                {stars.map((S, i) => <S key={i} size={20} color="#facc15" />)}
                <div className='flex justify-center items-center'>
                  <div className='ml-1 text-xs font-normal'>({data.rating}) rating for this froduct</div>
                </div>
              </div>
              {/* button & sold out */}
              <button className='flex justify-center items-center bg-black text-white text-sm px-4 py-2 rounded-md'>
                <span>Send Message</span>
                <AiOutlineMessage size={20} className='pl-1 pt-[1px]' />
              </button>
              <div className='pt-6 text-xs text-red-500 font-normal'>({data.total_sell}) Sold out</div>
            </div>
          </div>
          {/* column 2 */}
          <div className='th-border-test w-full md:overflow-y-scroll'>
            <div className=' w-[90%] mx-auto th-border-test mt-4 '>
              {/* title product */}
              <div className='title text-base font-medium '> {data.name} </div>
              {/* decriptions product */}
              <div className='text-sm mt-2 font-normal'>
                {data.description}
              </div>
              {/* price */}
              <div className='flex justify-start items-center py-2'>
                {data.price && <div className=' line-through text-gray-400 text-sm '>
                  {data.price}$
                </div>}
                {data.price && <div className='text-xs text-gray-400 font-light px-1'>-</div>}
                <div className=' text-red-400 text-base '>{data.discount_price}$</div>
              </div>
              {/* amount */}
              <div className='flex justify-between items-center pr-4'>
                <div className='w-min justify-between flex  my-8 rounded-sm'>
                  <button onClick={() => setCount(count - 1)} className='w-10 py-1 px-2 text-base bg-teal-400 rounded-tl-sm rounded-bl-sm flex items-center justify-center'><AiOutlineMinus /></button>
                  <span className='w-10 min-w-[40px] py-1 px-3 text-base bg-gray-200 flex items-center justify-center'>{count}</span>
                  <button onClick={() => setCount(count + 1)} className='basis-1/3 py-1 px-2 text-base bg-teal-400 flex items-center justify-center'><AiOutlinePlus /></button>
                </div>
                {click && <PiHeartFill color='red' onClick={() => setClick(!click)} size={25} />}
                {!click && <PiHeartThin onClick={() => setClick(!click)} size={25} />}
              </div>
              <div className='Classify mb-4'>
                <ul className='flex-wrap flex h-16 overflow-scroll'>
                  {data.Classify.map((c, i) => {
                    const cssNormal1 = 'px-2 py-2 mr-2 mb-2 h-min border-[1px] border-[#efefef] text-sm font-medium'
                    const cssActive1 = 'bg-stone-600 text-while px-2 py-2 mr-2 mb-2 h-min border-[1px] border-[#efefef] text-sm font-medium'
                    return (
                      // <li to={`/${i}`} key={i} className={({ isActive }) => (isActive ? cssActive1 : cssNormal1)} >{c}</li>)
                      <li key={i} className=' px-2 py-2 mr-2 mb-2 h-min border-[1px] border-[#efefef] text-sm font-medium' >{c}</li>)
                  }

                  )
                  }
                </ul>
              </div>
              {/* Add to card */}
              <button className='mb-4 flex justify-center items-center bg-black text-white text-sm px-4 py-2 rounded-md'>
                <span>Add to card</span>
                <AiOutlineShoppingCart size={20} className='pl-1 pt-[1px]' />
              </button>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
ProductDetailCard.propTypes = {
  data: PropTypes.object,
  open: PropTypes.bool,
  setOpen: bool,
  click: PropTypes.bool,
  setClick: bool,
};
export default ProductDetailCard
