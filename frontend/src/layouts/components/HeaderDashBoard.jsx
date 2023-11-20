import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoApp } from "~/Assests/svg";
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiChevronDown } from 'react-icons/bi'
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippyshift-toward
import 'tippy.js/animations/shift-toward.css'//animation tippy
import { useState } from "react";
import { server } from '~/contants/contant'
import axios from "axios";
import { toast } from "react-toastify";

const HeaderDashBoard = () => {
  const { isAuthenticated, user } = useSelector(state => state.user)
  const { isAuthenticatedSeller, seller } = useSelector(state => state.seller)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    axios.get('/api/v1/logout', { withCredentials: true })
      .then((res => {
        toast.success('log out success')
        navigate('/login-shop')
        window.location.reload(true)
      })).catch((error) => {
        console.log(error.response.data);
      })
  }
  return (
    <div className="w-full border-b-[1px] border-[#efefef]">
      {/* header */}
      <div className="px-[24px] mx-auto max-w-[1216px] h-[60px] ">
        <div className="flex items-center h-full w-full text-[12px] font-medium justify-between ">
          {/* header-left */}
          <div className="th-fl gap-4">
            <div>
              <Link reloadDocument to="/">
                <LogoApp width='120' height='120' color='bg-shop_main' />
              </Link>
            </div>
            <div className=" text-lg font-medium ">
              Seller Centre
            </div>
          </div>
          {/* header right */}
          <div className="flex gap-4">
            <Tippy
              animation='perspective'
              appendTo={() => document.body}
              theme="notification"
              interactive
              placement="bottom-end"
              content={
                <div className="flex justify-center items-center bg-white w-[400px]">
                  <div className=" py-10 text-shop_main text-base">Bạn chưa có thông báo</div>
                </div>
              }
            >
              <div className="hidden 460:flex items-center">
                <IoMdNotificationsOutline size={20} />
                <button className="text-sm">Notications</button>
                <BiChevronDown size={20} />
              </div>
            </Tippy>
            {isAuthenticated && <div className="">
              <Tippy
                animation='perspective'
                theme="notification"
                placement="bottom-end"
                interactive
                // visible={visible}
                content={
                  <div className="">
                    <Link to='/user/account/profile'>
                      <div className="py-2 pl-2 cursor-pointer hover:text-teal-400 hover:bg-slate-100 font-semibold  w-[150px]">My Account</div>
                    </Link>
                    <Link to='/user/purchase'><div className="py-2 pl-2 cursor-pointer hover:text-teal-400 hover:bg-slate-100 font-semibold w-[150px]">My purchase</div></Link>
                    <div onClick={() => handleLogout()} className="py-2 pl-2 cursor-pointer hover:text-teal-400 hover:bg-slate-100 font-semibold w-[150px]">Log out</div>
                  </div>
                }
              >
                <Link to='' className="th-fl">
                  <img src={`${server}/${seller?.avatar}`} className='w-[20px] object-contain h-[20px] rounded-full' />
                  <span className="text-sm ml-1 font-normal">{seller.name}</span>
                </Link>
              </Tippy>
            </div>}
          </div>
        </div>
      </div >
    </div >
  )
}

export default HeaderDashBoard
