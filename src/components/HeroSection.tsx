const HeroSection = () => {
  return (
    <section className="h-[60vh]  md:h-[80vh] lg:h-[50vh] xl:h-[100vh] 2xl:h-[650px] bg-[url('https://web.rabonadev.com/yanha/wp-content/uploads/sites/9/2023/12/g833.jpg')] bg-cover bg-center bg-no-repeat ">
      <div className=" bg-[#38383866]  w-full h-full  flex justify-center items-center font-Poppins">
        <div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
          <div className="max-w-[770px] mx-auto text-center">
            <h1 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] font-bold text-[#F5F5F5] mb-3 md:mb-5">
              Find and Book the Best Sports{" "}
              <span className="text-[#3d85ff]">Facilities</span>
            </h1>
            <p className=" text-lg md:text-xl text-[#F5F5F5] mb-3 md:mb-5">
              Your gateway to top-tier sports venues—anytime, anywhere.
            </p>
            <a href="#nav">
              <button className="bg-[#3d85ff] font-semibold text-white  px-6 py-2 rounded-full">
                Book Now
              </button>
            </a>
            <p className="mt-4  text-[#F5F5F5]">
              Rated 4.8/5 by thousands of players
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
