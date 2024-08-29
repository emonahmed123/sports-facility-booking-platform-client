import Lottie from "lottie-react";

import support from "@/assets/support.json";
import selection from "@/assets/selection.json";
const WhyChooseus = () => {
  return (
    <section className="py-[60px] md:py-[90px]">
      <div className=" max-w-[1170px] mx-auto px-5 xl:px-0">
        <h1 className="text-center font-bold  text-[36px] leading-[46px]    md:text-[60px] md:ledaing-[70px] mb-10">
          {" "}
          Why <span className="text-[#3d85ff] ">Choose</span> Us{" "}
        </h1>

        <p className="text-[16px] leading-[26px] font-mono max-w-[570px] mx-auto text-center">
          Discover what sets us apart in the sports facility industry, where we
          emphasize our dedication to quality, exceptional service, and a
          passion for providing the best sports experience tailored to your
          needs.
        </p>
        {/* body */}
        <div className="space-y-5 mt-5">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* details */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold">
                State-of-the-Art Facilities
              </h2>
              <ul className="space-y-3 mt-5 list-disc ml-4">
                <li>
                  <span className="font-semibold">Cutting-Edge Equipment:</span>{" "}
                  Train with the latest equipment and technology designed to
                  enhance your performance and experience.
                </li>
                <li>
                  <span className="font-semibold">Diverse Sports Options:</span>{" "}
                  Access a wide range of sports, from traditional to emerging
                  activities, all under one roof.
                </li>
                <li>
                  <span className="font-semibold">Customizable Packages:</span>{" "}
                  Tailor your membership or booking options to fit your unique
                  needs and preferences.
                </li>
              </ul>
            </div>
            {/* image container */}
            <div className="flex-1">
              <Lottie
                animationData={selection}
                loop={true}
                className="h-[400px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            {/* image container */}
            <div className="flex-1">
              <Lottie
                animationData={support}
                loop={true}
                className="h-[400px] w-full"
              />
            </div>
            {/* details */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold">
                Unmatched Customer Experience
              </h2>
              <ul className="space-y-3 mt-5 list-disc ml-4">
                <li>
                  <span className="font-semibold">Expert Guidance:</span> Our
                  experienced staff is always available to offer personalized
                  support and advice to help you achieve your fitness goals.
                </li>
                <li>
                  <span className="font-semibold">Flexible Booking:</span> Enjoy
                  the convenience of easy and flexible booking options, whether
                  for one-time use or regular sessions.
                </li>
                <li>
                  <span className="font-semibold">Ongoing Support:</span> We
                  provide continuous support, including maintenance of
                  facilities and access to additional resources to ensure your
                  experience is top-notch.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
