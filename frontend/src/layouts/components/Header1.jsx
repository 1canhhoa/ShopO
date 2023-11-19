import { Link, useNavigate } from "react-router-dom";
import { ChevronBottom } from '~/Assests/svg'
import Image from "~/components/Image";
import image from "~/Assests/images";
import { useSelector } from "react-redux";
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
import axios from "axios";
import { toast } from "react-toastify";

const Header1 = () => {
  const { isAuthenticated, user } = useSelector(state => state.user)
  const { seller } = useSelector(state => state.seller)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    axios.get('/api/v1/logout', { withCredentials: true })
      .then((res => {
        localStorage.removeItem('lengthCart');
        toast.success('log out success')
        navigate('/login')
        window.location.reload(true)
      })).catch((error) => {
        console.log(error.response.data);
      })
  }
  return (
    <div className="w-full border-b-[1px] border-[#efefef]">
      <div className="px-[24px] mx-auto max-w-[1216px] h-[40px] ">
        <div className="flex items-center h-full w-full text-[12px] font-medium justify-between ">
          <div className="flex gap-4">
            <Link to={`/dashboard/overview/${seller?.name}`} >Seller center</Link>
            <Link >Track Order</Link>
            <Link >Support</Link>
          </div>
          <div className="flex gap-4">
            <Tippy
              animation='perspective'
              theme="language"
              interactive
              placement="bottom-end"
              content={<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt="" fallback={image.fallbackLogo} className='h-[200px] w-[200px]  object-cover' />}
            >
              <div className=" items-center hidden sm:flex ">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt="" fallback={image.fallbackLogo} className='h-5 w-5 rounded-full object-cover' />
                <button className="pl-1">VietNam</button>
                <BiChevronDown size={20} />
              </div>
            </Tippy>
            <Tippy
              animation='shift-toward'
              appendTo={() => document.body}
              theme="notification"
              interactive
              placement="bottom-end"
              content={
                <div className="flex rounded-md justify-center items-center bg-white w-[400px]">
                  <div className=" py-10 text-shop_main text-base">Bạn chưa có thông báo</div>
                </div>
              }
            >
              <div className="hidden 460:flex items-center">
                <IoMdNotificationsOutline size={20} />
                <button className="">Notications</button>
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
                <Link to='/user/account/profile' className="th-fl">
                  <img src={`http://localhost:4000/${user?.avatar}`} className='w-[20px] h-[20px] rounded-full' />
                  <span className="text-sm ml-1 font-normal">Nham Hien</span>
                </Link>
              </Tippy>
            </div>}
          </div>
        </div>
      </div >
    </div >
  )
}

export default Header1
