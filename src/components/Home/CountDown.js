import React from "react";
import Countdown from "react-countdown";
import "../../css/gallery.css";

const CountDown = () => {
  const Completionist = () => <span>We are now Live</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="count_down">
          <div className="cd_block">
            <div>{days < 10 ? `0${days}` : days}</div>
            <p>DAYS</p>
          </div>
          :
          <div className="cd_block">
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <p>HOURS</p>
          </div>
          :
          <div className="cd_block">
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <p>MINUTES</p>
          </div>
          :
          <div className="cd_block">
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
            <p>SECONDS</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="container">
      <div className="count_div">
        <Countdown date={Date.parse("February 24, 2023")} renderer={renderer} />
      </div>
    </div>
  );
};

export default CountDown;
