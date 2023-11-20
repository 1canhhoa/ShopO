
import {
  MenuCategoriesIcon
} from '~/Assests/svg'
import { useState } from "react";
import { categoriesData, productData } from '~/static/data'
import DropDownMenu from './DropDownMenu.jsx'
import { ImCancelCircle } from 'react-icons/im'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import { server } from '~/contants/contant'
import InputAdornment from '@mui/material/InputAdornment';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy

const SearchData = ({ searchData, search }) => {
  return (
    <div>

      <div className='flex rounded-md absolute flex-col bg-slate-50 shadow-inner mt-4 z-50'>
        {searchData?.length !== 0 ? (<div className=" w-full max-h-[500px]  overflow-auto ">
          {searchData?.map((i, index) => {
            // "\s" : là dấu cách ( ) 
            // "\s+" : là dấu cách (nhiều dấu cách liền nhau sẽ coi là 1 dấu ) 
            const product_name = i.name.replace(/\s+/g, "-")
            return (
              <Link key={index} reloadDocument to={`/product/${product_name}`}>
                <div className="w-full hover:bg-[#38bdf8] flex justify-start items-center px-2 py-2">
                  <img
                    src={`${server}/${i.capacities[1]?.url}`}
                    alt=""
                    className="w-[40px] h-[40px] mr-[10px]"
                  />
                  <h1>{i.name}</h1>
                </div>
              </Link>
            );
          })}
        </div>) : null}
        {searchData && searchData?.length !== 0 && <span className=' p-4 border-t-[2px] border-gray-200 w-full font-semibold text-sm'>search results for: {search}</span>}
        {searchData && searchData?.length == 0 && <span className='  p-4 w-fullfont-semibold text-sm'>No results found for: {search}</span>}
      </div>

    </div>
  )
}

SearchData.propTypes = {

}

export default SearchData
