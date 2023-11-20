import { Link } from "react-router-dom";
import {
  LogoApp, ChevronBottom, DeleteSearchIcon, AllCategoryIcon, ChevronRight, MenuCategoriesIcon
} from '~/Assests/svg.jsx'
import { FiLogIn } from 'react-icons/fi'
import { useState, useRef, useEffect } from "react";
import { categoriesData, navItems, navItems2, productData } from '~/static/data'
import DropDownMenu from './DropDownMenu.jsx'
import NavItem from "./NavItem.jsx"
import NavItem2 from "./NavItem2.jsx"
import Header1 from "./Header1.jsx";
import { server } from '~/contants/contant'
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SearchData from "./SearchData.jsx";
import CategoriesMobileHeader from "./CategoriesMobileHeader.jsx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy


function Header() {
  const { allCarts } = useSelector(state => state.cart)
  const { products } = useSelector(state => state.product)
  const { isAuthenticated, user, loading } = useSelector(state => state.user)
  const { isAuthenticatedSeller, seller, loadingSeller } = useSelector(state => state.seller)
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState(null);
  const [dropDown, setDropDown] = useState(false)
  const [active, setActive] = useState(false);
  const inputRef = useRef()




  window.addEventListener("scroll", () => {
    if (window.scrollY > 130) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  const handleDeleteSearch = () => {
    setSearch('')
    setSearchData('')
    inputRef.current.focus()
  }
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearch(term)
    const filteredProducts =
      products?.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    if (!term) setSearchData('')
    else setSearchData(filteredProducts);
  }
  // Xử lý sự kiện khi click bên ngoài
  // const ref = useRef(null);
  // useEffect(() => {
  //   console.log("click outside");
  //   function handleClickOutside(event) {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setDropDown(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [setDropDown]);
  return (
    <>
      {
        loading && loadingSeller ?
          <div className="fixed w-full h-screen top-0 left-0 bg-red-600 z-50">
            toheheheheheheh
          </div>
          : <header className="mx-auto relative">
            <Header1 />
            {/* HEADER 2 */}
            <div className="w-full">
              <div className="px-[24px] max-w-[1216px] mx-auto border-b-[1px] border-[#efefef]">
                <div className="flex items-center justify-between w-full min-h-[62px] lg:min-h-[90px]">
                  {/* when responsive */}
                  <CategoriesMobileHeader />
                  {/* Logo App */}
                  <div className="">
                    <Link to="/">
                      <LogoApp color='bg-shop_main' />
                    </Link>
                  </div>
                  {/* Search */}
                  <div className="hidden lg:block relative w-[500px] h-[42px]">
                    <form action="" className="flex h-full w-full  border-[1px] focus-within:border-[#d0cfcf] border-border-blur">
                      <div className=" flex items-center w-full h-full">
                        <input value={search} name="search" ref={inputRef} className="placeholder:text-sm pl-4 w-full h-[50%] outline-none" onChange={handleInputChange} type="text" placeholder="Search product..." />
                        {search && <button onClick={handleDeleteSearch} className="mr-2">
                          <DeleteSearchIcon />
                        </button>}
                      </div>
                      <button className="bg-shop_main px-6 font-medium">Search</button>
                    </form>
                    <SearchData searchData={searchData} search={search} />
                  </div>
                  {/* Shopping cart */}
                  <div className="flex justify-center items-center gap-3">
                    <div className="relative flex justify-center items-center ">
                      <Tippy
                        animation={'perspective'}
                        theme="notification"
                        interactive
                        delay={[50, 50]}
                        placement="bottom-end"
                        offset={[10, 20]} //dich sang [trai,tren]
                        content={
                          isAuthenticated ?
                            <div className="w-max rounded-md py-4">
                              <span className="text-slate-500 pl-2">New Products Added</span>
                              {allCarts?.slice(0, 5).map(a => {
                                const p = a?.product
                                return (
                                  <Link
                                    key={p._id}
                                    to={{ pathname: `/product/${p?.name}` }}
                                    state={{ nameShop: p?.shop?.name }}//gửi qua ProductDetails
                                    reloadDocument
                                  >
                                    <div className="flex px-4 py-2 hover:bg-slate-200 w-full items-center justify-start">
                                      <img src={`${server}/${p?.capacities[1]?.url}`} className="w-[40px] border-[1px] border-slate-200 h-[40px] object-contain" alt="" />
                                      <div className="font-normal ml-2 w-full flex justify-between items-center ">
                                        <span className="text-black mr-16">{p.name.length > 18 ? p.name.slice(0, 38) + ' ...' : p.name}</span>
                                        <span className="text-red-600 text-end">{p.originalPrice || p.discountPrice}$</span>
                                      </div>
                                    </div>
                                  </Link>
                                )
                              })}
                              <div className="w-full text-end">
                                <Link to='/cart'>
                                  <button className=" h-max p-2 mt-4 hover:bg-opacity-90 rounded-md w-max bg-red-400 text-white mr-4" >
                                    View cart added
                                  </button>
                                </Link>
                              </div>
                            </div>
                            :
                            <div className="w-[400px] h-[250px] flex flex-col justify-center items-center ">
                              <LogoApp width='100' height='20' color='bg-shop_main' />
                              <span className="font-light text-base">you need to login</span>
                            </div>
                        }
                      >
                        <button className="" >
                          <Link to={isAuthenticated ? '/cart' : '/login'}>
                            <AiOutlineShoppingCart size={30} />
                          </Link>
                        </button>
                      </Tippy>

                      {isAuthenticated && <span className="absolute flex justify-center items-center w-[18px] h-[18px] -top-2.5 -right-2.5 text-[9px] bg-shop_main rounded-full">{allCarts?.length}</span>}
                    </div>
                    <div className="">
                      {!isAuthenticated && <Link to='/login'><FiLogIn className="" size={25} /></Link>}
                    </div>
                  </div>

                </div>
              </div>
            </div >
            {/* HEADER 3 */}
            <div className="h-[60px] w-full">
              <div className={"bg-shop_main h-[60px] w-full hidden lg:block " + (active ? "shadow-sm fixed top-0 left-0 z-40" : null)} >
                <div className="px-[24px] mx-auto max-w-[1216px]">
                  <div className=" min-h-[60px] flex items-center justify-between">
                    {/* content-1 */}
                    <div className="flex gap-10 xl:gap-10 ">
                      <div>
                        <button onMouseEnter={() => setDropDown(true)}
                          onMouseLeave={() => setDropDown(!dropDown)}
                          className="flex justify-between px-4 items-center mt-[4px] rounded-tr-lg rounded-tl-lg bg-white w-[270px] h-[54px]">
                          <div className="flex justify-center items-center gap-2">
                            <div><AllCategoryIcon /></div>
                            <span className="text-sm font-semibold">All categories </span>
                          </div>
                          <div><ChevronBottom className='w-4 h-4' /></div>
                        </button>
                        <DropDownMenu dropDown={dropDown} setDropDown={setDropDown} categoriesData={categoriesData} />
                      </div>
                      <NavItem navItems={navItems} />
                      <NavItem2 navItems={navItems2} />
                    </div>
                    {/* content-2 */}
                    <div className="flex bg-black w-[160px] h-[40px] justify-center items-center">
                      {(() => {
                        if (!isAuthenticated) {
                          return (
                            <Link to='/login'><button className=" text-sm text-white font-semibold">Become a Seller</button></Link>
                          )
                        } else if (!isAuthenticatedSeller) {
                          return (
                            <Link to='/seller/form'><button className=" text-sm text-white font-semibold">Become a Seller</button></Link>
                          )
                        } else if (isAuthenticatedSeller) {
                          return (
                            <Link to={`/dashboard/overview/${seller.name}`}><button className=" text-sm text-white font-semibold">Your Shop</button></Link>
                          )
                        }
                      })()}
                      <div><ChevronRight className="text-white w-5 h-5" /></div>
                    </div>
                  </div>
                </div>
              </div >
            </div>
          </header >
      }
    </>
  )
}

export default Header;