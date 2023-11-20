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
function NavItem({ navItems }) {
  const [scroll, setScroll] = useState(false);
  const { seller } = useSelector(state => state.seller)
  const active = "text-[#9a3412] flex items-center justify-center text-sm font-semibold "
  const normal = " flex items-center justify-center text-sm font-medium font-semibold"
  // const active = "text-blue-500 "
  // const normal = ""
  useEffect(() => {
    if (scroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [scroll]);
  // const scrollRef = useRef(null);
  // useEffect(() => {
  //   if (seller) {
  //     const scrollContainer = scrollRef.current;
  //     const lastMessage = scrollContainer.lastElementChild;
  //     const scrollHeight = lastMessage.offsetTop + lastMessage.offsetHeight;
  //     scrollContainer.scrollTo({ top: scrollHeight, behavior: "smooth" });
  //   }
  // }, [seller]);
  return (
    navItems.map((n, i) => {
      return (
        <Tippy
          disabled={i > 2}
          animation='shift-toward'
          appendTo={() => document.body}
          theme="notification"
          interactive
          placement="bottom-end"
          offset={() => {
            if (i === 1) {
              return [-440, 0];
            } else if (i === 2) {
              return [0, 0];
            } else {
              return [-20, 0];
            }
          }}
          content={
            <div onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} className={"flex rounded-md justify-center items-center bg-white " + (i === 1 ? '' : null)}>
              {i === 0 && <Home data={n.Content} />}
              {i === 1 && <Shop data={n.Content} />}
              {i === 2 && <FAQ data={n.Content} />}
            </div>
          }
        >
          {/* <NavLink to={n.url} key={i} className={({ isActive }) => (isActive ? active : normal)} > */}
          <div key={i} className={normal} >
            <button >{n.title}</button>
            {n.chevron && <span>{n.chevron}</span>}
          </div>
        </Tippy>

      )
    })
  );
}
const Home = ({ data }) => {

  return (
    <div className="p-8 flex flex-col gap-4">
      {data?.map((a, i) => (
        <div key={i} className="cursor-pointer text-gray-500 font-semibold hover:text-shop_main underline">{a?.name}</div>
      ))}
    </div>
  )
}
const Shop = ({ data }) => {

  return (
    <div className="flex gap-[168px] p-6">
      {data?.map((a, i) => (
        <div key={i} className="flex flex-col justify-start items-start gap-6">
          <div className="font-semibold">{a?.name}</div>
          <div className="gap-2 flex flex-col text-gray-500 ">
            {a?.item.map((b, i) => (
              <NavLink key={i} className="hover:text-shop_main cursor-pointer">{b?.name}</NavLink>
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
        <NavLink key={i} to={a.url} className="cursor-pointer text-gray-500 font-semibold hover:text-shop_main">{a?.name}</NavLink>
      ))}
    </div>
  )
}

export default NavItem;