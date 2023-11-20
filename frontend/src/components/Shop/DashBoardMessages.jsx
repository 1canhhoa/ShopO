import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { IoMdImages, IoMdSend } from 'react-icons/io'
import { FaFaceFlushed } from 'react-icons/fa6'
import DashBoardMessagesMenulists from './DashBoardMessagesMenulists';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { format } from "timeago.js";
import socketIO from 'socket.io-client'
import { ActionUpdateLastMessage, ActionGetAllConversationBySeller } from '~/Redux/actions/chat';
import { server, socket } from '~/contants/contant';
const ENDPOINT = socket
const socketId = socketIO(ENDPOINT, { transports: ['websocket'] })
const DashBoardMessages = props => {
  const { seller } = useSelector(state => state.seller)
  const [userChating, setUserChating] = useState({});
  const [arrivalMessage, setArrivalMessage] = useState({})
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeStatus, setActiveStatus] = useState(false);
  const [active, setActive] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  console.log('userchating', userChating);
  const dispatch = useDispatch()
  const { conversation, conversations, success, error } = useSelector(state => state.chat)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // get first conversation
  useEffect(() => {
    if (conversations?.length > 0) {
      const userId = conversations[0]?.members?.find(a => a !== seller._id);
      const getUser = async () => {
        try {
          const { data } = await axios.get(`/api/v1/user-info/${userId}`);
          setUserChating(data.user);
          // sau khi refresh lấy activestatus của currenUser 
          const online = onlineUsers?.some((user) => user.userId === data.user._id);
          setActiveStatus(online)
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  }, [conversations, onlineUsers, seller._id]);

  useEffect(() => {
    if (conversations?.length > 0) {
      setCurrentChat(conversations[0])
    }
  }, [conversations])


  // get all user's past conversations  
  useEffect(() => {
    dispatch(ActionGetAllConversationBySeller(seller._id))
  }, [dispatch, seller._id])

  useEffect(() => {
    console.log('currentChat?._id', currentChat?._id);
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
    if (seller && conversations.length > 0) {
      const scrollContainer = scrollRef.current;
      const lastMessage = scrollContainer.lastElementChild;
      const scrollHeight = lastMessage.offsetTop + lastMessage.offsetHeight;
      scrollContainer.scrollTo({ top: scrollHeight, behavior: "smooth" });
    }
  }, [conversations.length, messages, seller]);
  // SOCKET SOCKET
  useEffect(() => {
    socketId.on("getMessage", (data) => {
      if (data) {
        console.log('data', data);
        setMessageCount(prevCount => prevCount + 1);
        setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        });
      }
    });
    socketId.on("getLastMessage", (data) => {
      if (data) {
        console.log('dataGetLastMessage', data);
      }
    })
  }, [setArrivalMessage]);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);

  }, [arrivalMessage, currentChat?.members]);

  useEffect(() => {
    if (seller) {
      const sellerId = seller?._id;
      socketId.emit("addUser", sellerId);
      socketId.on("getUsers", (data) => {
        setOnlineUsers(data);
      });
    }
  }, [seller]);

  const onlineCheck = (chat) => {
    const chatMembers = chat.members.find((member) => member !== seller?._id);
    const online = onlineUsers.find((user) => user.userId === chatMembers);
    return online ? true : false;
  };

  const updateLastMessage = async () => {
    socketId.emit("updateLastMessage", {
      lastMessage: newMessage,
      lastMessageId: seller._id,
      role: 'seller'
    })
    dispatch(ActionUpdateLastMessage({
      lastMessage: newMessage,
      lastMessageId: seller._id,
      role: 'seller',
      conversationId: currentChat?._id
    }))
    setNewMessage("")
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log('send');
    const receiverId = currentChat.members.find(
      (member) => member !== seller._id
    );
    socketId.emit("sendMessage", {
      senderId: seller._id,
      receiverId,
      text: newMessage,
    });
    const message = {
      sender: seller._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      if (newMessage !== "") {
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

  return (
    <div className=' h-screen w-full px-1 transition-all duration-75 ease-linear sm:px-8 py-1 sm:py-4'>
      <div onMouseEnter={() => setScroll(true)} onMouseLeave={() => setScroll(false)} className=" h-[90%] flex border-[2px] border-gray-200 rounded-md">
        {/* sidebar */}
        <div className="lg:min-w-[350px] flex flex-col items-center lg:w-[30%] min-w-[70px] max-w-[70px] sm:min-w-[80px] sm:max-w-[80px] overflow-hidden  transition-all duration-[10] ease-linear  h-full border-r-[2px] border-gray-200">
          <div className='text-xl px-8 py-8 font-semibold'>
            <span className="hidden lg:inline">Messages</span>
            <span className="lg:hidden">xyz</span>
          </div>
          {conversations?.map((c, i) => (
            <DashBoardMessagesMenulists
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
        <div className="lg:w-[70%] min-w-[230px] w-full h-full  flex flex-col">
          {/* recipient */}
          <div className='h-[8%] w-full border-b-[2px] border-gray-200 flex items-center justify-start px-4 gap-2'>
            <div className='relative'>
              <img className='min-h-[40px] border-[1px] border-gray-400 min-w-[40px] w-[40px] h-[40px] rounded-full' src={`${server}/${userChating?.avatar}`} alt="" />
              {!activeStatus && <span className='absolute bottom-0 right-0 p-1.5 border-[2px] border-white bg-gray-500 rounded-full'></span>}
              {activeStatus && <span className='absolute bottom-0 right-0 p-1.5 border-[2px] border-white bg-teal-500 rounded-full'></span>}
            </div>
            <div className='font-medium text-base'>{userChating?.username}</div>
          </div>
          {/* body messages */}
          <div className='h-[85%] py-8 pl-2 pr-2 w-full overflow-auto' ref={scrollRef}>
            <div className=' pt-8  '  >
              {messages?.map((m, i) => (
                <div key={i} >
                  <div className='text-center'><span className='text-gray-400 text-xs'>{format(m?.createdAt)}</span></div>
                  {m?.sender === seller._id ?
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
          <form onSubmit={handleSendMessage} className='h-[7%] border-t-[2px] border-gray-200 w-full px-2 flex items-center justify-start  gap-2'>
            <IoMdImages className=' mx-2' color='14b8a6' size={25} />
            <div className='border-[1px] border-gray-300 w-full h-[90%] pl-4 bg-[#f5f5f5]  rounded-full flex justify-center items-center'>
              <input onChange={(e) => setNewMessage(e.target.value)} value={newMessage} type="text" className='bg-[#f5f5f5] outline-none w-full h-full' />
              <FaFaceFlushed className='bg-[#f5f5f5] mx-2' color='14b8a6' size={20} />
            </div>
            <button><IoMdSend size={25} color='#14b8a6' className='' /></button>
          </form>
        </div>
      </div>
    </div>
  )
}

DashBoardMessages.propTypes = {

}

export default DashBoardMessages
