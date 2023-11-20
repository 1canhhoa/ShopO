import React from 'react'
import PropTypes from 'prop-types'

const Loader = () => {
  return (
    <div className="fixed th-fl w-full h-screen top-0 left-0 bg-gray-100 bg-opacity-50 z-50">
      <div className='th-loading'><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

Loader.propTypes = {

}

export default Loader
