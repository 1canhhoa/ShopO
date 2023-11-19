import { useEffect, useState } from 'react'
// import { productData } from '~/static/data'
import { GoTriangleDown } from 'react-icons/go'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy
import { BsTicketPerforated, BsCoin, BsQuestionOctagon } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { ActionGetAllAddress } from '~/Redux/actions/address'
import { ActionAllCheckedProduct, ActionCheckedProducts } from '~/Redux/actions/cart'
import { ActionClearCart, ActionConfirmVariation, ActionRemoveFromCart, ActionUpdateDecreaseQuanti, ActionUpdateIncreaseQuanti } from '~/Redux/actions/cart'
const fakechoose1 = [
  { class: 3, capa: 0, quanti: 2, productId: '65264e02a535c6ce2729918a' },
  { class: 0, capa: 1, quanti: 5, productId: '65264e17a535c6ce27299197' },
  { class: 1, capa: 0, quanti: 2, productId: '65264e1ea535c6ce272991a4' },
  { class: 1, capa: 0, quanti: 3, productId: '6527aa7980e75ed991991c68' }
]
const fakechooseDraft1 = [
  { class: 3, capa: 0, quanti: 2, productId: '65264e02a535c6ce2729918a' },
  { class: 1, capa: 0, quanti: 5, productId: '65264e17a535c6ce27299197' },
  { class: 1, capa: 0, quanti: 2, productId: '65264e1ea535c6ce272991a4' },
  { class: 1, capa: 0, quanti: 3, productId: '6527aa7980e75ed991991c68' }
]

