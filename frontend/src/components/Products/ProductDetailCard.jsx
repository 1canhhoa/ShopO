import { useState, useEffect } from 'react'
import { RxCross1 } from 'react-icons/rx'
import PropTypes, { bool } from 'prop-types';
import { AiFillStar, AiOutlineStar, AiOutlineMessage, AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { PiHeartThin, PiHeartFill } from 'react-icons/pi'
import Ratings from './Ratings';
import { motion } from 'framer-motion'
const ProductDetailCard = ({ setOpen, openabc, data, click, setClick }) => {
  const [count, setCount] = useState(1)
  const [activeClassifyProduct, setActiveClassifyProduct] = useState(-1)
  const handleClassify = (iclick) => {
    activeClassifyProduct === iclick ? setActiveClassifyProduct(-1) : setActiveClassifyProduct(iclick)
  }
  useEffect(() => {
    if (openabc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openabc]);
  const variant = {
    initial: {
      scaleX: 0,
      scaleY: 0
    },
    open: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 0.3,
      }
    },
    closed: {
      scaleX: 0,
      scaleY: 0,
      transition: {
        duration: 0.5,
      }
    }
  }
  const variant1 = {
    initial: {
      scaleX: 0,
      scaleY: 0
    },
    open: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 0,
      }
    },
    closed: {
      scaleX: 0,
      scaleY: 0.,
      transition: {
        duration: 0.5,
      }
    }
  }
  console.log("open", openabc);
  return (
    <motion.div variants={variant1} initial='initial' animate={openabc ? 'open' : 'closed'}
      className={`z-50  flex justify-center items-center top-0 fixed left-0 h-screen w-full ` +
        (openabc ? 'bg-[#00000066]' : '')}>
      <motion.div variants={variant} initial='initial' animate={openabc ? 'open' : 'closed'} className='fixed origin-center h-[80%] w-[70%] bg-white shadow-2xl rounded-2xl'>
        <RxCross1 onClick={() => setOpen(!openabc)} className='absolute z-50 top-5 right-5' />
        <div className=' flex flex-col rounded-tl-2xl rounded-tr-2xl md:flex-row overflow-y-scroll h-full'>
          {/* column 1 */}
          <div className='th-border-test w-full z-40 md:h-full '>
            <img src={`http://localhost:4000/${data.images[0]}`} alt="" className=' 2xl md:h-[65%] w-full th-border-test ' />
            <div className="m-2">
              {/* logo shop */}
              <div className='my-2 flex justify-start items-center'>
                <img src={`http://localhost:4000/${data.shop.avatar}`} className='h-[40px] w-[40px] rounded-full' alt="" />
                <div className='ml-2 text-xs flex flex-col font-light text-shop_main'>
                  <div>{data.shop.name}</div>
                  <div className='text-black'>({5}) ratings</div>
                </div>
              </div>
              {/* stars */}
              <div className='flex my-4'>
                <Ratings rating={4.1} />
                <div className='flex justify-center items-center'>
                  <div className='ml-1 text-xs font-normal'>4.1 rating for this froduct</div>
                </div>
              </div>
              {/* button & sold out */}
              <button className='flex justify-center items-center bg-black text-white text-sm px-4 py-2 rounded-md'>
                <span>Send Message</span>
                <AiOutlineMessage size={20} className='pl-1 pt-[1px]' />
              </button>
              <div className='pt-6 text-xs text-red-500 font-normal'>({data.sold_out}) Sold out</div>
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
                {data.originalPrice && <div className=' line-through text-gray-400 text-sm '>
                  {data.originalPrice}$
                </div>}
                {data.originalPrice && <div className='text-xs text-gray-400 font-light px-1'>-</div>}
                <div className=' text-red-400 text-base '>{data.discountPrice}$</div>
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
              {/* Classify(các loại của 1 sp) */}
              <div className='Classify mb-4'>
                <ul className='flex-wrap flex h-16 overflow-scroll'>
                  {data.capacities.map((c, i) =>
                    <li onClick={() => handleClassify(i)} to={`/${i}`} key={i}
                      className={"px-2 py-2 mr-2 mb-2 h-min border-[1px] border-[#efefef] text-sm font-medium "
                        + (activeClassifyProduct === i ? "bg-teal-400 text-white" : null)}
                    >{c.name}</li>
                  )}
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
      </motion.div>
    </motion.div>
  )
}
ProductDetailCard.propTypes = {
  data: PropTypes.object,
  // open: PropTypes.bool,
  // setOpen: bool,
  // click: PropTypes.bool,
  // setClick: bool,
};
export default ProductDetailCard
