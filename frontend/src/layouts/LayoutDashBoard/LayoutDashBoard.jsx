import React from 'react'
import PropTypes from 'prop-types'
import HeaderDashBoard from '~/layouts/components/HeaderDashBoard'
import DashboardSideBar from '~/layouts/components/DashboardSideBar'
import Footer from '~/layouts/components/Footer'
const LayoutDashBoard = ({ children }) => {

  return (
    <div>
      <HeaderDashBoard />
      <div className=' flex'>
        <DashboardSideBar />
        {children}
      </div>
      <Footer />
    </div>
  )
}
LayoutDashBoard.propTypes = {

}
export default LayoutDashBoard
