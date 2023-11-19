import { productData } from '~/static/data'
import Tippy from '@tippyjs/react';
const QuickViewCart = () => {
  const productDataFive = productData.slice(0, 5)
  return (
    <div className='absolute z-50 hidden group-hover:block w-[400px] h-[400px] top-11 -right-2 bg-white shadow-md'>
      <Tippy
        render={attrs => (
          <div className="box" tabIndex="-1" {...attrs}>
            My tippy box
          </div>
        )}
      >
        <button>My button</button>
      </Tippy>
    </div>
  )
}
export default QuickViewCart