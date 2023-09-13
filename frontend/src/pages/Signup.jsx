import { InstagramIcon, FaceBookIcon } from "~/svg/icons";
import { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Signup() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [visible, setVisible] = useState(true)
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const config = { Headers: { "Content-Type": "multipart/form-data" } }
        const newForm = new FormData()
        newForm.append('file', avatar)
        newForm.append('username', username)
        newForm.append('email', email)
        newForm.append('password', password)
        axios
            .post("/api/v1/create-user", newForm, config)
            .then((res) => {
                console.log(res.data.message)
                toast.success("create user success please check email to login")
                setAvatar(''); setEmail(''); setPassword(''); setUsername('')
            })
            .catch((error) => {
                toast.error(error.response.data)
            })
    }
    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        console.log('file', file.name);
        setAvatar(file)



        // const reader = new FileReader();

        // reader.onload = () => {
        //     if (reader.readyState === 2) {
        //         setAvatar(reader.result);
        //     }
        // };

        // reader.readAsDataURL(e.target.files[0]);
    };
    return (
        <div className="min-h-screen bg-pink-700 flex flex-col justify-center items-center">
            <div className="flex flex-col bg-white min-h-[400px] min-w-[400px] gap-4 px-8 py-10">
                <div className="text-2xl font-semibold">Sign up</div>
                <form className="flex flex-col gap-4 relative" onSubmit={handleSubmit}>
                    <input placeholder="username..." name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className=" mb-4 outline-none border-pink-900 border-b-2 " />
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
                    <div className="mt-2 flex items-center">
                        <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                            {avatar ? (
                                <img
                                    src={avatar}
                                    alt="avatar"
                                    className="h-full w-full object-cover rounded-full"
                                />
                            ) : (
                                <RxAvatar className="h-8 w-8" />
                            )}
                        </span>
                        <label
                            htmlFor="file-input"
                            className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            {avatar && <span>{avatar.name}</span>}
                            {!avatar && <span>Upload a file</span>}
                            <input
                                type="file"
                                name="avatar"
                                id="file-input"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileInputChange}
                                className="sr-only"
                            />
                        </label>
                    </div>
                    <button className={"h-12 text-white bg-pink-500 " + (password && username ? "" : "opacity-70")}>register</button>
                </form>

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
                    <span>you already have an account ? </span>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;