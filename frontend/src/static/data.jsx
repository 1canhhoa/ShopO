import { BabyIcon, FashionIcon, FoodAndDinkIcon, FurnitureIcon, GamingIcon, MakeupIcon, MobileIcon, SportIcon, ToiletAndSanitationIcon, VehicleIcon, VideoIcon, ChevronBottom } from "~/Assests/svg";
export const navItems = [
  {
    title: "Homepage",
    url: "/",
    chevron: <ChevronBottom className="w-4 h-4" />,
    Content: [
      {
        name: 'Home One',
      },
      {
        name: 'Home Two',
      },
      {
        name: 'Home Three',
      },
      {
        name: 'Home Four',
      },
      {
        name: 'Home Five',
      },
    ]
  },
  {
    title: "Shop",
    url: "/shop",
    chevron: <ChevronBottom className="w-4 h-4" />,
    Content: [
      {
        name: 'SHOP LIST',
        item: [
          { name: "Shop Sidebar" },
          { name: "Shop Fullwidth" },
          { name: "Shop Category Icon" },
          { name: "Shop Category Icon" },
          { name: "Shop List" },
          { name: "View" }]
      },

      {
        name: 'PRODUCT LAYOUTS',
        item: [
          { name: "Horizonral Thumbnail" },
          { name: "Vertical Thumbnail" },
          { name: "Gallery Thumbnail" },
          { name: "Sticky Summary" }
        ]
      },
      {
        name: 'POLULAR CATEGORY',
        item: [
          { name: "Phone & Tablet" },
          { name: "Gaming & Sports" },
          { name: "Home Appliance" },
          { name: "Fashion Clothes" }
        ]
      },
    ]
  },
  {
    title: "FAQ",
    url: "/faq",
    chevron: <ChevronBottom className="w-4 h-4" />,
    Content: [
      {
        name: 'Privacy Policy',
      },
      {
        name: 'Terms and Conditions',
      },
      {
        name: 'FAQ',
        url: "/faq",
      },
      {
        name: 'Shop Category Icon',
      },
      {
        name: 'Shop List View',
      },
    ]
  },

];
export const navItems2 = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const shopHeader = [
  {
    name: 'SHOP LIST',
    item: ["Shop Sidebar", "Shop Fullwidth", "Shop Category Icon", "Shop Category Icon", "Shop List", "View"]
  },
  {
    name: 'PRODUCT LAYOUTS',
    item: ["Horizonral Thumbnail", "Vertical Thumbnail", "Gallery Thumbnail", "Sticky Summary",]
  },
  {
    name: 'POLULAR CATEGORY',
    item: ["Phone & Tablet", "Gaming & Sports", "Home Appliance", "Fashion Clothes"]
  },
]
// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Shipping",
    Description: "From all orders over 100$",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    Description: "Save up to 25% off",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Affortable Prices",
    Description: "Get Factory direct price",
    icon: (
      <svg
        width="32"
        height="35"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: (
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "phones & accessories",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    Logo: <MobileIcon />
  },
  {
    id: 2,
    title: "electronic device",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    Logo: <GamingIcon />
  },
  {
    id: 3,
    title: "Image & Video",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    Logo: <VideoIcon />
  },
  {
    id: 4,
    title: "Vehicles",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
    Logo: <VehicleIcon />
  },
  {
    id: 5,
    title: "Furnitures",
    subTitle: "",
    capacities:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
    Logo: <FurnitureIcon />
  },
  {
    id: 6,
    title: "Sports & travel",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    Logo: <SportIcon />
  },
  {
    id: 7,
    title: "Food & Drinks",
    subTitle: "",
    capacities: "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn",
    Logo: <FoodAndDinkIcon />
  },
  {
    id: 8,
    title: "Fashion Accessories",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
    Logo: <FashionIcon />
  },
  {
    id: 9,
    title: "Makeup Corner",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
    Logo: <MakeupIcon />
  },
  {
    id: 10,
    title: "Mother & baby",
    subTitle: "",
    capacities:
      "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn",
    Logo: <BabyIcon />
  },
];
export const categoriesDataFull = [
  {
    id: 1,
    title: "phones & accessories",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
    Logo: <MobileIcon />
  },
  {
    id: 2,
    title: "electronic device",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5_tn",
    Logo: <GamingIcon />
  },
  {
    id: 3,
    title: "Image & Video",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d_tn",
    Logo: <VideoIcon />
  },
  {
    id: 4,
    title: "Vehicles",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334_tn",
    Logo: <VehicleIcon />
  },
  {
    id: 5,
    title: "Furnitures",
    subTitle: "",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
    Logo: <FurnitureIcon />
  },
  {
    id: 6,
    title: "Sports & travel",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4_tn",
    Logo: <SportIcon />
  },
  {
    id: 7,
    title: "Food & Drinks",
    subTitle: "",
    url: "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889_tn",
    Logo: <FoodAndDinkIcon />
  },
  {
    id: 8,
    title: "Fashion Accessories",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
    Logo: <FashionIcon />
  },
  {
    id: 9,
    title: "Makeup Corner",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72_tn",
    Logo: <MakeupIcon />
  },
  {
    id: 10,
    title: "Mother & baby",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e_tn",
    Logo: <BabyIcon />
  },
  {
    id: 11,
    title: "Men's Fashion",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
    Logo: <BabyIcon />
  },
  {
    id: 12,
    title: "Women's Fashion",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
    Logo: <BabyIcon />
  },
  {
    id: 13,
    title: "Clock",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260_tn",
    Logo: <BabyIcon />
  },
  {
    id: 14,
    title: "Men's shoes",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
    Logo: <BabyIcon />
  },
  {
    id: 15,
    title: "Women's shoes",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847_tn",
    Logo: <BabyIcon />
  },
  {
    id: 16,
    title: "Household electrical appliances",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857_tn",
    Logo: <BabyIcon />
  },
  {
    id: 17,
    title: "home and life",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f_tn",
    Logo: <BabyIcon />
  },
  {
    id: 18,
    title: "health",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747_tn",
    Logo: <BabyIcon />
  },
  {
    id: 19,
    title: "women's purse",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
    Logo: <BabyIcon />
  },
  {
    id: 20,
    title: "men's backpacks & wallets",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
    Logo: <BabyIcon />
  },
  {
    id: 21,
    title: "online bookstore",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139_tn",
    Logo: <BabyIcon />
  },
  {
    id: 22,
    title: "toy",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684_tn",
    Logo: <BabyIcon />
  },
  {
    id: 23,
    title: "take care of the pet",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
    Logo: <BabyIcon />
  },
  {
    id: 24,
    title: "child fashion",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
    Logo: <BabyIcon />
  },
  {
    id: 25,
    title: "laundry and taking care of the house",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
    Logo: <BabyIcon />
  },
  {
    id: 26,
    title: "Vouchers & services",
    subTitle: "",
    url:
      "https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
    Logo: <BabyIcon />
  },

];
// product Data
export const productData = [
  {
    id: 9,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    images: [
      '1a466d100fbb431996b49e10127cf383-1697009207096-74570529.png',
      '3aaade086d08751f776049fdc99f4c6e-1697009207096-211759638.png',
      '3af324bc17f502e8b1898fd5a2b01844-1697009207098-771356926.png',
      '7bb6d3ae9b86f3d7a7b1ca0e48ec311a-1697009207098-143280487.png',
      'ac7bb23a4358efd92fdcd887fd17023d-1697009207099-214047532.png',
      'b7addff24c257ae552ee31f16a23af7c-1697009207099-724518975.png',
      'bdda15455bac30f5bc2b404752bbe3ba-1697009207100-294544908.png',
      'c1b2e42986f73de8bedb2282e2687626-1697009207101-655624072.png',
      '198720e37eeccfcdc98c6ea87f5decaa-1697009207101-490880557.png'
    ],
    capacities: [
      {
        name: 'gold',
        url: "ac7bb23a4358efd92fdcd887fd17023d-1697009207094-170440287.png",
        capacity: [
          { capacity: "128GB", priceCapacity: 0 },
          { capacity: "516GB", priceCapacity: 100 },
          { capacity: "1T", priceCapacity: 200 }
        ],
      },
      {
        name: "purple",
        url: "93b3f6d4799b06f9279f817540daa4d1 (1)-1697009207094-956308047.png",
        capacity: [
          { capacity: "128GB", priceCapacity: 0 },
          { capacity: "516GB", priceCapacity: 100 },
          { capacity: "1T", priceCapacity: 200 }
        ],
      },
      {
        name: "black",
        url: "8d928132d881eaf81f19a9e77bfd31a4-1697009207095-697242145.png",
        capacity: [
          { capacity: "128GB", priceCapacity: 0 },
          { capacity: "516GB", priceCapacity: 100 },
          { capacity: "1T", priceCapacity: 200 }
        ],
      },
      {
        name: "white",
        url: "8d928132d881eaf81f19a9e77bfd31a4-1697009207095-306319424.png",
        capacity: [
          { capacity: "128GB", priceCapacity: 0 },
          { capacity: "516GB", priceCapacity: 100 },
          { capacity: "1T", priceCapacity: 200 }
        ],
      },
    ],
    shop: {
      city: "Hanoi",
      name: "Amazon Ltd",
      avatar: "images (5)-1696863832256-33246516.png",
      ratings: 4.2,
    },
    originalPrice: 1299,
    discountPrice: 1099,
    rating: 5,
    Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    Capacity: ["128GB", "516GB", "1TB"],
    sold_out: 20,
    stock: 10,
    city: "Hanoi"
  },
  {
    id: 4,
    category: "Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    images: [
      '1a466d100fbb431996b49e10127cf383-1697009207096-74570529.png',
      '3aaade086d08751f776049fdc99f4c6e-1697009207096-211759638.png',
      '3af324bc17f502e8b1898fd5a2b01844-1697009207098-771356926.png',
      '7bb6d3ae9b86f3d7a7b1ca0e48ec311a-1697009207098-143280487.png',
      'ac7bb23a4358efd92fdcd887fd17023d-1697009207099-214047532.png',
      'b7addff24c257ae552ee31f16a23af7c-1697009207099-724518975.png',
      'bdda15455bac30f5bc2b404752bbe3ba-1697009207100-294544908.png',
      'c1b2e42986f73de8bedb2282e2687626-1697009207101-655624072.png',
      '198720e37eeccfcdc98c6ea87f5decaa-1697009207101-490880557.png'
    ],
    capacities: [
      {
        name: "yellow",
        url: "ac7bb23a4358efd92fdcd887fd17023d-1697009207094-170440287.png",
        capacity: [
          { capacity: "128GB", priceCapacity: 0 },
          { capacity: "516GB", priceCapacity: 100 },
          { capacity: "1T", priceCapacity: 200 }
        ],
      },
      {
        name: "gray",
        url: "8d928132d881eaf81f19a9e77bfd31a4-1697009207095-306319424.png",
        capacity: [
          { capacity: "128GB", priceCapacity: 0 },
          { capacity: "516GB", priceCapacity: 100 },
          { capacity: "1T", priceCapacity: 200 }
        ],
      },
      {
        name: "black",
        url: "8d928132d881eaf81f19a9e77bfd31a4-1697009207095-697242145.png",
        Capacity: [
          { rom: "128GB", price: 0 },
          { rom: "516GB", price: 100 },
          { rom: "1T", price: 200 }
        ],
      }
    ],
    Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    shop: {
      city: "Hanoi",
      name: "Shahriar Watch House",
      avatar: "images (5)-1696863832256-33246516.png",
      ratings: 4.2,
      category: "Others"
    },
    originalPrice: 100,
    discountPrice: 79,
    Capacity: ["128GB", "516GB", "1TB"],
    rating: 4,
    sold_out: 12,
    stock: 10,
    city: "Hanoi"
    // },
    // {
    //   id: 8,
    //   name: "Gaming Headphone Asus with mutiple color and free delivery",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://down-vn.img.susercontent.com/file/5545cdee9bdd62674c990f83e051a22b",
    //     },
    //     {
    //       name: "white",
    //       url: "https://down-vn.img.susercontent.com/file/5545cdee9bdd62674c990f83e051a22b",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Asus Ltd",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   originalPrice: 300,
    //   discountPrice: 239,

    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],
    //   rating: 4.5,
    //   reviews: [
    //     {
    //       user: {
    //         // user object will be here
    //       },
    //       comment: "IT's so cool!",
    //       rating: 5,
    //     },
    //   ],
    //   sold_out: 20,
    //   stock: 10,
    //   city: "Caobang"
    // },
    // {
    //   id: 10,
    //   category: "Music and Gaming",
    //   name: "Gaming Headphone Asus with mutiple color and free delivery",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
    //     },
    //     {
    //       name: "white",
    //       url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Asus Ltd",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   originalPrice: 300,
    //   discountPrice: 239,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],

    //   rating: 4.5,
    //   reviews: [
    //     {
    //       user: {
    //         // user object will be here
    //       },
    //       comment: "IT's so cool!",
    //       rating: 5,
    //     },
    //   ],
    //   sold_out: 20,
    //   stock: 10,
    //   city: "Hanoi"
    // },
    // {
    //   id: 7,
    //   name: "New Fashionable Watch for men 2023 with multiple colors",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
    //     },
    //     {
    //       name: "white",
    //       url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Shahriar Watch House",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 2,
    //   },
    //   originalPrice: 100,
    //   discountPrice: 79,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],
    //   rating: 2,
    //   sold_out: 62,
    //   stock: 10,
    //   city: "Sapa"
    // },
    // {
    //   id: 6,
    //   name: "Gaming Headphone Asus with mutiple color and free delivery",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
    //     },
    //     {
    //       name: "white",
    //       url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Asus Ltd",
    //     avatar: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   originalPrice: 300,
    //   discountPrice: 239,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],

    //   rating: 4.5,
    //   reviews: [
    //     {
    //       user: {
    //         // user object will be here
    //       },
    //       comment: "IT's so cool!",
    //       rating: 5,
    //     },
    //   ],
    //   sold_out: 20,
    //   stock: 10,
    //   category: "Music and Gaming",
    //   city: "Tp.HCM"
    // },
    // {
    //   id: 1,
    //   category: "Computers and Laptops",
    //   name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
    //     },
    //     {
    //       name: "white",
    //       url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Apple inc.",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   originalPrice: 1099,
    //   discountPrice: 1049,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],
    //   rating: 4,
    //   sold_out: 35,
    //   stock: 10,
    //   city: "hanoi"
    // },
    // {
    //   id: 2,
    //   category: "Mobile and Tablets",
    //   name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    //     },
    //     {
    //       name: "white",
    //       url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Amazon Ltd",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   discountPrice: 1099,
    //   rating: 5,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Green", "Pink", "Blue", "Green", "Pink", "Blue", "Green", "Pink"],
    //   sold_out: 80,
    //   stock: 10,
    //   city: "Tp.HCM"
    // },
    // {
    //   id: 3,
    //   category: "Computers and Laptop",
    //   name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
    //     },
    //     {
    //       name: "white",
    //       url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Apple inc.",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   originalPrice: 1099,
    //   discountPrice: 1049,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],

    //   rating: 4,
    //   sold_out: 75,
    //   stock: 10,
    //   city: "Danang"
    // },
    // {
    //   id: 5,
    //   category: "Shoes",
    //   name: "New Trend shoes for gents with all sizes",
    //   description:
    //     "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    //   images: [
    //     'https://down-vn.img.susercontent.com/file/93b3f6d4799b06f9279f817540daa4d1',
    //     'https://down-vn.img.susercontent.com/file/3af324bc17f502e8b1898fd5a2b01844',
    //     'https://down-vn.img.susercontent.com/file/b7addff24c257ae552ee31f16a23af7c',
    //     'https://down-vn.img.susercontent.com/file/198720e37eeccfcdc98c6ea87f5decaa',
    //     'https://down-vn.img.susercontent.com/file/7bb6d3ae9b86f3d7a7b1ca0e48ec311a',
    //     'https://down-vn.img.susercontent.com/file/bdda15455bac30f5bc2b404752bbe3ba',
    //     'https://down-vn.img.susercontent.com/file/3aaade086d08751f776049fdc99f4c6e',
    //     'https://down-vn.img.susercontent.com/file/c1b2e42986f73de8bedb2282e2687626',
    //     'https://down-vn.img.susercontent.com/file/1a466d100fbb431996b49e10127cf383'
    //   ],
    //   capacities: [
    //     {
    //       name: "black",
    //       url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
    //     },
    //     {
    //       name: "white",
    //       url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
    //     },
    //   ],
    //   shop: {
    //     city: "Hanoi",
    //     name: "Alisha Shoes Mart",

    //     url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
    //     ratings: 4.2,
    //   },
    //   originalPrice: 120,
    //   Classify: ["Gold", "Deep Purple", "Silver", "Space_Black", "Blue", "Pink", "Gray"],
    //   Capacity: ["128GB", "516GB", "1TB"],
    //   discountPrice: 89,
    //   rating: 5,
    //   sold_out: 49,
    //   stock: 10,
    //   city: "Thaibinh"
    // },
  }
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about"
  },
  {
    name: "Careers",
    link: "/carrers"
  },
  {
    name: "Store Locations",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];
