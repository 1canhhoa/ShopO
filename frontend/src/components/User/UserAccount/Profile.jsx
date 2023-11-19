import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { PiUserCircleDuotone } from 'react-icons/pi'
const Profile = props => {
  const [isGender, setGender] = useState("Medium")
  const [image, setImage] = useState({})
  const [openInputPhone, setOpenInputPhone] = useState(false)
  const [dath, setDath] = useState('')
  const [nickname, setNickname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleGender = e => { setGender(e.target.value) }
  const handleChangeDath = (e) => { setDath(e.target.value) }
  const handleChangeNickname = (e) => { setNickname(e.target.value) }
  const handleChangePhone = () => { setOpenInputPhone(true) }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const onImageChange = (event) => {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      setImage({ url: URL.createObjectURL(event.target.files[0]), name: event.target.files[0].name });
    }
  }
  const { user } = useSelector(state => state.user)
  return (
    <div className='w-full h-full p-4 bg-white '>
      <div className='w-full flex py-4 flex-col items-start justify-center border-b-[1px] border-gray-300'>
        <span className='text-lg font-medium'>My Profile</span>
        <span className='text-sm font-normal text-gray-700'>Manage and protect your account</span>
      </div>
      <div className='w-full gap-2 py-20 flex justify-center items-center'>
        <form onSubmit={handleSubmit} aria-required={true} className='w-[68%] gap-6 flex flex-col h-full'>
          {/* username */}
          <div className='flex justify-center items-center'>
            <span className=' w-[30%] text-gray-700 text-sm text-end pr-4'>Username</span>
            <span className=' w-[70%] ml-2 text-sm'>Nham Hien</span>
          </div>
          {/* name */}
          <div className='flex justify-center items-center'>
            <span className=' w-[30%] text-gray-700 text-sm text-end pr-4'>Nickname</span>
            <div className='w-[70%] h-10 ml-2 th-fl pl-2 border-[1px] border-gray-400'>
              <input type="text" value={nickname} onChange={handleChangeNickname} className='outline-none w-[95%] h-full' />
            </div>
          </div>
          {/* Email */}
          <div className='flex justify-center items-center'>
            <span className=' w-[30%] text-gray-700 text-sm text-end pr-4'>Email</span>
            <span className=' w-[70%] ml-2 text-sm'>{user?.email}</span>
          </div>
          {/* Phone number */}
          <div className='flex justify-center items-center'>
            <span className=' w-[30%] text-gray-700 text-sm text-end pr-4'>Phone Number</span>
            {(() => {
              if (phoneNumber) {
                return (
                  <span className=' w-[70%] ml-2 text-sm'>{phoneNumber}</span>
                )
              }
              else if (openInputPhone === false && !phoneNumber) {
                return (
                  <button onClick={handleChangePhone} className='w-[70%] ml-2 text-start text-sm underline text-blue-600 '>Add</button>
                )
              } else if (openInputPhone === true && !phoneNumber) {
                return (
                  <div className='w-[70%] h-10 ml-2 th-fl pl-2 border-[1px] border-gray-400'>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className='  outline-none w-[95%] h-full' />
                  </div>)
              }
            })()}
          </div>
          {/* Gender */}
          <div className='flex justify-center items-center'>
            <span className=' w-[30%] text-gray-700 text-sm text-end pr-4'>Gender</span>
            <div className=' w-[70%] ml-2 text-sm flex justify-start gap-4 items-center'>
              <div className='flex justify-center items-center gap-2'>
                <input onChange={handleGender} checked={isGender === "Male"} type="radio" id="Male" name="Gender" value="Male" /><label htmlFor='Male'>Male</label></div>
              <div className='flex justify-center items-center gap-2'>
                <input onChange={handleGender} checked={isGender === "Female"} type="radio" id="Female" name="Gender" value="Female" /><label htmlFor='Female'>Female</label></div>
              <div className='flex justify-center items-center gap-2'>
                <input onChange={handleGender} checked={isGender === "Other"} type="radio" id="Other" name="Gender" value="Other" /><label htmlFor='Other'>Other</label></div>
            </div>
          </div>
          {/* Date of birth */}
          <div className='flex justify-center items-center'>
            <span className=' w-[30%] text-gray-700 text-sm text-end pr-4'>Date of birth</span>
            <span className=' w-[70%] ml-2 text-sm'>
              <input type="date" value={dath} id="birthday" onChange={handleChangeDath} name="birthday" />
            </span>
          </div>
          <button type='submit' className='px-6 py-2 block mx-auto rounded-sm bg-red-500 text-white'>Save</button>
        </form>
        <span className='border-l-[1px] h-[300px] border-gray-300'></span>
        {/* Avatar */}
        <div className=' w-[32%] h-full flex flex-col gap-2 justify-center items-center '>
          {!image.name && <PiUserCircleDuotone size={100} color='gray' />}
          {image.name && <img src={image.url} alt="" className='w-[60px] h-[60px] rounded-full' />}
          <div className='w-full text-center'>{image.name}</div>
          <input type="file" id="file-input" name="file-input" className="mx-auto w-[100px]" onChange={onImageChange} />
          <span className='text-sm font-normal text-gray-400'>File size: maximum 1 MB</span>
          <span className='text-sm font-normal text-gray-400'>File extension: .JPEG, .PNG</span>
        </div>

      </div>
    </div>
  )
}

Profile.propTypes = {

}

export default Profile
