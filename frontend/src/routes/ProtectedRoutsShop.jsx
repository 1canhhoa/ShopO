
import { useNavigate, Navigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import LoaderBig from "~/components/LoaderBig"
import { useEffect, useState } from 'react';
import axios from 'axios';
const ProtectedRoutsShop = ({ children }) => {
  const { seller, isAuthenticatedSller, error } = useSelector((state) => state.seller);
  const [authen, setAuthen] = useState()
  useEffect(() => {
    axios.get("/api/v1/profile-seller").then(() => {
      setAuthen(true)
    }).catch(() => {
      setAuthen(false)
    })
  }, [])
  if (authen === true) {
    console.log("mount");
    return children
  } else if (authen === false) {
    return <Navigate to='/login-shop' />
  }
  else {
    <LoaderBig />
  }
}
ProtectedRoutsShop.propTypes = {
}

export default ProtectedRoutsShop