export const footercompanyLinks = [
  {
    name: "Game & Video",
  },
  {
    name: "Phone &Tablets",
  },
  {
    name: "Computers & Laptop",
  },
  {
    name: "Sport Watches",
  },
  {
    name: "Events",
  },
];
export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
]
export const brands = [
  {
    brand_name: "Sony",
    img: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
  },
  {
    brand_name: "Dell",
    img: "https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
  },
  {
    brand_name: "LG",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png"
  },
  {
    brand_name: "Apple",
    img: "https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
  },
  {
    brand_name: "Microsoft",
    img: "data:image/png;base64,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"
  },
]
export const faqs = [
  {
    id: 2,
    question: "What is your return policy?",
    answer: "If youre not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why youre returning the item."
  },
  {
    id: 3,
    question: "How do I track my order?",
    answer: "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details."
  },
  {
    id: 4,
    question: "How do I contact customer support??",
    answer: "You can contact our customer support team by emailing us at support@myecommercestore.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday."
  },
  {
    id: 5,
    question: "Can I change or cancel my order??",
    answer: "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery."
  },
  {
    id: 6,
    question: "Do you offer international shipping?",
    answer: "Currently, we only offer shipping within the United States."
  },

  {
    id: 1,
    question: "What payment methods do you accept?",
    answer: "We accept visa,mastercard,paypal payment method also we have cash on delivery system."
  },
]
export const citys = [
  { city: 'An Giang' },
  { city: 'Bà Rịa – Vũng Tàu' },
  { city: 'Bắc Giang' },
  { city: 'Bắc Kạn' },
  { city: 'Bạc Liêu' },
  { city: 'Bắc Ninh' },
  { city: 'Bến Tre' },
  { city: 'Bình Định' },
  { city: 'Bình Dương' },
  { city: 'Bình Phước' },
  { city: 'Bình Thuận' },
  { city: 'Cà Mau' },
  { city: 'Cần Thơ' },
  { city: 'Cao Bằng' },
  { city: 'Đà Nẵng' },
  { city: 'Đắk Lắk' },
  { city: 'Đắk Nông' },
  { city: 'Điện Biên' },
  { city: 'Đồng Nai' },
  { city: 'Đồng Tháp' },
  { city: 'Gia Lai' },
  { city: 'Hà Giang' },
  { city: 'Hà Nam' },
  { city: 'Hà Nội' },
  { city: 'Hà Tĩnh' },
  { city: 'Hải Dương' },
  { city: 'Hải Phòng' },
  { city: 'Hậu Giang' },
  { city: 'Hòa Bình' },
  { city: 'Hưng Yên' },
  { city: 'Khánh Hòa' },
  { city: 'Kiên Giang' },
  { city: 'Kon Tum' },
  { city: 'Lai Châu' },
  { city: 'Lâm Đồng' },
  { city: 'Lạng Sơn' },
  { city: 'Lào Cai' },
  { city: 'Long An' },
  { city: 'Nam Định' },
  { city: 'Nghệ An' },
  { city: 'Ninh Bình' },
  { city: 'Ninh Thuận' },
  { city: 'Phú Thọ' },
  { city: 'Phú Yên' },
  { city: 'Quảng Bình' },
  { city: 'Quảng Nam' },
  { city: 'Quảng Ngãi' },
  { city: 'Quảng Ninh' },
  { city: 'Quảng Trị' },
  { city: 'Sóc Trăng' },
  { city: 'Sơn La' },
  { city: 'Tây Ninh' },
  { city: 'Thái Bình' },
  { city: 'Thái Nguyên' },
  { city: 'Thanh Hóa' },
  { city: 'Thừa Thiên Huế' },
  { city: 'Tiền Giang' },
  { city: 'TP Hồ Chí Minh' },
  { city: 'Trà Vinh' },
  { city: 'Tuyên Quang' },
  { city: 'Vĩnh Long' },
  { city: 'Vĩnh Phúc' },
  { city: 'Yên Bái' }
]
export const addressData = [
  {
    city: 'Hà Nội',
    district: ["Quận Ba Đình",
      "Quận Hoàn Kiếm",
      "Quận Tây Hồ,",
      "Quận Long Biên",
      "Quận Cầu Giấy",
      "Quận Đống Đa",
      "Quận Hai Bà Trưng",
      "Quận Hoàng Mai",
      "Quận Thanh Xuân",
      "Huyện Sóc Sơn",
      "Huyện Đông Anh",
      "Huyện Gia Lâm",
      "Quận Nam Từ Liêm",
      "Huyện Thanh Trì",
      "Quận Bắc Từ Liêm",
      "Huyện Mê Linh",
      "Quận Hà Đông",
      "Thị xã Sơn Tây",
      "Huyện Ba Vì,",
      "Huyện Phúc Thọ",
      "Huyện Đan Phượng",
      "Huyện Hoài Đức",
      "Huyện Quốc Oai",
      "Huyện Thạch Thất",
      "Huyện Chương Mỹ",
      "Huyện Thanh Oai",
      "Huyện Thường Tín",
      "Huyện Phú Xuyên",
      "Huyện Ứng Hòa",
      "Huyện Mỹ Đức",]
  },
  {
    city: 'TP HCM',
    district: ["Quận 1",
      "Quận 12",
      "Quận Thủ Đức",
      "Quận 9",
      "Quận Gò Vấp",
      "Quận Bình Thạnh",
      "Quận Tân Bình",
      "Quận Tân Phú",
      "Quận Phú Nhuận",
      "Quận 2",
      "Quận 3",
      "Quận 10",
      "Quận 11",
      "Quận 4",
      "Quận 5",
      "Quận 6",
      "Quận 8",
      "Quận Bình Tân",
      "Quận 7",
      "Huyện Củ Chi",
      "Huyện Hóc Môn",
      "Huyện Bình Chánh",
      "Huyện Nhà Bè",
      "Huyện Cần Giờ",]
  },
  {
    city: 'Hà Giang',
    district: ["Thành phố Hà Giang",
      "Huyện Đồng Văn",
      "Huyện Mèo Vạc",
      "Huyện Yên Minh",
      "Huyện Quản Bạ",
      "Huyện Vị Xuyên",
      "Huyện Bắc Mê",
      "Huyện Hoàng Su Phì",
      "Huyện Xín Mần",
      "Huyện Bắc Quang",
      "Huyện Quang Bình",]
  },
  {
    city: 'Cao Bằng',
    district: [
      'Thành phố Cao Bằng',
      'Huyện Bảo Lâm',
      'Huyện Bảo Lạc',
      'Huyện Thông Nông',
      'Huyện Hà Quảng',
      'Huyện Trà Lĩnh',
      'Huyện Trùng Khánh',
      'Huyện Hạ Lang',
      'Huyện Quảng Uyên',
      'Huyện Phục Hoà',
      'Huyện Hoà An',
      'Huyện Nguyên Bình',
      'Huyện Thạch An']
  },
  {
    city: 'Bắc Kạn',
    district: [
      'Thành Phố Bắc Kạn',
      'Huyện Pác Nặm',
      'Huyện Ba Bể',
      'Huyện Ngân Sơn',
      'Huyện Bạch Thông',
      'Huyện Chợ Đồn',
      'Huyện Chợ Mới',
      'Huyện Na Rì',]
  },
  {
    city: 'Tuyên Quang',
    district: ["Thành phố Tuyên Quang",
      "Huyện Lâm Bình",
      "Huyện Nà Hang",
      "Huyện Chiêm Hóa",
      "Huyện Hàm Yên",
      "Huyện Yên Sơn",
      "Huyện Sơn Dương",]
  },
  {
    city: 'Lào cai',
    district: ["Huyện Bát Xát",
      "Thành phố Lào Cai",
      "Huyện Mường Khương",
      "Huyện Si Ma Cai",
      "Huyện Bắc Hà",
      "Huyện Bảo Thắng",
      "Huyện Bảo Yên",
      "Huyện Sa Pa",
      "Huyện Văn Bàn",]
  }
]
