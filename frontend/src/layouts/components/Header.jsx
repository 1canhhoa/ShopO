import { Link } from "react-router-dom";
import {
  LogoApp, ChevronBottom, LoadingIcon, LoveIcon, BagIcon, ProfileIcon, DeleteSearchIcon, AllCategoryIcon, ChevronRight, MenuCategoriesIcon
} from '~/Assests/svg'
import { IoIosLogIn } from 'react-icons/io'
import { CiUser } from 'react-icons/ci'
import Image from "~/components/Image";
import image from "~/Assests/images";
import { useState, useRef, useEffect } from "react";
import { categoriesData, navItems, productData } from '~/static/data'
import DropDownMenu from './DropDownMenu.jsx'
import NavItem from "./NavItem.jsx"
import { useSelector } from "react-redux";
function Header() {
  const { isAuthenticated, user, loading } = useSelector(state => state.user)
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState(null);
  const [dropDown, setDropDown] = useState(false)
  const [active, setActive] = useState(false);
  const inputRef = useRef()
  console.log("user", user);
  useEffect(() => {
    // window.location.reload()
  }, [user])
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
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  }
  return (
    <>
      {
        loading ? null : <header className="mx-auto">
          {/* HEADER 1 */}
          <div className="w-full border-b-[1px] border-[#efefef]">
            <div className="px-[24px] mx-auto max-w-[1216px] h-[40px] ">
              <div className="flex items-center h-full w-full text-[12px] font-medium justify-between ">
                <div className="flex gap-4">
                  <Link to={"/account"}>Account</Link>
                  <Link to={"/track-oder"}>Track Order</Link>
                  <Link to={"/support"}>Support</Link>
                </div>
                <div className="hidden sm:flex gap-4">
                  <div className="flex items-center ">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt="" fallback={image.fallbackLogo} className='h-5 w-5 rounded-full object-cover' />
                    <button className="pl-1">VietNam</button>
                    <div className="pt-[2px]">
                      <ChevronBottom className='h-4 w-4' />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="">VND</button>
                    <div className="pt-[2px]">
                      <ChevronBottom className='h-4 w-4' />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="">VnVip</button>
                    <div className="pt-[2px]">
                      <ChevronBottom className='h-4 w-4' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HEADER 2 */}
          <div className="w-full">
            <div className="px-[24px] max-w-[1216px] mx-auto border-b-[1px] border-[#efefef]">
              <div className="flex items-center justify-between w-full min-h-[62px] lg:min-h-[90px]">
                <button className="block lg:hidden">
                  <MenuCategoriesIcon />
                </button>
                <div className="">
                  <Link to="/">
                    {/* <img
                    // src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                    src={<LogoApp />}
                    alt=""
                  /> */}
                    <LogoApp color='bg-shop_main' />
                  </Link>
                </div>
                <div className="hidden lg:block search w-[500px] h-[42px]">
                  <form action="" className="flex h-full w-full  border-[1px] focus-within:border-[#d0cfcf] border-border-blur">
                    <div className=" flex items-center w-full h-full">
                      <input value={search} ref={inputRef} className="placeholder:text-sm pl-4 w-full h-[50%] outline-none" onChange={handleInputChange} type="text" placeholder="Search product..." />
                      {search && <button onClick={handleDeleteSearch} className="mr-2">
                        <DeleteSearchIcon />
                      </button>}
                    </div>
                    <button className="bg-shop_main px-6 font-medium">Search</button>
                  </form>
                  {searchData && searchData.length !== 0 ? (
                    <div className="absolute min-h-[30vh] w-[500px] bg-slate-50 shadow-sm-2 z-[9] p-4">
                      {searchData &&
                        searchData.map((i, index) => {
                          // "\s" : là dấu cách ( ) 
                          // "\s+" : là dấu cách (nhiều dấu cách liền nhau sẽ coi là 1 dấu ) 
                          const product_name = i.name.replace(/\s+/g, "-")
                          return (
                            <Link key={index} to={`/product/${product_name}`}>
                              <div className="w-full flex items-start-py-3">
                                <img
                                  src={`${i.image_Url[0]?.url}`}
                                  alt=""
                                  className="w-[40px] h-[40px] mr-[10px]"
                                />
                                <h1>{i.name}</h1>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-center items-center gap-5">
                  <div className="relative hidden lg:block">
                    <button><LoadingIcon /></button>
                    <span className="absolute flex justify-center items-center w-[18px] h-[18px] -top-2.5 -right-2.5 text-[9px] bg-shop_main rounded-full">1</span>
                  </div>
                  <div className="relative hidden lg:block">
                    <button><LoveIcon /></button>
                    <span className="absolute flex justify-center items-center w-[18px] h-[18px] -top-2.5 -right-2.5 text-[9px] bg-shop_main rounded-full">1</span>
                  </div>
                  <div className="relative ">
                    <button><BagIcon /></button>
                    <span className="absolute flex justify-center items-center w-[18px] h-[18px] -top-2.5 -right-2.5 text-[9px] bg-shop_main rounded-full">1</span>
                  </div>
                  <div className="hidden lg:block">
                    {isAuthenticated ? (
                      <Link to='/profile'>
                        <img src={`http://localhost:4000/${user.avatar}`} className='w-[30px] h-[30px] mb-2 rounded-full' />
                      </Link>
                    ) : (
                      <Link to='/login'><IoIosLogIn className="mb-2" size={30} /></Link>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div >
          {/* HEADER 3 */}
          <div className={"bg-shop_main w-full hidden lg:block " + (active ? "shadow-sm fixed top-0 left-0 z-50" : null)} >
            <div className="px-[24px] mx-auto max-w-[1216px]">
              <div className=" min-h-[60px] flex items-center justify-between">
                {/* content-1 */}
                <div className="flex gap-4 xl:gap-10 ">
                  <div>
                    <button onClick={() => setDropDown(!dropDown)} className="flex justify-between px-4 items-center mt-[4px] rounded-tr-lg rounded-tl-lg bg-white w-[270px] h-[54px]">
                      <div className="flex justify-center items-center gap-2">
                        <div><AllCategoryIcon /></div>
                        <span className="text-sm font-semibold">All categories </span>
                      </div>
                      <div><ChevronBottom className='w-4 h-4' /></div>
                    </button>
                    {dropDown && <DropDownMenu categoriesData={categoriesData} setDropDown={setDropDown} />}
                  </div>
                  <NavItem navItems={navItems} />
                </div>
                {/* content-2 */}
                <div className="flex bg-black w-[160px] h-[40px] justify-center items-center">
                  <button className=" text-sm text-white font-semibold">Become a Seller</button>
                  <div><ChevronRight className="text-white w-5 h-5" /></div>
                </div>
              </div>
            </div>
          </div >

        </header >
      }
    </>
  )
}

export default Header;