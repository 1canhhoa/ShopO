import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      className="min-h-[70vh] w-full relative bg-no-repeat"
      style={{ minHeight: '500px', backgroundImage: `url("https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg")` }}
    >
      <div className="w-full absolute min-h-full  flex items-center justify-center ">
        <div className="w-[70%] md:w-[90%] min-h-full xl:w-[60%] flex flex-col items-start justify-center mb-40">
          <h1
            className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
          >
            Best Collection for <br /> home Decoration
          </h1>
          <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
            quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
            <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products" className="bg-black flex items-center justify-center rounded-md w-[130px]">
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Hero;