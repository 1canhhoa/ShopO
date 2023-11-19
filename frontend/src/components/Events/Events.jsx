
// import { useSelector } from 'react-redux';
import EventCard from "./EventCard";
import { useSelector } from "react-redux";
const Events = () => {
  const { allEvent } = useSelector(state => state.event)
  console.log('allEvent', allEvent);
  return (
    <div>
      {/* {
        !isLoading && ( */}
      <div className="w-11/12 mx-auto">
        <div className="text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]">
          <h1>Popular Events</h1>
        </div>
        <div className="w-full grid">
          {allEvent?.map((a, i) => (
            <EventCard key={i} data={a} />
          ))}
          {!allEvent && <div className="py-8 text-xl text-red-400">không có sự kiện nào ở đây</div>}
        </div>

      </div>
      {/* )
      } */}
    </div>
  )
}

export default Events