import React, { useEffect, useState } from 'react'
import { productData } from '~/static/data'
import ProductCard from '~/components/ProductCard'
function Bestdeal() {
  const [data, setData] = useState([])
  useEffect(() => {
    // sắp xếp từ lớn --> bé
    const arr = productData.sort((a, b) => b.total_sell - a.total_sell)
    // lấy ra 5 thằng sell nhiều nhất
    const fisrtFive = arr.slice(0, 5)
    setData(fisrtFive)
  }, [])
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
            {data?.map((d, i) =>
              <ProductCard data={d} key={i} />
            )}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Bestdeal