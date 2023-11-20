import { InstagramIcon, FaceBookIcon } from "~/svg/icons";
import { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from '~/components/Loader'
import { useSelector } from "react-redux";
import LoaderBig from "../LoaderBig";
function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [visible, setVisible] = useState(true)
  const navigate = useNavigate()
  const [loadpage, setLoadpage] = useState(false);
  const submitLogin = (e) => {
    e.preventDefault()
    setLoadpage(true)
    axios.post("/api/v1/login-user", { email, password })
      .then(() => {
        console.log("here2");
        navigate("/")
        setLoadpage(false)
        toast.success("login success")
        window.location.reload()
        // setTimeout(() => {
        // }, 200)
      })
      .catch((error) => {
        setLoadpage(false)
        toast.error(error.response.data)
      })
  }
  return (
    <>
      {loadpage === true && <LoaderBig />}
      <div className="min-h-screen bg-shop_main flex flex-col justify-center items-center">
        <div className="flex flex-col bg-white min-h-[400px] min-w-[400px] gap-4 px-8 py-10">
          <div className="text-2xl font-semibold">Log in</div>
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
          <div className="flex justify-between items-center">
            <button className="min-h-[40px] w-[45%] flex justify-center items-center border-[1px] text-center  border-black">
              <span className="pr-2"><InstagramIcon /></span>
              <span>Instagram</span>
            </button>
            <button className="min-h-[40px] w-[45%] flex justify-center items-center border-[1px] text-center  border-black">
              <span className="pr-2"><FaceBookIcon /></span>
              <span>Facebook</span>
            </button>
          </div>

          <div className="text-sm text-center">
            <span>Do not have an account ? </span>
            <Link to='/signup' >Signup</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;