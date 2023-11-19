
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { productData } from "~/static/data";
const EventCard = ({ active, data }) => {
  return (
    <div
      className={`w-full block gap-4 bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}
    >
      <div className="w-full lg:-w[50%] m-auto">
        <img src={`http://localhost:4000/${data.images[0]}`} alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className="text-[25px] font-[600] font-Roboto text-[#333]">{data.name}</h2>
        <p className="text-base font-light">{data.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              {data.originalPrice}$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data.discountPrice}$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {data.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
      </div>
    </div >
  );
};
EventCard.propTypes = {
  data: PropTypes.object,
};

export default EventCard;