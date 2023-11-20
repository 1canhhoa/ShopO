
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
import InputAdornment from '@mui/material/InputAdornment';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';// bg all
import 'tippy.js/themes/light-border.css'// border all
import 'tippy.js/animations/perspective.css'//animation tippy
import 'tippy.js/animations/shift-away.css'//animation từ trên xuống
import 'tippy.js/animations/scale.css'//animation tippy
import SearchData from './SearchData.jsx';
import { motion } from 'framer-motion'

const CategoriesMobileHeader = () => {
  const [searchData, setSearchData] = useState(null);

  const [search, setSearch] = useState('')
  const [openMobileHeader, setOpenMobileHeader] = useState(false);
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
  const variant2 = {
    initial: {
      scaleX: 0
    },
    open: {
      scaleX: 1
    },
    closed: {
      scaleX: 0
    }
  }
  return (
    <div className='flex lg:hidden'>
      {/* button when responsive */}
      <button onClick={() => setOpenMobileHeader(!openMobileHeader)} className="block lg:hidden">
        <MenuCategoriesIcon />
      </button>
      {/* {openMobileHeader && */}
      <div className={" h-screen fixed top-0 left-0 origin-left  z-50 " + (openMobileHeader ? 'bg-[#00000066] w-full' : '')}>
        <motion.div variants={variant2} initial='initial' animate={openMobileHeader ? 'open' : 'closed'} className="fixed origin-left h-screen w-[300px] flex flex-col gap-2 p-4 bg-white">
          <div className="flex justify-end">
            <ImCancelCircle onClick={() => setOpenMobileHeader(!openMobileHeader)} size={30} color="red" />
          </div>
          <Box
            component="form"
            sx={{
              width: '100%', position: 'relative', "& .MuiOutlinedInput-root": {
                paddingRight: 1
              }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name='search'
              value={search}
              sx={{ width: '100%' }}
              onChange={handleInputChange}
              id="outlined-basic" label="Search product" variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {search && <CloseIcon fontSize="small" sx={{ cursor: 'pointer', }} />}
                    <SearchIcon sx={{ cursor: 'pointer', color: '#38bdf8' }} fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
            <SearchData searchData={searchData} search={search} />
          </Box>
          {!search && <div className="th-fl gap-2">
            <span className="font-semibold">Categories</span>
            <span className="h-3 border-l-[1px] border-gray-400"></span>
            <span className="font-semibold">Main Menu</span>
          </div>}
          {!search && <DropDownMenu categoriesData={categoriesData} categoriesMobile={true} />}
        </motion.div>
      </div>
      {/* } */}
    </div>
  )
}

CategoriesMobileHeader.propTypes = {

}

export default CategoriesMobileHeader
