import React from "react";

const Newslter = () => {
  return (
    <section className="py-[50px] md:py-[70px] ">
      <div className="max-w-[1170px] px-5 xl:px-0 mx-auto bg-[#4F55C1] rounded-[10px]">
        <div className="max-w-[650px] mx-auto py-[60px]  ">
          <h1 className=" text-[40px] leading-[50px]  lg:text-[50px] lg:leading-[60px] text-center font-Poppis font-semibold mb-5 text-white">
            Get notified when we add new Facility.
          </h1>
          <p className="text-center text-[16px] leading-[26px] text-[#fff] mb-5">
            Twice a month I share the best Facility, UI kits and components in
            my newsletter. 525 sports hackers find it useful. I'd love you to
            join.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 max-w-md justify-center mx-auto">
            <input
              type="email"
              className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#3651BF] focus:border-transparent"
              required
              placeholder="Email"
            />
            <button
              className="px-4 py-2 text-base font-semibold text-white bg-[#ffb031] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newslter;
