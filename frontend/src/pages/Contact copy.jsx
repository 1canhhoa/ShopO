import { EmailContact, MapContact, PhoneContact } from "~/Assests/svg"
import Map from "~/components/Map"

function Contact() {
  return (
    <div className='text-3xl w-full h-full font-bold bg-slate-100 '>
      <div className=" px-8 max-w-[1216px] h-full  mx-auto">
        <div className="h-[170px] w-full bg-sky-100"></div>
        <div className=" flex justify-start items-start h-full pb-8 w-full">
          <div className="w-[50%] h-[800px] grow flex-col flex">
          </div>
          <div className="w-[50%] grow h-full p-4">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact