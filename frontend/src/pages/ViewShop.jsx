import React from 'react'
import PropTypes from 'prop-types'
import DashBoardOverView from '~/components/Shop/DashBoardOverView'
const ViewShop = props => {
  return (
    <div className='th-fl'>
      <DashBoardOverView isOwner={false} />
    </div>
  )
}

ViewShop.propTypes = {

}

export default ViewShop
