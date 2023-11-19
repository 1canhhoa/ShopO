import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
function Activation() {
  const { isAuthenticated, loading } = useSelector(state => state.user)
  const { activationtoken } = useParams()
  const [error, setError] = useState(false)
  const accessToken = activationtoken.replaceAll('*', '.')
  useEffect(() => {
    // loading !== false : xử lý lỗi tạo 2 lần user khi click vào link email(ban đầu loading=undefine sau đó bằng false)
    // nguyên nhân do activationPage bị render 2 lần => tạo 2 ủe giống nhau
    if (activationtoken) {
      const activationEmail = async () => {
        await axios.post('/api/v1/user/activation', { accessToken: accessToken })
          .then(res => { console.log("loading", loading); console.log("isAuthenticated", isAuthenticated); console.log(res.data) })
          .catch(() => setError(true))
      }
      activationEmail()
    }
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto"
      }}
    >
      {
        error ?
          (<p>Your token is expired!</p>) :
          (<p>Your account has been created suceessfully ! let login now ! </p>)
      }
    </div>
  )
}

export default Activation