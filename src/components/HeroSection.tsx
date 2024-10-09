const HeroSection = () => {
  return (
    <section className="h-[60vh]  md:h-[80vh] lg:h-[50vh] xl:h-[100vh] 2xl:h-[650px] bg-[url('https://img.freepik.com/premium-photo/dynamic-sports-background-vector-sports-day-perfect-gift-certificates-banners-flyers_444642-27222.jpg?w=826')] bg-cover bg-center bg-no-repeat bg-red-500">
      <div className=" bg-[#f9f9f966]  w-full h-full  flex justify-center items-center">
        <div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
          <div className="max-w-[770px] mx-auto text-center">
            <h1 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] font-bold text-black mb-3 md:mb-5">
              Find and Book the Best Sports{" "}
              <span className="text-[#3d85ff]">Facilities</span>
            </h1>
            <p className=" text-lg md:text-xl text-black mb-3 md:mb-5">
              Your gateway to top-tier sports venues—anytime, anywhere.
            </p>
            <a href="#nav">
              <button className="bg-[#3d85ff] font-semibold text-white  px-6 py-2 rounded-full">
                Book Now
              </button>
            </a>
            <p className="mt-4 tex-black">
              Rated 4.8/5 by thousands of players
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
