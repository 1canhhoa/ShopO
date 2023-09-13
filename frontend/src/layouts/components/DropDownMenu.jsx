import { BiChevronRight } from "react-icons/bi"
function DropDownMenu({ categoriesData, setDropDown }) {
  return (
    <div className="absolute z-30  w-[270px] bg-white pb-2">
      {categoriesData.map((p) => {
        return (
          <div key={p.id} className="flex justify-between items-center px-4 py-2 border-t-[1px] border-[#efefef] cursor-pointer hover:bg-shop_main">
            <div className="flex justify-center items-center ">
              <div>{p.Logo}</div>
              <span className="pl-4 text-[12px]">{p.title}</span>
            </div>
            <BiChevronRight />
          </div>
        )
      })}
    </div>
  );
}

export default DropDownMenu;