import React, { useEffect, useState } from 'react'
import { productData } from '~/static/data'
import ProductCard from '~/components/Products/ProductCard'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../Reveal'
function Bestdeal() {
  const [data, setData] = useState([]);
  const { allProduct } = useSelector((state) => state.product);
  useEffect(() => {
    const allProductsData = allProduct ? [...allProduct] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProduct]);

  return (
    <div className='w-full' >
      <div className="w-[80%] mx-auto">
        <div className='w-full mt-8'>
          <div className=' text-shop_main font-medium text-xl py-4 pl-4'> Best deal</div>
          <ul
            className="grid border-0 mb-12
            gap-[20px]  md:gap-[25px]  lg:gap-[25px]  xl:gap-[30px] 
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          >
            {data && data?.length !== 0 && data.map((d, i) =>
              <Reveal>
                <ProductCard data={d} key={i} />
              </Reveal>
            )}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Bestdeal