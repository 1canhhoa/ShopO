import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import LoaderBig from '~/components/LoaderBig';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '~/components/Products/ProductCard';
const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProduct, isLoading } = useSelector((state) => state.product);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      setData(allProduct);
    } else {
      const d = allProduct && allProduct.filter((i) => i.category.replace(/[;,/?:@&=+$-_.!~*'()#]/g, '') === categoryData);
      setData(d);
    }
  }, [allProduct]);
  return (
    <div>
      {
        isLoading ? (
          <LoaderBig />
        ) : (
          <div className='w-11/12 mx-auto pt-10'>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">
                No products Found!
              </h1>
            ) : null}
          </div>
        )
      }

    </div>
  )
}

ProductsPage.propTypes = {

}

export default ProductsPage
