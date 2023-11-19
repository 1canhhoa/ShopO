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
const ChatClientMenulists = ({
  data,
  online,
  number,
  active,
  setCurrentChat,
  setUserChating,
  setActiveStatus,
  handleClickMenuItem: handle,
}) => {
  const [sellerInfo, setSellerInfo] = useState({});
  const [timer, setTimer] = useState(null);
  const navigate = useNavigate();
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    if (data?.createdAtLastMessage) {
      let a = format(data?.createdAtLastMessage);
      let parts = a?.split(' ');
      let formattedTime = parts[0] + parts[1][0];
      parts[0] === 'just' ? setTimer(parts[1]) : setTimer(formattedTime)
    }
  }, [data, timer, setTimer])
  useEffect(() => {
    setActiveStatus(online)
  }, [online, setActiveStatus])
  useEffect(() => {
    // data?.members : in this have exist userId and sellerId

    const sellerId = data?.members?.find((a) => a != user._id);
    const getUser = async () => {
      const res = await axios.get(`/api/v1/seller-info/${sellerId}`);
      setSellerInfo(res.data.seller);
    };
    getUser().catch(error => toast.error('error', error))
  }, [data, user._id]);
  const handleClickMenuItem = (id) => {
    handle(id)
    setActiveStatus(online)
    setCurrentChat(data)
    setUserChating(sellerInfo)
    // navigate(`/dashboard/messages/${seller?.name}?${data._id}`);
  }
  return (
    <div
      onClick={() => handleClickMenuItem(number)}
      className={`hover:bg-[#f5f5f5] cursor-pointer pr-2 md:pr-0 lg:w-full lg:flex pl-2 sm:px-2 py-2 lg:gap-2 sm:mx-2 overflow-hidden justify-center lg:justify-start items-center `
        + (active === number ? "bg-[#f5f5f5]" : "bg-white")
      }>
      <div className='relative'>
        <img className='object-contain min-h-[30px] min-w-[30px] w-[30px] h-[30px] border-[1px] border-gray-400  rounded-full' src={`http://localhost:4000/${sellerInfo?.avatar}`} alt="" />
        {!online && <span className='absolute bottom-0 right-0 p-1 border-[2px] border-white bg-gray-500 rounded-full'></span>}
        {online && <span className='absolute bottom-0 right-0 p-1 border-[2px] border-white bg-teal-500 rounded-full'></span>}
      </div>
      <div className=' hidden lg:block p-0.5 max-h-[50px] overflow-hidden'>
        <div className='font-semibold text-sm'>{sellerInfo?.name}</div>
        {data?.lastMessage && <div className='text-xs max-h-[25px] overflow-hidden text-gray-500'>
          {data?.lastMessageId !== sellerInfo?._id ? 'You' : data?.nameLastMessage}
          :{data.lastMessage?.length > 7 ? `${' ' + data?.lastMessage?.slice(0, 7)}... ` : `${' ' + data?.lastMessage}.`}  {(timer)}
        </div>}
      </div>
    </div>
  )
}

ChatClientMenulists.propTypes = {

}

export default ChatClientMenulists
