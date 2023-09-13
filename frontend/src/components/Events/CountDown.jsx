import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);

    // if (
    //   typeof timeLeft.days === 'undefined' &&
    //   typeof timeLeft.hours === 'undefined' &&
    //   typeof timeLeft.minutes === 'undefined' &&
    //   typeof timeLeft.seconds === 'undefined'
    // ) {
    //   axios.delete(`/event/delete-shop-event/${data._id}`);
    // }
  });
  // calculate trả ra một object
  function calculateTimeLeft() {
    // const year = new Date().getFullYear();
    const difference = +new Date(`2023-9-14`) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }
  // map qua object lấy ra 4 key: days,hours,minutes,seconds
  const timerComponents = Object.keys(timeLeft).map((interval, i) => {
    if (!timeLeft[interval]) { return null; }
    return (
      <span key={i} className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <div>{calculateTimeLeft().hours}</div>
      <div>
        {timerComponents.length ? timerComponents : <span className="text-[red] text-[25px]">Times Up</span>}
      </div>
    </div>
  );
};
CountDown.propTypes = {
  data: PropTypes.object,
};

export default CountDown;