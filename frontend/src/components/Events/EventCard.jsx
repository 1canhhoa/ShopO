
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "~/Redux/actions/cart";
// import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { productData } from "~/static/data";
const EventCard = ({ active, data }) => {
  // const { cart } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // const addToCartHandler = (data) => {
  //   const isItemExists = cart && cart.find((i) => i._id === data._id);
  //   if (isItemExists) {
  //     toast.error("Item already in cart!");
  //   } else {
  //     if (data.stock < 1) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       const cartData = { ...data, qty: 1 };
  //       dispatch(addTocart(cartData));
  //       toast.success("Item added to cart successfully!");
  //     }
  //   }
  // }
  return (
    <div
      className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={productData[7].image_Url[0].url} alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className="text-[25px] font-[600] font-Roboto text-[#333]">{productData[7].name}</h2>
        <p className="text-base font-light">{productData[7].description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {productData[7].price}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {productData[7].discount_price}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {productData[7].total_sell} sold
          </span>
        </div>
        <CountDown data={data} />
        {/* <br />
        <div className="flex items-center">
        {/* <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer text-[#fff]`}>See Details</div>
          </Link>
          <div className={`w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div> */}
        {/* </div> */}
      </div>
    </div >
  );
};
EventCard.propTypes = {
  data: PropTypes.object,
};

export default EventCard;