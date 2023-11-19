
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import {  } from 'swiper/modules';
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import SpaceCity1 from "~/assets/images/SpaceCity1.jpg";
import SpaceCity5 from "~/assets/images/SpaceCity5.jpeg";
import SpaceCity6 from "~/assets/images/SpaceCity6.jpeg";
import SpaceCity7 from "~/assets/images/SpaceCity7.jpeg";
import SpaceCity8 from "~/assets/images/SpaceCity8.jpeg";
import SpaceCity9 from "~/assets/images/SpaceCity9.jpeg";
import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";
const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity9,
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity1,
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity6,
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity7,
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity5,
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity8,
  },
];
const About = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-sky-200">
      <Swiper
        effect={'silde'}
        loop={false}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        // freeMode={true}
        // modules={[FreeMode, Pagination]}
        modules={[FreeMode, Pagination, Navigation]}
        pagination={{ el: '.swiper-pagination', dynamicBullets: false, clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        className="max-w-[70%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[65%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className=" flex flex-col gap-6 mb-10 group relative shadow-lg bg-sky-400 text-white rounded-xl px-6 py-8 h-[250px]  lg:h-[300px] sm:max-w-[215px] lg:max-w-[250px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>

        ))}
        <div className="
        swiper-button-prev after:text-xl after:text-white z-[1000]
        w-[50px] h-[50px] th-fl bg-black rounded-full absolute  left-0 top-[44%] -translate-y-1/2">
          <IoIosArrowBack size={20} color="white" />
        </div>
        <div className="th-fl z-[1000] top-[44%] swiper-button-next after:text-xl after:bg-white w-[50px] h-[50px] bg-black rounded-full absolute  right-0 -translate-y-1/2">
          <IoIosArrowForward size={20} color="white" />
        </div>
        <div className="swiper-pagination">

        </div>
      </Swiper>
    </div>
  );
};

export default About;
