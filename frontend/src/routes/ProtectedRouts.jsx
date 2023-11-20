import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import LoaderBig from '~/components/LoaderBig'
const ProtectedRouts = ({ children }) => {
  const [authen, setAuthen] = useState()
  useEffect(() => {
    axios.get("/api/v1/profile").then(() => {
      setAuthen(true)
    }).catch(() => {
      setAuthen(false)
    })
  }, [])
  if (authen === true) {
    return children
  } else if (authen === false) {
    return <Navigate to='/login' />
  }
  else {
    <LoaderBig />
  }
}

ProtectedRouts.propTypes = {

}

export default ProtectedRouts
