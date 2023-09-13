import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Activation() {
  const { activationtoken } = useParams()
  const [error, setError] = useState(false)
  const accessToken = activationtoken.replaceAll('*', '.')
  console.log("error", error);
  useEffect(() => {
    if (activationtoken) {
      const activationEmail = () => {
        axios.post('/api/v1/activation', { accessToken: accessToken })
          .then(res => console.log(res.data))
          .catch(() => setError(true))
      }
      activationEmail()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
          (<p>Your account has been created suceessfully111222!</p>)
      }
      <div className="text-red-400">{error}</div>
    </div>
  )
}

export default Activation