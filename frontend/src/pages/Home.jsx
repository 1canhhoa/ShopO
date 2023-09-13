import React from 'react'
import Hero from '~/components/Hero'
import Categories from '~/components/Categories'
import Bestdeal from '~/components/Bestdeal'
import FeatureProduct from '~/components/FeatureProduct'
import Events from '~/components/Events/Events'
import Sponsored from '~/components/Sponsored'
import Footer from '~/layouts/components/Footer'
function Home() {
  return (
    <div className=' bg-bgr-page pb-20'>
      <Hero />
      <Categories />
      <Bestdeal />
      <FeatureProduct />
      <Events />
      <Sponsored />
    </div>

  )
}

export default Home