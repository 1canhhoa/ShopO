import axios from "axios";
import { useEffect, useRef } from "react";
import { BiChevronRight } from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
function DropDownMenu({ categoriesMobile, categoriesData, setDropDown, dropDown }) {
  const navigate = useNavigate()
  const handleCategories = (title) => {
    const t = title.replace(/[;,/?:@&=+$-_.!~*'()#]/g, '')
    navigate(`/products?category=${t}`);
    setDropDown(false);
    window.location.reload();
  }

  const dropdownVariants = {
    open: {
      // clipPath: "circle(1200px at 50px 50px)",
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    closed: {
      // clipPath: "circle(0px at 0px 0px)",
      scaleY: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 50,
      },
    },
  };


  const containerVars = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        damping: 40
      },
    },
    closed: {
      y: 200,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <motion.div
      // ref={ref}
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
      variants={dropdownVariants}
      animate={dropDown ? "open" : !categoriesMobile ? "closed" : ''}
      initial={{ scaleY: !categoriesMobile ? 0 : 1 }}
      className={" z-30 origin-top w-[270px] overflow-hidden bg-white pb-2 " + (!categoriesMobile ? 'absolute' : null)}>
      <motion.div variants={containerVars} className="overflow-hidden">
        {categoriesData?.map((p) => {
          return (

            <motion.div onClick={() => handleCategories(p.title)} variants={containerVars} key={p.id} className={"flex overflow-hidden justify-between items-center px-4 border-t-[1px] border-[#efefef] cursor-pointer hover:bg-shop_main " + (!categoriesMobile ? 'py-2' : 'py-4')} >
              <div className="flex justify-center items-center ">
                <div>{p.Logo}</div>
                <span className="pl-4 text-[12px]">{p.title}</span>
              </div>
              <BiChevronRight />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div >
  );
}

export default DropDownMenu;