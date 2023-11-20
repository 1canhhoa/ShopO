
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "~/static/data";

const FooterCartPage = () => {
  return (
    <div className=" w-full min-w-[1216px] pt-28 mx-auto text-white">
      {/* Footer 1 */}
      <div className="bg-[#342ac8] px-4 mx-auto h-[240px] py-7">
        <h1 className=" text-3xl mb-6 font-semibold ">
          <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div className="w-[30%] mx-auto">
          <input type="text" required placeholder="Enter your email..." className="text-gray-800 w-full mr-1 mb-4 py-2.5 rounded px-2 focus:outline-none" />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie w-full">
            Submit
          </button>
        </div>
      </div>
      {/* Footer 2 */}
      <div className="bg-black grid grid-cols-1 gap-6 px-5 py-16">
        <ul className="px-5 text-center flex flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                         text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                         text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                         text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Footer 3 */}
      <div className="bg-black  grid grid-cols-1 gap-10
               text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className=" flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCartPage;