const Cart = () => {
  const [fakechoose, setFakechoose] = useState([])
  const [fakechooseDraft, setFakechooseDraft] = useState([])
  const [visible, setVisible] = useState(false)
  const [activeClassify, setAvtiveClassify] = useState(-1)
  const [activeCapacity, setActiveCapacity] = useState(-1)
  const [activeClickVariations, setActiveClickVariations] = useState(-1)
  const [fixed, setFixed] = useState(true);
  const [confirmationTable, setConfirmationTable] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [save, setSave] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState([])
  const [isCheck, setIsCheck] = useState([])
  const dispatch = useDispatch()
  const { allCarts, newCard, message, error } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.user)
  const { pathname, state } = useLocation()
  // console.log('pathname', pathname, state);

  // console.log("data1", data1);

  useEffect(() => {
    if (state?.type === 'buynow') {
      setIsCheck([...isCheck, newCard?._id])
    }
  }, [newCard, state?.type])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    setFakechoose(allCarts)
    setFakechooseDraft(allCarts)
  }, [allCarts])
  // [1,2,1,3,1,3,1,1]
  useEffect(() => {
    const valueUnique = []
    const arrangeItemCart = fakechoose?.map((a, i) => {
      if (!valueUnique.includes(a.product.shopId)) {
        valueUnique[i] = a.product.shopId
        return fakechoose?.filter(b => b.product.shopId === a.product.shopId)
      }
    }).filter(c => c !== undefined)
    // valueUnique sẽ có dạng như này: [[1{4}{5}],[2{6}],[3{7}]], mảng 1,2,3 là từng shop, 4,5,6,7 là product
    setData1(arrangeItemCart)
  }, [allCarts, fakechoose])
  ///////////////////
  useEffect(() => {
    if (isCheckAll?.length === 0) {
      const shopIds = data1?.map(d => ({ shopId: d[0].product.shop._id, checked: false }))
      setIsCheckAll(shopIds);
    }
  }, [data1, isCheckAll?.length])
  ////////////////////
  useEffect(() => {
    if (message) {
      toast.success(message)
    } else {
      toast.error(error)
    }
    dispatch(ActionClearCart())
  }, [dispatch, message, error])
  //246:là phần header ko thay đổi 
  //AllShoppingCart * (275 + 32):số card và gap
  // 598 tự thêm
  // (window.screen.height - 123) : chiều cao trình duyệt cố định
  // window.innerHeight :chiều cao trình duyệt hiện tại
  window.addEventListener("scroll", () => {
    const AllShoppingCart = fakechoose?.slice(0, 5).length
    const heightScroll = 246 + AllShoppingCart * (275 + 32) - 616 + (window.screen.height - 123) - window.innerHeight //1151
    window.scrollY < heightScroll ? setFixed(true) : setFixed(false)
  });
  const handleActiveClassify = (tab, m) => {
    setSave([...save, tab])
    if (save[save.length - 1] !== tab) {
      setFakechoose(prev => prev.map(pre => {
        if (pre._id === m._id) {
          return { ...pre, capa: null, class: tab }
        } return pre
      }))
      setActiveCapacity('')
      activeClassify === tab ? '' : setAvtiveClassify(tab)
    }
  }
  const handleActiveCapacity = (tab, m) => {
    activeCapacity === tab ? '' : setActiveCapacity(tab)
    setFakechoose(prev => prev.map(pre => {
      if (pre._id === m._id) {
        return { ...pre, capa: tab }
      } return pre
    }))
  }
  const handleActiveClickVariations = async (tab) => {
    activeClickVariations === tab ? (setActiveClickVariations(-1), setVisible(false)) : (setActiveClickVariations(tab), setVisible(true))
  }
  const handleActiveClickVariCancel = async (tab) => {
    // đóng content tippy
    setVisible(false)
    // đóng cả thẻ tippy
    activeClickVariations === tab ? setActiveClickVariations(-1) : setActiveClickVariations(tab)
  }
  const handleConfirm = (tab, c, p) => {
    if (c !== null && p !== null) {
      // setFakechooseDraft(fakechoose)
      dispatch(ActionConfirmVariation({ classify: c, capacity: p, cartId: tab, emailShop: user.email }))
      // đóng content tippy
      setVisible(false)
      // đóng cả thẻ tippy
      activeClickVariations === tab ? setActiveClickVariations(-1) : setActiveClickVariations(tab)
    } else {
      toast.error("please choose one capacity")
    }
  }
  const [infoConfirmTable, setInfoConfirmTable] = useState({});
  // const [deleteThisCartId, setDeleteThisCartId] = useState('');
  const handleDecreaseQuantity = (m) => {
    if (m.quanti !== 1) {
      dispatch(ActionUpdateDecreaseQuanti({ cartId: m._id, userEmail: user.email }))
    } else {
      setConfirmationTable(true)
      const name = m?.product?.name
      const nameClass = m?.product?.capacities[m.class]?.name
      const nameCapa = m?.product?.capacities[m.class]?.capacity[m.capa]?.capacity
      setInfoConfirmTable({ _id: m._id, name, nameClass, nameCapa })
    }
  }
  const handleDeleteCart = () => {
    setConfirmationTable(false)
    dispatch(ActionRemoveFromCart({ cartId: infoConfirmTable._id, userEmail: user.email }))
  }
  const handleIncreaseQuantity = (m) => {
    const fixThis = fakechoose.find(f => m._id === f._id)
    if (fixThis.quanti !== m.product.stock) {
      dispatch(ActionUpdateIncreaseQuanti({ cartId: m._id, userEmail: user.email }))
    } else {
      toast.warning("Product has limited quantity")
    }
  }

  // console.log("isCheckAll", isCheckAll);
  // console.log("isCheck", isCheck);
  const handleClickChecked = (e, d) => {
    const { id, checked } = e.target;
    const singleCheck = d.map(m => m._id)
    const shopId = d[0].product.shop._id
    const findObjectToFix = isCheckAll?.find(is => is.shopId === shopId)
    const getQuantiBelongToArray = isCheck.filter(is => singleCheck.includes(is))
    setIsCheck([...isCheck, id]);
    if (checked) {
      if ((!isCheck.includes(id)) && (d.length - getQuantiBelongToArray.length === 1)) {
        setIsCheckAll(prevArray => prevArray.map(item => {
          if (item.shopId === findObjectToFix.shopId) {
            return { ...item, checked: true };
          }
          return item;
        }))
      }
    }
    if (!checked) {
      setIsCheckAll(prevArray => prevArray.map(item => {
        if (item.shopId === findObjectToFix.shopId) {
          return { ...item, checked: false };
        }
        return item;
      }))
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };
  const handleClickCheckedAll = (e, d) => {
    const { checked } = e.target;
    const shopId = d[0].product.shop._id
    const singleCheck = d.map(m => m._id)
    if (checked) {// [] [3,4] chưa có trong mảng thì push vào 
      setIsCheck([...isCheck, ...singleCheck])
    } else {      // [1,2,3,4] [3,4] có rồi thì loại bỏ 
      setIsCheck(isCheck.filter(is => !singleCheck.includes(is)))
    }
    // sửa object này
    const findObjectToFix = isCheckAll.find(is => is.shopId === shopId)
    setIsCheckAll(prevArray => prevArray.map(item => {
      if (item.shopId === findObjectToFix.shopId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  };
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

  // tính toán tổng số tiền của những sp đc check
  const [totalPrice, setTotalPrice] = useState(0)
  const [checkedProduct, setCheckedProduct] = useState([])
  useEffect(() => {
    if (isCheck) {
      const checkedInCarts = fakechoose?.filter(c => isCheck.includes(c._id))
      const totalPrice = checkedInCarts?.reduce(
        (acc, item) => acc + item?.quanti * item?.product?.discountPrice, 0)
      setTotalPrice(totalPrice)
      setCheckedProduct(checkedInCarts)
    }
  }, [isCheck, fakechoose])
  // get all address when click button
  const handleGetAllAddress = () => {
    const valueUnique = []
    const arrangeItemCart = checkedProduct?.map((a, i) => {
      if (!valueUnique.includes(a.product.shopId)) {
        valueUnique[i] = a.product.shopId
        return checkedProduct?.filter(b => b.product.shopId === a.product.shopId)
      }
    }).filter(c => c !== undefined)
    // valueUnique sẽ có dạng như này: [[1{4}{5}],[2{6}],[3{7}]], mảng 1,2,3 là từng shop, 4,5,6,7 là product
    // setData1(arrangeItemCart)
    dispatch(ActionAllCheckedProduct(arrangeItemCart))
    dispatch(ActionCheckedProducts(isCheck))
    dispatch(ActionGetAllAddress(user._id))
  }
  console.log("data1", data1);
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
          {data1 && data1?.map((d, i) => {
            const shopId = d[0]?.product?.shop?._id
            const arrShopIdAndchecked = isCheckAll?.find(is => is.shopId === shopId)
            return (
              <div key={i} className='min-w-[1216px] shadow-sm bg-white'>
                <div className='w-full overflow-auto '>
                  {/* Name shop */}
                  <div className=' h-[60px] w-full border-b-[1px] border-gray-300 border-dashed flex justify-start items-center pl-8'>
                    <input type='checkbox' checked={arrShopIdAndchecked?.checked} onChange={(e) => handleClickCheckedAll(e, d)} id='select-all' />
                    <span className='pl-2 text-sm font-medium'>{d[0]?.product?.shop?.name}</span>
                  </div>
                  {d.map((m, i) => {
                    const p = m?.product
                    const arrUniqueCapacities = handleCapacity(p)
                    const arrcapa = p?.capacities[m?.class]?.capacity.map(c => c.capacity)
                    return (
                      <div key={i}>
                        {/* Products */}
                        <div className='h-[136px] text-sm font-normal flex  items-center border-b-[1px] border-gray-300 border-dashed w-full'>
                          {/* Products Left */}
                          <div className=' pl-8 th-fl gap-2 w-[46%]'>
                            {/* checkbox */}
                            <input onChange={(e) => handleClickChecked(e, d)} checked={isCheck?.includes(m._id)} id={m._id} type='checkbox' />
                            {/* Image */}
                            <a className='w-[25%]  th-fl'><img src={`http://localhost:4000/${p?.capacities[1]?.url}`} className='w-20 h-20 object-cover th-bdimg' alt="" /></a>
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
                            {activeClickVariations === m._id && <Tippy
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
                                        <button key={i} onClick={() => { handleActiveClassify(i, m) }}
                                          className={' px-4 py-2 th-bd ' + (m.class === i ? "bg-teal-400 text-black" : null)}>{p1?.name}</button>
                                      )
                                    })}
                                  </div>
                                  {/* Capacities */}
                                  <div className='gap-2 flex flex-wrap'>
                                    {arrUniqueCapacities?.length > 0 && <span className='text-base text-gray-600'>capacities: </span>}
                                    {arrUniqueCapacities?.map((p1, i) => {
                                      return (
                                        <button disabled={!arrcapa?.includes(p1) ? true : false} key={i} onClick={() => handleActiveCapacity(i, m)}
                                          className={' px-4 py-2 border-[1px] border-black ' + (!arrcapa?.includes(p1) ? "text-gray-300 border-gray-300 " : '  ') + (m.capa === i ? "bg-teal-400 text-black" : null)}>{p1}</button>
                                      )
                                    })}
                                  </div>
                                  {/* Button */}
                                  <div className='flex justify-end text-sm'>
                                    <button onClick={() => handleActiveClickVariCancel(m._id)}
                                      className='uppercase hover:bg-gray-100 py-2 px-6'>Cancel</button>
                                    <button onClick={() => handleConfirm(m._id, m.class, m.capa)} className='uppercase hover:opacity-90 bg-red-500 text-white py-2 px-6'>Confirm</button>
                                  </div>
                                </div>
                              }
                            >
                              {/* button inside tippy */}
                              <button onClick={() => {
                                handleActiveClickVariations(m._id)
                              }}
                                className={'w-min mr-8 flextext-sm text-gray-500 font-normal flex-col justify-center items-start ' + (activeClickVariations === m._id ? 'text-red-600' : null)}>
                                <div className='th-fl'>
                                  <span className="Variations">Variations</span>
                                  <GoTriangleDown />
                                </div>
                                <span className='text-red-600'>{p?.capacities[m?.class]?.name},{arrUniqueCapacities[m?.capa]}</span>
                              </button>
                            </Tippy>}
                            {/* button outside tippy */}
                            {activeClickVariations !== m._id && <button onClick={() => {
                              handleActiveClickVariations(m._id)
                            }}
                              className={'w-min mr-8 flextext-sm text-gray-500 font-normal flex-col justify-center items-start ' + (activeClickVariations === m._id ? 'text-red-600' : null)}>
                              <div className='th-fl'>
                                <span className="Variations">Variations</span>
                                <GoTriangleDown />
                              </div>
                              <span className='text-red-600'>{p?.capacities[m?.class]?.name},{arrUniqueCapacities[m?.capa]}</span>
                            </button>}
                          </div>
                          {/* Products Right */}
                          <div className='flex w-[54%] justify-center items-center'>
                            {/* Unit price */}
                            <div className='w-[25%] th-fl'>
                              <span className=' text-gray-400 line-through pr-2'>{p?.originalPrice}$</span>
                              <span className=''>{p?.discountPrice}$</span>
                            </div>
                            {/* Quantity */}
                            <div className='w-[25%] th-fl'>
                              <div className='w-max justify-between relative  flex  my-8 rounded-sm'>
                                <div className='absolute -top-6 left-0 text-center text-xs text-gray-500 w-full'>{p?.stock} available</div>
                                <button onClick={() => handleDecreaseQuantity(m)} className='w-10 py-1 px-2 text-base bg-teal-400 rounded-tl-sm rounded-bl-sm flex items-center justify-center'><AiOutlineMinus /></button>
                                <span className='w-10 min-w-[40px] py-1 px-3 text-base bg-gray-200 flex items-center justify-center'>{m?.quanti}</span>
                                <button onClick={() => handleIncreaseQuantity(m)} className='basis-1/3 py-1 px-2 text-base bg-teal-400 flex items-center justify-center'><AiOutlinePlus /></button>
                                {confirmationTable && <div className="fixed th-fl w-full h-screen top-0 left-0 bg-gray-400 bg-opacity-10 z-50">
                                  <div className='fixed w-[500px] flex justify-between flex-col items-start h-80 p-8 bg-white rounded-md'>
                                    <div className='text-2xl text-red-500 '>Do you want to remove this item?</div>
                                    {/* <div>{JSON.stringify(infoConfirmTable)}</div> */}
                                    <div className='text-base '>{infoConfirmTable?.name}({infoConfirmTable?.nameClass},{infoConfirmTable?.nameCapa})</div>
                                    <div className='w-full flex justify-between gap-4'>
                                      <button onClick={handleDeleteCart} className='px-[90px] text-base font-semibold text-white rounded-sm bg-red-500 hover:bg-red-600 py-2'>Yes</button>
                                      <button onClick={() => setConfirmationTable(false)} className='px-[90px] text-base font-semibold text-gray-500 rounded-sm border-[1px] hover:bg-gray-100 border-gray-300 py-2'>No</button>
                                    </div>
                                  </div>
                                </div>}
                              </div>
                            </div>
                            {/* Total price */}
                            <div className="w-[25%] text-center text-red-600">{m?.quanti ? p?.discountPrice * m?.quanti : p?.discountPrice}$</div>
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
                    // điểm cuối products(p)
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
          {data1?.length === 0 && <div className='h-10 text-lg font-semibold text-red-500'>You dont have any product yet</div>}
          {/* CART PRODUCT 2 PlatForm Voucher */}
          <section className={' w-[1216px] block border-[1px] border-gray-300 border-dashed shadow-inner shadow-red-400 text-center font-normal text-sm h-[180px] bg-white ' + (fixed ? "sticky position: -webkit-sticky; bottom-0 left-0 " : null)}>
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
                    {totalPrice}  $
                  </span>
                </div>
                {isCheck?.length > 0 && <Link to='/checkout'>
                  <button onClick={handleGetAllAddress} className='px-16 py-2 hover:bg-orange-600 rounded-sm bg-orange-500 text-white text-base font-medium'>Check Out</button>
                </Link>}
                {isCheck?.length === 0 &&
                  <button button onClick={() => toast.warn("Please select a product to checkout")} className='px-16 py-2 hover:bg-orange-600 rounded-sm bg-orange-500 text-white text-base font-medium'>Check Out</button>
                }
              </div>
            </div>
          </section>

        </div >
      </div >
    </div >
  )
}

export default Cart
