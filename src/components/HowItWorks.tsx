import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "react-vertical-timeline-component/style.min.css";
const HowItWorks = () => {
  return (
    <section className=" py-[60px] md:py-[90px]  bg-[#F8F8F8]">
      <h2 className="text-[30px] leading-[40px]  md:text-[70px] md:leading-[80px] text-center font-semibold mb-2  md:mb-8">
        How It <span className="text-[#3d85ff]">Works</span>{" "}
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-Poppis "
          contentStyle={{ background: "#FFFF", color: "#000" }}
          contentArrowStyle={{ borderLeft: "7px solid  #000" }}
          iconStyle={{
            background: "rgba(141, 49, 245, 2)",
            color: "#000",
            width: "20px",
            height: "20px",
            margin: "-10px",
          }}
        >
          <h4 className="text-[#947efb] text-[16px] font-semibold text-right">
            01
          </h4>
          <h3 className="vertical-timeline-element-title text-[26px] font-semibold text-right">
            Search for a Facility
          </h3>
          <p className="text-right text-[16px] leading-[26px] font-normal">
            Enter your time, date, and sport to find the best facilities near
            you. Instantly check availability and get real-time updates on
            bookings. Whether it's a last-minute game or a planned event, we've
            got you covered.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-Poppis "
          contentStyle={{ background: "#FFFF", color: "#000" }}
          contentArrowStyle={{ borderLeft: "7px solid  #000" }}
          iconStyle={{
            background: "rgba(141, 49, 245, 2)",
            color: "#000",
            width: "20px",
            height: "20px",
            margin: "-10px",
          }}
        >
          <h4 className="text-[#947efb] text-[16px] font-semibold ">02</h4>
          <h3 className="vertical-timeline-element-title text-[26px] font-semibold ">
            Book Your Spot
          </h3>
          <p className=" text-[16px] leading-[26px] font-normal">
            Select your preferred time and date, and confirm your booking
            instantly. Receive immediate confirmation and enjoy a seamless
            experience without any hassle. Your perfect sports facility is just
            a few clicks away.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-Poppis "
          contentStyle={{ background: "#FFFF", color: "#000" }}
          contentArrowStyle={{ borderLeft: "7px solid  #000" }}
          iconStyle={{
            background: "rgba(141, 49, 245, 2)",
            color: "#000",
            width: "20px",
            height: "20px",
            margin: "-10px",
          }}
        >
          <h4 className="text-[#947efb] text-[16px] font-semibold ">03</h4>
          <h3 className="vertical-timeline-element-title text-[26px] font-semibold ">
            {" "}
            Enjoy Your Game
          </h3>
          <p className=" text-[16px] leading-[26px] font-normal">
            Head to the facility, show your booking confirmation, and enjoy your
            game! Arrive with confidence knowing your spot is reserved.
            Experience top-notch facilities and make the most of your playtime.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default HowItWorks;
