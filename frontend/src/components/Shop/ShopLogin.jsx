
import axios from "axios";
import Tippy from "@tippyjs/react";
import LoaderBig from "../LoaderBig";
import { toast } from "react-toastify";
import { LogoApp } from "~/Assests/svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
const ShopLogin = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate()
  const [loadpage, setLoadpage] = useState(false);
  const { seller } = useSelector(state => state.seller)
  const { user, isAuthenticated } = useSelector(state => state.user)
  const [authen, setAuthen] = useState(null)
  console.log(1);
  useEffect(() => {
    axios.get("/api/v1/profile-seller").then(() => {
      setAuthen(true)
    }).catch(() => {
      console.log(2);
      setAuthen(false)
    })
  }, [])
  console.log(3);
  if (authen === true) {
    console.log("authen true");
    return <Navigate to={`/dashboard/overview/${seller.name}`} />
  } else if (authen === false && isAuthenticated) {
    console.log(seller, "authen false");
    return <Navigate to='/seller/form' />
  } else if (authen === false && !isAuthenticated) {
    console.log("login-shop");
  }
  else {
    <LoaderBig />
  }

  const submitLogin = (e) => {
    e.preventDefault()


    setLoadpage(true)
    axios.post("/api/v1/login-user", { email, password }, { withCredentials: true })
      .then(() => {
        console.log('1');
        setLoadpage(false)
        navigate(`/dashboard/overview/${seller.name}`)
        toast.success("login shop success")
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      })
      .catch((error) => {
        setLoadpage(false)
        toast.error(error.response.data)
      })
  }
  const handleLogout = () => {
    axios.get('/api/v1/logout', { withCredentials: true })
      .then((res => {
        toast.success('log out success')
        window.location.reload(true)
      })).catch((error) => {
        console.log(error.response.data);
      })
  }
  return (
    <>
      {loadpage && <LoaderBig />}
      <div className='w-full h-screen flex flex-col justify-between items-start bg-slate-300'>
        {/* part 1 */}
        <div className=" w-full min-w-[1200px] min-h-[72px] h-[10%] py-4 px-4 bg-red-200">
          <div className='flex justify-between items-center'>
            <div className="th-fl gap-2">
              <Link reloadDocument to="/">
                <LogoApp color='bg-shop_main' />
              </Link>
              <span className='h-6 border-l-[2px] border-gray-300'></span>
              <span className='text-xl font-semibold'>Log in your shop</span>
            </div>
            <Tippy
              placement='bottom-end'
              animation='perspective'
              theme="notification"
              interactive
              content={
                <div className="">
                  <div onClick={handleLogout} className="py-2 pl-2 cursor-pointer hover:text-teal-400 hover:bg-slate-100 font-semibold w-[150px]">Log out</div>
                </div>
              }
            >
              <button className='th-fl gap-1'>
                {user && <img src={`http://localhost:4000/${user?.avatar}`} alt="" className='w-8 h-8 rounded-full' />}
                {user && <span className='font-normal'>Nham Hien</span>}
                {user && <FiChevronDown />}
              </button>
            </Tippy>
          </div>
        </div>
        {/* part 2 */}
        <div className='w-full th-bd min-h-[506px] th  h-[90%] min-w-[500px] th-fl rounded-sm shadow-inner'>
          <div className=' overflow-x-scroll h-full w-full flex flex-col p-4 bg-slate-200'>
            {/* Row 1 */}
            <div className='h-[15%]'>
              <div className='w-full h-full th-fl text-2xl font-semibold'>
                Login Shop
              </div>
            </div>
            <div className='h-[85%] w-full th-fl'>
              <div className="flex flex-col bg-white min-h-[400px] min-w-[400px] gap-4 px-8 py-10">
                <form onSubmit={submitLogin} autoComplete="on" className="flex flex-col gap-4 relative">
                  <input placeholder="email..." type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" mb-4 outline-none border-pink-900 border-b-2 " />
                  <input placeholder="password..." type={visible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 border-pink-900 outline-none border-b-2" />
                  {visible === true && <AiOutlineEye
                    className="absolute top-1/2 -translate-y-[90%] right-0 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />}
                  {visible === false && <AiOutlineEyeInvisible
                    className="absolute top-1/2 -translate-y-[90%] right-0 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />}
                  <button disabled={password && email ? false : true} className={"h-12 text-white bg-shop_main " + (password && email ? "" : "opacity-70")}>login</button>
                </form>
                <div className=" flex items-center justify-between gap-4">
                  <div className="flex items-center justify-center">
                    <input type="checkbox" className="h-4 w-4 mr-2" />
                    <label htmlFor="remember me">remember me</label>
                  </div>
                  <a>forgot your password?</a>
                </div>
                <div className="text-sm text-center">
                  <span>Do not have an account seller ? </span>
                  <Link to='/login' >Login ShopO</Link>
                </div>
              </div>
            </div>
            <span className='w-full border-b-[1px] border-gray-300'></span>
            {/* Row 2 */}
          </div>
        </div>

      </div >
    </>
  )
}

ShopLogin.propTypes = {

}

export default ShopLogin

