import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '~/static/data'
import ProductDetails from '~/components/Products/ProductDetails'
import SuggestsProduct from '~/components/Products/SuggestsProduct'
import { useSelector } from 'react-redux'
const ProductDetailsPage = () => {
  const { name } = useParams()
  const [data, setData] = useState(null)
  const productName = name.replace(/-/g, ' ')
  const { allProduct } = useSelector(state => state.product)

  useEffect(() => {
    const product = allProduct?.find(p => p.name === productName)
    setData(product)
  }, [])
  return (
    <div>
      <ProductDetails data={data} /> {/*--> ProductDetailsInfo  */}
      {data && <SuggestsProduct data={data} />}
    </div>
  )
}

export default ProductDetailsPage
