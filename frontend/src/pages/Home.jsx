
import Hero from '~/components/Home/Hero'
import Categories from '~/components/Home/Categories'
import Bestdeal from '~/components/Home/Bestdeal'
import FeatureProduct from '~/components/Home/FeatureProduct'
import Events from '~/components/Events/Events'
import Sponsored from '~/components/Home/Sponsored'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionGetAllProduct } from '~/Redux/actions/product'
import { ActionGetAllEvent } from '~/Redux/actions/event'
import PayPal from '~/components/Checkout/Paypal'
function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ActionGetAllProduct())
    dispatch(ActionGetAllEvent())
  }, [])
  return (
    <div className=' bg-bgr-page pb-20'>
      <Hero />
      <Categories />
      <Bestdeal />
      <FeatureProduct />{/* productCard */}
      <Events />
      <Sponsored />
      <PayPal />
    </div>

  )
}

export default Home