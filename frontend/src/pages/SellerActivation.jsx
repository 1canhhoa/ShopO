import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
function SellerActivation() {
  const { shopToken } = useParams()
  const [error, setError] = useState(false)
  const shopToken1 = shopToken.replaceAll('*', '.')
  const { loading } = useSelector(state => state.user)
  useEffect(() => {
    // loading !== false : xử lý lỗi tạo 2 lần user khi click vào link email(ban đầu loading=undefine sau đó bằng false)
    // nguyên nhân do activationPage bị render 2 lần => tạo 2 ủe giống nhau
    if (shopToken) {
      const activationEmail = async () => {
        await axios.post('/api/v1/shop/activation', { shopToken: shopToken1 })
          .then(res => console.log(res.data))
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
          (<p>Your Shop has been created suceessfully ! you have become a Seller ! </p>)
      }
    </div>
  )
}

export default SellerActivation