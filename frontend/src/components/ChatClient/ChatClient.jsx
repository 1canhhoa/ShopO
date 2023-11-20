import { useEffect, useRef, useState } from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { motion } from 'framer-motion'
import { CiSquareChevDown } from "react-icons/ci";
import { IoMdImages, IoMdSend } from 'react-icons/io'
import { FaFaceFlushed } from 'react-icons/fa6'
import ChatClientMenulists from './ChatClientMenulists';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { server } from '~/contants/contant'
import { format } from "timeago.js";
import noData from '~/Assests/images/noData.jpeg'
import { ActionGetAllConversationByUser, ActionUpdateLastMessage } from '~/Redux/actions/chat';
import socketIO from 'socket.io-client'
import { socket } from '~/contants/contant'
const ENDPOINT = socket
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })
const ChatClient = () => {


  // 3 logic chưa làm được: 
  // 1 sau khi ấn nút chat ở client thì nó tự đông currentUser vào shop đó(done)
  // 2 sau khi đăng nhập vào shop thì tự động thêm vào onlineUser (logic hiện tại chỉ thêm khi bạn click vào shopInbox)
  // 3 socket cho lastMessage
  // const { seller } = useSelector(state => state.seller)
  const { user } = useSelector(state => state.user)
  const { chatOpen } = useSelector(state => state.chat)
  // const [conversations, setConversations] = useState([]);
  const [userChating, setUserChating] = useState({});
  const [arrivalMessage, setArrivalMessage] = useState({})
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);
  const [active, setActive] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { conversation, conversations, success, error } = useSelector(state => state.chat)
  const [messageCount, setMessageCount] = useState(0);
  const dispatch = useDispatch()
  const variant = {
    initial: {
      scale: 0,
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        damping: 100,
      },
    },
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
        scale: {
          duration: 0.4
        }
      },
    }
  }
  const handleOpenChat = (payload) => {
    dispatch({ type: 'open', payload: payload })
    localStorage.setItem('openChat', payload)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // get first conversation
  useEffect(() => {
    if (conversations?.length > 0) {
      const sellerId = conversations[0]?.members?.find(a => a !== user._id);
      const getSeller = async () => {
        try {
          const { data } = await axios.get(`/api/v1/seller-info/${sellerId}`);
          setUserChating(data.seller);
          // sau khi refresh lấy activestatus của currenUser 
          const online = onlineUsers?.some((user) => user.userId === data.seller._id);
          setActiveStatus(online)
        } catch (error) {
          console.log(error);
        }
      };
      getSeller();
    }
  }, [conversations, onlineUsers, user._id]);
  useEffect(() => {
    if (conversations?.length > 0) {
      setCurrentChat(conversations[0])
    }
  }, [conversations])


  // get all seller's past conversations  
  useEffect(() => {
    dispatch(ActionGetAllConversationByUser(user._id))
  }, [dispatch, user._id])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/v1/get-all-messages/${currentChat?._id}`)
      setMessages(data.messages);
    }
    fetchData()
      .catch(error => console.log('error', error))
  }, [currentChat])
  const handleClickMenuItem = (id) => {
    id === active ? null : setActive(id)
  }
  useEffect(() => {
    if (scroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [scroll]);
  const scrollRef = useRef(null);
  useEffect(() => {
    if (user && conversations?.length > 0) {
      const scrollContainer = scrollRef.current;
      const lastMessage = scrollContainer.lastElementChild;
      const scrollHeight = lastMessage.offsetTop + lastMessage.offsetHeight;
      scrollContainer.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }
  }, [conversations?.length, messages, user]);

  // SOCKET SOCKET
  useEffect(() => {
    socketId.on("getMessage", (data) => {
      if (data) {
        console.log('dataGetmessage11', data);
        setMessageCount(prevCount => prevCount + 1);
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        });
      }
    });
    console.log('arrivalMessage', arrivalMessage);
    socketId.on("getLastMessage", (data) => {
      if (data) {
        console.log('dataGetLastMessage', data);
      }
    })
  }, [arrivalMessage]);
  useEffect(() => {

    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat?.members]);

  useEffect(() => {
    if (user) {
      const userId = user?._id;
      socketId.emit("addUser", userId);
      socketId.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [user]);
  const onlineCheck = (chat) => {
    const chatMembers = chat.members.find((member) => member !== user?._id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);
    return online ? true : false;
  };
  const updateLastMessage = async () => {
    socketId.emit("updateLastMessage", {
      lastMessage: newMessage,
      lastMessageId: user._id,
      role: 'user'
    })
    dispatch(ActionUpdateLastMessage({
      lastMessage: newMessage,
      lastMessageId: user._id,
      role: 'user',
      conversationId: currentChat?._id
    }))
    setNewMessage("")
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    socketId.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      if (newMessage !== "") {
        console.log('newMessage', newMessage);
        axios
          .post(`/api/v1/create-new-message`, message)
          .then((res) => {
            setActive(0)
            setMessages([...messages, res.data.message]);
            updateLastMessage();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    console.log('e.target.value', e.target.value);
    setNewMessage(e.target.value)
  }
  return (
    <div className='' >
      <motion.div onClick={() => handleOpenChat(true)} className='cursor-pointer fixed bottom-2 rounded-sm flex justify-center items-center gap-1 right-2 w-24 shadow-shadow-chat h-10 bg-white'>
        <IoIosChatboxes color='#14b8a6' size={30} />
        <span className='text-lg text-[#14b8a6]'>chat</span>
      </motion.div>
      {conversations?.length > 0 && <motion.div onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} variants={variant} initial='initial' animate={chatOpen === true ? 'open' : 'closed'}
        className='z-[1000] origin-bottom-right flex border-[1px] border-gray-300 flex-col bottom-2 right-2 h-[65%] rounded-sm shadow-shadow-chat fixed  bg-white'>
        <div className='h-[7%] px-2 flex justify-between items-center'>
          <span className='text-teal-500 font-semibold text-base'>Chat</span>
          <CiSquareChevDown className='cursor-pointer' size={25} onClick={() => handleOpenChat(false)} />
        </div>
        <div className=' w-full h-[93%] transition-all duration-75 ease-linear'>
          <div className=" h-full flex border-t-[2px] border-gray-100">
            {/* sidebar */}
            <div className="lg:w-[10%] lg:min-w-[200px] sm:min-w-[80px] sm:max-w-[80px] flex flex-col items-center  min-w-[70px] max-w-[70px]  overflow-hidden  transition-all duration-[10] ease-linear  h-full border-r-[2px] border-gray-100">
              <div className='text-xl px-8 py-8 font-semibold'>
                <span className="hidden lg:inline">Messages</span>
                <span className="lg:hidden">xyz</span>
              </div>
              {conversations?.map((c, i) => (
                <ChatClientMenulists
                  key={i}
                  data={c}
                  number={i}
                  active={active}
                  online={onlineCheck(c)}
                  newMessage={newMessage}
                  setCurrentChat={setCurrentChat}
                  setUserChating={setUserChating}
                  setActiveStatus={setActiveStatus}
                  handleClickMenuItem={handleClickMenuItem}
                />

              ))}

            </div>
            {/* content */}
            <div className="lg:w-[90%] min-w-[430px] w-full h-full  flex flex-col">
              {/* recipient */}
              <div className='h-[8%] w-full border-b-[2px] border-gray-100 flex items-center justify-start px-4 gap-2'>
                <div className='relative'>
                  <img className='object-contain min-h-[20px] border-[1px] border-gray-400 min-w-[20px] w-[30px] h-[30px] rounded-full' src={`${server}/${userChating?.avatar}`} alt="" />
                  {!activeStatus && <span className='absolute bottom-0 right-0 p-1 border-[2px] border-white bg-gray-500 rounded-full'></span>}
                  {activeStatus && <span className='absolute bottom-0 right-0 p-1 border-[2px] border-white bg-teal-500 rounded-full'></span>}
                </div>
                <div className='font-medium text-base'>{userChating?.name}</div>
              </div>
              {/* body messages */}
              <div className=' bg-white min-h-[380px] py-8 pl-2 pr-2 w-full overflow-y-scroll' ref={scrollRef}>
                <div className=' pt-8' >
                  {messages?.map((m, i) => (
                    <div key={i}>
                      <div className='text-center'><span className='text-gray-400 text-xs'>{format(m?.createdAt)}</span></div>
                      {m?.sender === user._id ?
                        <div className='text-end my-2'>
                          <div className="rounded-3xl inline-block bg-teal-500 px-4 py-2  text-white "> {m?.text}
                          </div>
                        </div>
                        :
                        <div className=' '><div className=" rounded-3xl inline-block bg-[#f0f0f0] px-8 py-3  text-black "> {m?.text}</div></div>
                      }
                    </div>
                  ))}
                </div>
              </div>
              {/* input and send */}
              <form onSubmit={handleSendMessage} className=' min-h-[50px] w-full px-2 flex items-center justify-start  gap-2'>
                <IoMdImages className=' mx-2' color='14b8a6' size={25} />
                <div className='border-[1px] border-gray-300 w-full h-[90%] pl-4 bg-[#f5f5f5]  rounded-full flex justify-center items-center'>
                  <input onChange={(e) => handleInput(e)} value={newMessage} type="text" className='bg-[#f5f5f5] outline-none w-full h-full' />
                  <FaFaceFlushed className='bg-[#f5f5f5] mx-2' color='14b8a6' size={20} />
                </div>
                <button><IoMdSend size={25} color='#14b8a6' className='' /></button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>}
      {conversations?.length === 0 && <motion.div onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} variants={variant} initial='initial' animate={chatOpen === true ? 'open' : 'closed'}
        className='z-[1000] overflow-y-auto origin-bottom-right flex border-[1px] border-gray-300 flex-col bottom-2 right-2 h-[65%] rounded-sm shadow-shadow-chat fixed  bg-white'>
        <div className='h-[7%] px-2 flex justify-between items-center'>
          <span className='text-teal-500 font-semibold text-base'>Chat</span>
          <CiSquareChevDown className='cursor-pointer' size={25} onClick={() => handleOpenChat(false)} />
        </div>
        <div className=' w-full h-[93%] transition-all duration-75 ease-linear'>
          <div className=" h-full flex border-t-[2px] border-gray-100">
            {/* sidebar */}
            <div className="lg:w-[10%] lg:min-w-[200px] sm:min-w-[80px] sm:max-w-[80px] flex flex-col items-center  min-w-[70px] max-w-[70px]  overflow-hidden  transition-all duration-[10] ease-linear  h-full border-r-[2px] border-gray-100">
            </div>
            {/* content */}
            <div className="lg:w-[90%] min-w-[430px] w-full h-full  flex flex-col">
              {/* recipient */}
              <div className='h-[8%] w-full border-b-[2px] border-gray-100 flex items-center justify-start px-4 gap-2'>
              </div>
              {/* body messages */}
              <div className='h-[85%] bg-white py-8 pl-2 pr-2 w-full overflow-auto'>
                <img src={noData} className='w-full h-full' alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>}

    </div>

  )
}

export default ChatClient
