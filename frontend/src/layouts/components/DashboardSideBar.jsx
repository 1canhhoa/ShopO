import { useState, useEffect } from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { useSelector } from "react-redux";
import socketIO from 'socket.io-client'
const ENDPOINT = 'http://localhost:4001/'
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })
const dashboardItems = [
  {
    name: 'Dashboard',
    link: '/dashboard/overview',
    icon: RxDashboard
  },
  {
    name: 'All Orders',
    link: '/dashboard/oders',
    icon: FiShoppingBag
  },
  {
    name: 'All Products',
    link: '/dashboard/all-product',
    icon: FiPackage
  },
  {
    name: 'Create Product',
    link: '/dashboard/create-product',
    icon: AiOutlineFolderAdd
  },
  {
    name: 'All Events',
    link: '/dashboard/all-event',
    icon: MdOutlineLocalOffer
  },
  {
    name: 'Create Event',
    link: '/dashboard/create-event',
    icon: VscNewFile
  },
  {
    name: 'Withdraw Money',
    link: '/dashboard-withdraw-money',
    icon: CiMoneyBill
  },
  {
    name: 'Shop Inbox',
    link: '/dashboard/messages',
    icon: BiMessageSquareDetail
  },
  {
    name: 'Discount Codes',
    link: '/dashboard/coupouns',
    icon: AiOutlineGift
  },
  {
    name: 'Refunds',
    link: '/dashboard-refunds',
    icon: HiOutlineReceiptRefund
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: CiSettings
  },
]
const DashboardSideBar = () => {
  console.log('vao dashboardSibar');
  const { seller } = useSelector(state => state.seller)
  let numberCurrent = parseInt(localStorage.getItem("currentNumber"))
  if (window.location.href.includes("/dashboard/overview")) { numberCurrent = 0 }
  const [active, setActive] = useState(() => numberCurrent)
  const handleActive = (tab) => {
    active === tab ? null : (setActive(tab), localStorage.setItem("currentNumber", tab))
  }
  // const [Check, setCheck] = useState(false);
  // useEffect(() => {
  //   socketId.on("getMessage", (data) => {
  //     console.log('data', data);
  //     if (!data) {
  //       setCheck(true)
  //     }
  //   })
  // }, [])
  // console.log('check', Check);
  // useEffect(() => {
  //   if (seller && Check) {
  //     console.log('here');
  //     const sellerId = seller?._id;
  //     socketId.emit("addUser", sellerId);
  //   }
  // }, [Check, seller]);
  return (
    <div className="w-[8%] h-full min-w-[62px] md:min-w-[200px] transition-all duration-200 ease-linear border-b-[1px] border-r-[1px] border-gray-200 bg-white shadow-sm overflow-y-auto overflow-x-auto sticky top-0 left-0 z-50">
      {dashboardItems.map((d, i) => {
        const Icon = d.icon
        return (
          <Link key={i} onClick={() => handleActive(i)} to={`${d.link}/${seller.name}`}
            className={"w-full flex items-center  " + (active === i ? "bg-teal-400" : null)}>
            <div className="w-full flex items-center p-4">
              {/* <RxDashboard size={30} color={`${active === 1 ? "crimson" : "#555"}`} /> */}
              <div className="w-full flex items-center">
                <div>
                  <Icon size={30} />
                </div>
                <div className="hidden md:block pl-2 text-base font-medium">{d.name}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </div >
  );
};

export default DashboardSideBar;