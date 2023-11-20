import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productData } from "../../static/data";
import ProductCard from "~/components/Products/ProductCard";

const SuggestsProduct = ({ data }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);
    setProducts(d);
  }, []);
  return (
    <div className="bg-slate-100 pb-8">
      {data ? (
        <div className='w-[90%] bg-white p-4 mx-auto'>
          <h2
            className={`text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {
              products && products.map((p, index) => (
                <ProductCard data={p} key={index} />
              ))
            }
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SuggestsProduct
