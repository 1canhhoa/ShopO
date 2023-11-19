import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { IoMdImages, IoMdSend } from 'react-icons/io'
import { FaFaceFlushed } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from "timeago.js";
import { toast } from 'react-toastify';

import socketIO from 'socket.io-client'
const ENDPOINT = 'http://localhost:4001/'
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })
const DashBoardMessagesMenulists = ({
  data,
  online,
  number,
  active,
  setCurrentChat,
  setUserChating,
  setActiveStatus,
  handleClickMenuItem: handle,
}) => {
  const [user, setUser] = useState({});
  const [timer, setTimer] = useState(null);
  const { seller } = useSelector(state => state.seller)
  const navigate = useNavigate();
  useEffect(() => {
    if (data?.createdAtLastMessage) {
      let a = format(data?.createdAtLastMessage); // hoặc '1 minutes'
      // console.log('a', a);
      let parts = a?.split(' '); // Tách chuỗi thành mảng các phần tử, sử dụng khoảng trắng làm điểm tách
      let formattedTime = parts[0] + parts[1][0]; // Thêm ký tự 'm' vào sau số lượng phút
      parts[0] === 'just' ? setTimer(a) : setTimer(formattedTime)
    }
  }, [data, timer, setTimer])
  useEffect(() => {
    setActiveStatus(online)
  }, [online, setActiveStatus])
  useEffect(() => {
    const userId = data?.members?.find((user) => user != seller._id);
    const getUser = async () => {
      const res = await axios.get(`/api/v1/user-info/${userId}`);
      setUser(res.data.user);
    };
    getUser().catch(error => toast.error('error', error))
  }, [data, seller._id]);
  const handleClickMenuItem = (id) => {
    handle(id)
    setActiveStatus(online)
    setCurrentChat(data)
    setUserChating(user)
    navigate(`/dashboard/messages/${seller?.name}?${data._id}`);
  }
  return (
    <div
      onClick={() => handleClickMenuItem(number)}
      className={`hover:bg-[#f5f5f5] cursor-pointer pr-2 md:pr:0 lg:w-full lg:flex pl-2 sm:px-2 py-2 lg:gap-2 sm:mx-2 overflow-hidden justify-center lg:justify-start items-center  rounded-md `
        + (active === number ? " bg-[#f5f5f5]" : "bg-white")
      }>
      <div className='relative'>
        <img className='min-h-[50px] min-w-[50px] w-[50px] h-[50px] border-[1px] border-gray-400  rounded-full' src={`http://localhost:4000/${user?.avatar}`} alt="" />
        {!online && <span className='absolute bottom-0 right-0 p-1.5 border-[2px] border-white bg-gray-500 rounded-full'></span>}
        {online && <span className='absolute bottom-0 right-0 p-1.5 border-[2px] border-white bg-teal-500 rounded-full'></span>}
      </div>
      <div className=' hidden lg:block p-0.5 max-h-[50px] overflow-hidden'>
        <div className='font-semibold'>{user?.username}</div>
        {data?.lastMessage && <div className='text-xs max-h-[25px] overflow-hidden text-gray-500'>
          {data?.lastMessageId !== user._id ? 'You' : data?.nameLastMessage}
          :{data.lastMessage.length > 20 ? `${' ' + data.lastMessage.slice(0, 20)}... ` : `${' ' + data.lastMessage}.`}  {(timer)}
        </div>}
      </div>
    </div>
  )
}

DashBoardMessagesMenulists.propTypes = {

}

export default DashBoardMessagesMenulists
