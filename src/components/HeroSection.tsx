
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className=" py-[60px] lg:pt-[140px] lg:pb-[90px]">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
        <div className="max-w-[770px] mx-auto text-center">
          <h1 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] font-bold text-black mb-2 md:mb-5">
            Find and Book the Best Sports{" "}
            <span className="text-[#3d85ff]">Facilities</span>
          </h1>
          <p className=" text-lg md:text-xl text-black mb-2 md:mb-5">
            Your gateway to top-tier sports venues—anytime, anywhere.
          </p>
          <Link to="">
            <button className="bg-[#3d85ff] font-semibold text-white  px-6 py-2 rounded-full">
              Book Now
            </button>
          </Link>
          <p className="mt-4 text-white">Rated 4.8/5 by thousands of players</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
