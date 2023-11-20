import { EmailContact, MapContact, PhoneContact } from "~/Assests/svg"
import Map from "~/components/Map"

function Contact() {
  return (
    <div className='text-3xl w-full h-full font-bold bg-slate-100 '>
      <div className=" px-8 max-w-[1216px] h-full  mx-auto">
        <div className="h-[170px] w-full th-fl bg-sky-100">
          Contact
        </div>

        <div className="mt-8 flex lg:flex-row flex-col pb-8 w-full">
          <div className="w-full lg:w-[50%] py-4 flex-col flex">
            <div className="font-semibold text-2xl">Contact Information</div>
            <div className="text-base font-medium  text-gray-500 mt-2">Fill the form below or write us .We will help you as soon as possible.</div>
            <div className="mt-8 flex xl:flex-row justify-between flex-col  xl:gap-8">
              <div className="flex gap-2 flex-col justify-center items-center w-full xl:w-[280px] h-[200px] bg-[#feeae5]">
                <PhoneContact />
                <div className="text-lg font-bold">PHONE</div>
                <div className="text-base font-medium">+(323) 9847 3847 383</div>
              </div>
              <div className="w-full xl:w-[280px] gap-2 flex flex-col justify-center items-center bg-[#d3efff] h-[200px]">
                <EmailContact />
                <div className="text-lg font-bold">EMAIL</div>
                <div className="text-base font-medium">Demoemail@gmail.com</div>
              </div>
            </div>
            <div className="mt-8 w-full flex gap-3 flex-col py-3 p-4 bg-[#e7f2ec] ">
              <div className="flex justify-start items-center px-10 gap-3 relative ">
                <MapContact />
                <div>
                  <div className="text-lg font-bold">ADDRESS</div>
                  <div className="text-base font-medium  text-gray-500 mt-2">4517 Washington Ave. Manchester, Road 2342,Kentucky 39495</div>
                </div>
              </div>
              <Map />

            </div>
          </div>
          <div className="w-full lg:w-[50%] pl-4 pb-4">
            <div className="w-full shadow-sm h-full px-4 py-10 bg-white">
              <div className="text-3xl">Get In Touch</div>
              <form action="" className="flex flex-col gap-6 mt-6">
                <div>
                  <div className="text-sm text-gray-500 text-medium">Frist Name*</div>
                  <input className="rounded-sm placeholder:text-sm w-full font-medium text-base py-3 pl-2 outline-none border-[1px] border-gray-400" type="text" placeholder="Search product..." />
                </div>
                <div>
                  <div className="text-sm text-gray-500 text-medium">Email Address*</div>
                  <input className="rounded-sm placeholder:text-sm w-full font-medium text-base py-3 pl-2 outline-none border-[1px] border-gray-400" type="text" placeholder="Search product..." />
                </div>
                <div>
                  <div className="text-sm text-gray-500 text-medium">Subject*</div>
                  <input className="rounded-sm placeholder:text-sm w-full font-medium text-base py-3 pl-2 outline-none border-[1px] border-gray-400" type="text" placeholder="Search product..." />
                </div>
                <div>
                  <div className="text-sm text-gray-500 text-medium">Message*</div>
                  <textarea rows={3} className="rounded-sm placeholder:text-sm w-full font-medium text-base py-3 pl-2 outline-none border-[1px] border-gray-400" type="text" placeholder="Search product..." />
                </div>
                <button className="w-full text-white bg-[#262626] text-base hover:bg-[#020617] rounded-sm py-2">Send now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact