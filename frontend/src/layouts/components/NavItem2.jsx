import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippyshift-toward
import 'tippy.js/animations/shift-toward.css'//animation tippy
import iphoneImg from '~/Assests/images/iphone.jpg'
import { useSelector } from "react-redux";
function NavItem2({ navItems }) {
  const [scroll, setScroll] = useState(false);
  const { seller } = useSelector(state => state.seller)
  const active = "text-[#9a3412] flex items-center justify-center text-sm font-semibold "
  const normal = " flex items-center justify-center text-sm font-medium font-semibold"
  return (
    navItems.map((n, i) => {
      {/* <NavLink to={n.url} key={i} className={({ isActive }) => (isActive ? active : normal)} > */ }
      return (
        <NavLink to={n.url} key={i} className={({ isActive }) => (isActive ? active : normal)} >
          <button >{n.title}</button>
          {n.chevron && <span>{n.chevron}</span>}
        </NavLink>

      )
    })
  );
}
const Home = ({ data }) => {

  return (
    <div className="p-8 flex flex-col gap-4">
      {data?.map((a, i) => (
        <div className="cursor-pointer text-gray-500 font-semibold hover:text-shop_main underline">{a?.name}</div>
      ))}
    </div>
  )
}
const Shop = ({ data }) => {

  return (
    <div className="flex gap-[168px] p-6">
      {data?.map((a, i) => (
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="font-semibold">{a?.name}</div>
          <div className="gap-2 flex flex-col text-gray-500 ">
            {a?.item.map((b, i) => (
              <div className="hover:text-shop_main cursor-pointer">{b}</div>
            ))}
          </div>
        </div>
      ))}
      <img src={iphoneImg} className="w-[200px] h-[200px]" alt="" />
    </div>
  )
}
const FAQ = ({ data }) => {

  return (
    <div className="p-8 flex flex-col gap-4">
      {data?.map((a, i) => (
        <div className="cursor-pointer text-gray-500 font-semibold hover:text-shop_main">{a?.name}</div>
      ))}
    </div>
  )
}

export default NavItem2;