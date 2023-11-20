import { useEffect, useState } from 'react'
// import { productData } from '~/static/data'
import { GoTriangleDown } from 'react-icons/go'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { server } from '~/contants/contant'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy
import { BsTicketPerforated, BsCoin, BsQuestionOctagon } from 'react-icons/bs'
const fakechoose = { class: 0, capa: 1, quanti: 5, productId: '65264e02a535c6ce2729918a' }
const Cart = () => {
  const [saveCount, setSaveCount] = useState({})
  const [visible, setVisible] = useState(false)
  const [activeClassify, setAvtiveClassify] = useState(-1)
  const [activeCapacity, setActiveCapacity] = useState(-1)
  const [activeClickVariations, setActiveClickVariations] = useState(-1)
  const [fixed, setFixed] = useState(true);
  const [data, setData] = useState([]);
  const [arrCapacitySingleOption, setArrCapacitySingleOption] = useState([])

  const { products } = useSelector(state => state.product)
  const { carts } = useSelector(state => state.cart)
  const productData = carts
  useEffect(() => {
    console.log('here');
    setAvtiveClassify(fakechoose.class)
    setActiveCapacity(fakechoose.capa)
    const p = carts?.find((c) => c._id === fakechoose.productId)
    const capacitiySingleOption = p?.capacities[fakechoose.class]?.capacity.map(a => a.capacity)
    console.log('capacitiySingleOption', capacitiySingleOption);
    setArrCapacitySingleOption(capacitiySingleOption)
  }, [])
  const handleActiveClassify = (tab, p) => {
    const capacitiySingleOption = p?.capacities[tab]?.capacity.map(a => a.capacity)
    setArrCapacitySingleOption(capacitiySingleOption)
    setActiveCapacity('')
    activeClassify === tab ? '' : setAvtiveClassify(tab)
  }
  const handleActiveCapacity = (tab) => {
    activeCapacity === tab ? '' : setActiveCapacity(tab)
  }
  const handleActiveClickVariations = async (tab) => {
    activeClickVariations === tab ? (setActiveClickVariations(-1), setVisible(false)) : (setActiveClickVariations(tab), setVisible(true))
  }
  const handleActiveClickVariCancel = async (tab) => {
    setVisible(false)
    activeClickVariations === tab ? setActiveClickVariations(-1) : setActiveClickVariations(tab)
  }
  //246:là phần header ko thay đổi 
  //AllShoppingCart * (275 + 32):số card và gap
  // 598 tự thêm
  // (window.screen.height - 123) : chiều cao trình duyệt cố định
  // window.innerHeight :chiều cao trình duyệt hiện tại
  const AllShoppingCart = carts?.slice(0, 5).length
  const heightScroll = 246 + AllShoppingCart * (275 + 32) - 616 + (window.screen.height - 123) - window.innerHeight //1151
  window.addEventListener("scroll", () => {
    window.scrollY < heightScroll ? setFixed(true) : setFixed(false)
  });
  const handleDecreaseQuantity = (i) => {
    if (saveCount[i] > 1) {
      saveCount[i] = saveCount[i] || saveCount[i] === 0 ? saveCount[i] - 1 : 0
      setSaveCount({ ...saveCount })
    }
  }
  const handleIncreaseQuantity = (i) => {//5
    saveCount[i] = saveCount[i] || saveCount[i] === 0 ? saveCount[i] + 1 : 2
    setSaveCount({ ...saveCount })
  }

  // [1,2,1,3,1,3,1,1]
  useEffect(() => {
    const valueUnique = []
    const arrangeItemCart = carts?.map((a, i) => {
      if (!valueUnique.includes(a.shopId)) {
        valueUnique[i] = a.shopId
        return carts?.filter(b => b.shopId === a.shopId)
      }
    }).filter(c => c !== undefined)
    // valueUnique sẽ có dạng như này: [[1{4}{5}],[2{6}],[3{7}]], mảng 1,2,3 là từng shop, 4,5,6,7 là product
    setData(arrangeItemCart)
  }, [carts])
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([])
  const handleClickChecked = (e, d) => {
    console.log(d.length - isCheck.length);
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (checked) {
      if ((!isCheck.includes(id)) && (d.length - isCheck.length === 1)) {
        setIsCheckAll(true)
      }
    }
    if (!checked) {
      setIsCheckAll(false)
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };
  const handleClickCheckedAll = (e, d) => {
    setIsCheckAll(!isCheckAll);
    console.log('d', typeof d);
    setIsCheck(d.map(m => m._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleConfirmCapacities = () => {

  }

  const handleCapacity = (p) => {
    const save = []
    const x = p?.capacities?.map((a) => {
      return a.capacity.map(b => b.capacity)
    })
    // nối 3 mảng thành 1 mảng vd: [[1,2],[2,4],[4,6]] ==> [1,2,2,4,4,6]
    const rs = save.concat.apply([], x)
    // lấy phần tử unique
    const uniqueElements = [...new Set(rs)]
    // setArrCapacity(uniqueElements)
    return uniqueElements
  }

  return (
    <div className=' bg-slate-100 pt-4'>
      <div className='w-[1216px] bg-slate-100 relative th-fl mx-auto '>
        <div className=' flex w-[1216px] items-center justify-center mx-auto flex-col gap-8 '>
          {/* CART PRODUCT 1 */}
          <div className='w-[1216px] shadow-sm text-center font-normal text-sm text-gray-500 th-fl h-[50px] bg-white'>
            <div className='h-full  w-[46%] flex justify-start pl-8 items-center'>
              <input type='checkbox' />
              <span className='pl-2 text-black'>Products</span>
            </div>
            <div className='th-fl w-[54%]'>
              <div className='w-[25%]'>Unit price</div>
              <div className='w-[25%]'>Quantity</div>
              <div className='w-[25%]'>Total Price</div>
              <div className='w-[25%]'>Actions</div>
            </div>
          </div>
          {/* CART PRODUCT 2 */}
          {data?.map((d, i) => {
            return (
              <div key={i} className='min-w-[1216px] shadow-sm bg-white'>
                <div className='w-full overflow-auto '>
                  {/* Name shop */}
                  <div className=' h-[60px] w-full border-b-[1px] border-gray-400 flex justify-start items-center pl-8'>
                    <input type='checkbox' checked={isCheckAll} onChange={(e) => handleClickCheckedAll(e, d)} id='select-all' />
                    <span className='pl-2 text-sm font-medium'>{d[0].shop.name}</span>
                  </div>
                  {d.map((p, i) => {
                    // p là product
                    const arrUniqueCapacities = handleCapacity(p)
                    return (
                      <div key={i}>
                        {/* Products */}
                        <div className='h-[136px] text-sm font-normal flex  items-center border-b-[1px] border-gray-400 w-full'>
                          {/* Products Left */}
                          <div className=' pl-8 th-fl gap-2 w-[46%]'>
                            {/* checkbox */}
                            <input onChange={(e) => handleClickChecked(e, d)} checked={isCheck.includes(p._id)} id={p._id} type='checkbox' />
                            {/* Image */}
                            <a className='w-[25%]  th-fl'><img src={`${server}/${p.capacities[1].url}`} className='w-20 h-20 object-cover th-bdimg' alt="" /></a>
                            {/* Name */}
                            <div className="w-[75%] flex gap-1 flex-col justify-start items-start text-sm font-normal">
                              <span>{p?.name?.length > 80 ? p?.name.slice(0, 50) + ' ...' : p?.name}</span>
                              <img className='w-40 h-4' src="https://down-vn.img.susercontent.com/file/vn-50009109-44fbba933d2aa2175d39ca2ebc09c441" alt="" />
                              <div className='th-fl'>
                                <img className='h-4 w-4' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/91167e001db60b62d4f85c3e0ea919b6.png" alt="" />
                                <span className='ml-1 text-sm font-normal'>7 Days Return</span>
                              </div>
                            </div>
                            {/* Variations-1 */}
                            {activeClickVariations === p._id && <Tippy
                              interactive
                              visible={visible}
                              animation={'perspective'}
                              theme='light-border'
                              delay={[2000, 2000]}
                              // duration={[2000, 2000]}
                              offset={[0, 15]}
                              placement='bottom-end'
                              content={
                                <div className='p-4 gap-2 flex flex-col max-w-[300px] w-max'>
                                  {/* Colors */}
                                  <div className='gap-2 flex flex-wrap'>
                                    <span className='text-base text-gray-600'>colors: </span>
                                    {p?.capacities?.map((p1, i) => {
                                      return (
                                        <button key={i} onClick={() => { handleActiveClassify(i, p) }}
                                          className={' px-4 py-2 th-bd ' + (activeClassify === i ? "bg-teal-400 text-black" : null)}>{p1?.name}</button>
                                      )
                                    })}
                                  </div>
                                  {/* Capacities */}
                                  <div className='gap-2 flex flex-wrap'>
                                    {arrUniqueCapacities?.length > 0 && <span className='text-base text-gray-600'>capacities: </span>}
                                    {arrUniqueCapacities?.map((p1, i) => {
                                      return (
                                        <button disabled={!arrCapacitySingleOption?.includes(p1) ? true : false} key={i} onClick={() => handleActiveCapacity(i)}
                                          className={' px-4 py-2 border-[1px] border-black ' + (!arrCapacitySingleOption?.includes(p1) ? "text-gray-300 border-gray-300 " : '  ') + (activeCapacity === i ? "bg-teal-400 text-black" : null)}>{p1}</button>
                                      )
                                    })}
                                  </div>
                                  <div className='flex justify-end text-sm'>
                                    <button onClick={() => { handleActiveClickVariCancel(p._id) }}
                                      className='uppercase hover:bg-gray-100 py-2 px-6'>Cancel</button>
                                    <button onClick={handleConfirmCapacities} className='uppercase hover:opacity-90 bg-red-500 text-white py-2 px-6'>Confirm</button>
                                  </div>
                                </div>
                              }
                            >
                              {/* button inside tippy */}
                              <button onClick={() => {
                                handleActiveClickVariations(p._id)
                              }}
                                className={'w-min mr-8 flextext-sm text-gray-500 font-normal flex-col justify-center items-start ' + (activeClickVariations === p._id ? 'text-red-600' : null)}>
                                <div className='th-fl'>
                                  <span className="Variations">Variations</span>
                                  <GoTriangleDown />
                                </div>
                                <span className='text-red-600'>{p?.capacities[activeClassify]?.name},{arrUniqueCapacities[activeCapacity]}</span>
                              </button>
                            </Tippy>}
                            {/* button outside tippy */}
                            {activeClickVariations !== p._id && <button onClick={() => {
                              handleActiveClickVariations(p._id)
                            }}
                              className={'w-min mr-8 flextext-sm text-gray-500 font-normal flex-col justify-center items-start ' + (activeClickVariations === p._id ? 'text-red-600' : null)}>
                              <div className='th-fl'>
                                <span className="Variations">Variations</span>
                                <GoTriangleDown />
                              </div>
                              {p._id === fakechoose.productId && <span className='text-red-600'>{p?.capacities[activeClassify]?.name},{arrUniqueCapacities[activeCapacity]}</span>}
                            </button>}
                          </div>
                          {/* Products Right */}
                          <div className='flex w-[54%] justify-center items-center'>
                            {/* Unit price */}
                            <div className='w-[25%] th-fl'>
                              <span className=' text-gray-400 line-through pr-2'>{p.originalPrice}$</span>
                              <span className=''>{p.discountPrice}$</span>
                            </div>
                            {/* Quantity */}
                            <div className='w-[25%] th-fl'>
                              <div className='w-max justify-between flex  my-8 rounded-sm'>
                                <button onClick={() => handleDecreaseQuantity(p._id)} className='w-10 py-1 px-2 text-base bg-teal-400 rounded-tl-sm rounded-bl-sm flex items-center justify-center'><AiOutlineMinus /></button>
                                <span className='w-10 min-w-[40px] py-1 px-3 text-base bg-gray-200 flex items-center justify-center'>{saveCount[p._id] || saveCount[p._id] === 0 ? saveCount[p._id] : 1}</span>
                                <button onClick={() => handleIncreaseQuantity(p._id)} className='basis-1/3 py-1 px-2 text-base bg-teal-400 flex items-center justify-center'><AiOutlinePlus /></button>
                              </div>
                            </div>
                            {/* Total price */}
                            <div className="w-[25%] text-center text-red-600">{saveCount[i] ? p.discountPrice * saveCount[i] : p.discountPrice}$</div>
                            {/* Delete & Find similar */}
                            <div className='w-[25%] text-sm font-normal flex flex-col'>
                              <button>Delete</button>
                              <button className='text-red-600 th-fl'>
                                <span>Find Similar</span>
                                <GoTriangleDown />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>)
                  })}
                  {/* SaleOff & FreeShip */}
                  <div className='h-[79px] flex justify-start items-center pl-8'>
                    <BsTicketPerforated size={20} color='#dc2626' />
                    <span className='text-sm font-light pl-4'>Up to ₫5k off voucher available</span>
                    <button className='text-sm font-light pl-8 text-blue-500'>More voucher</button>
                  </div>
                </div>
              </div>
            )
          })}
          {/* CART PRODUCT 2 PlatForm Voucher */}
          <section className={' w-[1216px] block th-bd shadow-inner shadow-red-400 text-center font-normal text-sm h-[180px] bg-white ' + (fixed ? "sticky position: -webkit-sticky; bottom-0 left-0 " : null)}>
            {/* div1 */}
            <div className='h-[50px] th-fl border-b-[1px] border-gray-400 border-dotted'>
              <span className='w-[50%]'></span>
              <div className='w-[50%] px-8 flex justify-between items-center'>
                <div className='th-fl'>
                  <BsTicketPerforated size={20} color='red' />
                  <span className='text-base font-medium pl-2'>Platform Voucher</span>
                </div>
                <button className='text-blue-500 text-sm font-light'>Select Or Enter Code</button>
              </div>
            </div>
            {/* div2 */}
            <div className='h-[50px] th-fl border-b-[1px] border-gray-400 border-dotted'>
              <span className='w-[50%]'></span>
              <div className='w-[50%] pr-8 flex justify-between items-center'>
                <div className='th-fl'>
                  <BsCoin size={20} color='orange' />
                  <span className='text-sm text-gray-400 font-medium pl-2'>Platform Voucher</span>
                  <span className='text-sm font-medium pl-2 text-gray-400 pr-2'>No item selected</span>
                  <BsQuestionOctagon size={15} color='orange' />

                </div>
                <button className='text-gray-500 text-lg font-light'>-₫0</button>
              </div>
            </div>
            {/* div3 */}
            <div className='h-[80px] flex justify-between items-center px-8'>
              <div className='th-fl text-sm font-normal gap-2'>
                <input type="checkbox" />
                <span>Select All (2)</span>
                <span>Delete</span>
                <span>Remove inactive products</span>
                <span>Move to My Likes</span>
              </div>
              <div className='th-fl gap-8'>
                <div className='th-fl text-sm gap-2 font-normal'>
                  <span>Total :</span>
                  <span className='text-xl text-red-600 font-light'>
                    0đ
                  </span>
                </div>
                <button className='px-8 py-2 bg-orange-500 text-white font-light'>Check Out</button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div >
  )
}

export default Cart
