import { brands } from "~/static/data";
const Sponsored = () => {
  return (
    <div className="w-11/12 mx-auto hidden sm:block bg-white py-10 px-5 cursor-pointer rounded-xl">
      <div className="flex justify-between w-full">
        {brands.map((b, i) =>
          <div key={i} className="flex items-start">
            <img src={b.img} style={{ width: "150px", objectFit: "contain" }} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Sponsored;
