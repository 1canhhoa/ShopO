import { Link } from "react-router-dom";
import 'tippy.js/dist/tippy.css';
import { LogoApp, DeleteSearchIcon, MenuCategoriesIcon } from '~/Assests/svg'
import { useState, useRef } from "react";
import { productData } from '~/static/data'
import Header1 from "./Header1";
import { useSelector } from "react-redux";
import CategoriesMobileHeader from "./CategoriesMobileHeader";
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy
function HeaderCartPage({ type }) {
  const { loading } = useSelector(state => state.user)
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState(null);
  const inputRef = useRef()
  const handleDeleteSearch = () => {
    setSearch('')
    setSearchData('')
    inputRef.current.focus()
  }
  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearch(term)
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    if (!term) setSearchData('')
    else setSearchData(filteredProducts);
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // const elements = numbers.map((number, index) => {
  //   if (index < numbers.length - 2 && numbers[index + 1] === number + 1 && numbers[index + 2] === number + 2) {
  //     return <div key={index}>{number} - {number + 1} - {number + 2} - 3 numbers in a row</div>;
  //   } else {
  //     return <div key={index}>{number}</div>;
  //   }
  // });
  return (
    <>
      {
        loading ? null :
          <header className="mx-auto  w-[1216px] relative">
            {/* HEADER 1 */}
            <Header1 />
            {/* HEADER 2 */}
            <div className="w-full border-b-[1px] border-gray-200">
              <div className="px-[24px] mx-auto">
                <div className="flex items-center justify-between w-full min-h-[90px]">
                  <CategoriesMobileHeader />
                  <div className="flex gap-4 justify-center items-center">
                    <Link to="/">
                      <LogoApp color='bg-shop_main' />
                    </Link>
                    <span className="border-l-[1px] h-6 bg-black border-shop_main"></span>
                    <div className="text-3xl font-normal mb-1 text-shop_main">{type}</div>
                  </div>
                  {type !== 'checkout' && <div className=" search w-[500px] h-[42px]">
                    <form action="" className="flex h-full w-full  border-[1px] focus-within:border-[#d0cfcf] border-border-blur">
                      <div className=" flex items-center w-full h-full">
                        <input value={search} ref={inputRef} className="placeholder:text-sm pl-4 w-full h-[50%] outline-none" onChange={handleInputChange} type="text" placeholder="Search product..." />
                        {search && <button onClick={handleDeleteSearch} className="mr-2">
                          <DeleteSearchIcon />
                        </button>}
                      </div>
                      <button className="bg-shop_main px-6 font-medium">Search</button>
                    </form>
                    {searchData && searchData.length !== 0 ? (
                      <div className="absolute min-h-[30vh] w-[500px] bg-slate-50 shadow-sm-2 z-[9] p-4">
                        {searchData &&
                          searchData.map((i, index) => {
                            // "\s" : là dấu cách ( ) 
                            // "\s+" : là dấu cách (nhiều dấu cách liền nhau sẽ coi là 1 dấu ) 
                            const product_name = i.name.replace(/\s+/g, "-")
                            return (
                              <Link key={index} to={`/product/${product_name}`}>
                                <div className="w-full flex items-start-py-3">
                                  <img
                                    src={`${i.image_Url[0]?.url}`}
                                    alt=""
                                    className="w-[40px] h-[40px] mr-[10px]"
                                  />
                                  <h1>{i.name}</h1>
                                </div>
                              </Link>
                            );
                          })}
                      </div>
                    ) : null}
                  </div>}
                </div>
              </div>
            </div >
          </header >
      }
    </>
  )
}

export default HeaderCartPage;