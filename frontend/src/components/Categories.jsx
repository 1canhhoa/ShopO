import { brandingData, categoriesDataFull } from '~/static/data'
import { BiChevronRight } from 'react-icons/bi'
function Categories() {
  return (
    <>
      {/* brandingData */}
      <div className='w-full'>
        <div className=' w-[95%] lg:w-[80%] mx-auto'>
          <div className='w-full flex-wrap flex justify-between items-center bg-white px-4 py-4 mt-6'>
            {brandingData.map((b) => {
              return (
                <div key={b.id} className='flex my-2 870:mx-0 justify-center items-center'>
                  <span className='pr-4'>{b.icon}</span>
                  <div className=''>
                    <div className='text-base'>{b.title}</div>
                    <div className='text-xs font-light'>{b.Description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className='w-full'>
        <div className='w-[95%] lg:w-[80%] mx-auto'>
          <div className=' w-full relative flex flex-col justify-between items-start bg-white mt-6'>
            <div className=' text-shop_main font-medium text-xl py-4 pl-4'> Categories</div>
            <ul className='h-[300px] w-full overflow-auto flex flex-col flex-wrap'>
              {categoriesDataFull.map((b) => {
                return (
                  <li key={b.id} className='cursor-pointer flex !w-[130px] flex-shrink h-[150px] flex-col justify-center items-center border-[1px] border-border-blur'>
                    <div
                      className='min-h-[80px] w-[80px] relative bg-no-repeat'
                      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${b.image_Url})` }} >
                    </div>
                    <span className='text-sm text-center font-light'>{b.title}</span>
                  </li>
                )
              })}
            </ul>
            <BiChevronRight className='cursor-pointer absolute top-1/2 hover:-right-[1.8%] -right-[1%] bg-slate-200 hover:w-10 hover:top-[49%] hover:h-10 w-6 h-6 rounded-full' />
          </div>
        </div>
      </div>
    </>


  );
}

export default Categories;