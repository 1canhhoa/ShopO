import React, { useEffect } from 'react'
import { motion, useInView, useAnimation, useScroll } from 'framer-motion'
import { useRef } from 'react'
const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const mainControls = useAnimation()
  // console.log("isInView", isInView);
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    } else {
      mainControls.start("hidden")
    }
  }, [isInView, mainControls])
  return (
    <div
      className='relative'
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.3, delay: 0.25 }}
        initial="hidden"
        animate={mainControls}
        data-ao
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
