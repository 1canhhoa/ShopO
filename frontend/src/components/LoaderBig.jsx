import React from 'react'
import PropTypes from 'prop-types'
import { useLottie } from "lottie-react";
import SuccesAnimation from '~/Assests/animation/animation_ln9nde2g.json'
const LoaderBig = props => {
  const options = {
    animationData: SuccesAnimation,
    loop: true,
  };
  const { View } = useLottie(options)
  return (
    <div className='fixed bg-white bg-opacity-80 z-50 th-fl w-full h-screen'>
      <div className='w-60 h-60'>{View}</div>
    </div>
  )
}

LoaderBig.propTypes = {

}

export default LoaderBig
