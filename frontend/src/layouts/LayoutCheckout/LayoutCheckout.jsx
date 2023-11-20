import React, { useEffect } from 'react'
import HeaderCartPage from '~/layouts/components/HeaderCartPage'
import FooterCartPage from '~/layouts/components/FooterCartPage'
const LayoutCheckout = ({ children }) => {

  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  return (
    <div className="min-w-[375px]">
      <HeaderCartPage type='checkout' />
      <div>{children}</div>
      <FooterCartPage />
    </div>
  )
}

export default LayoutCheckout
