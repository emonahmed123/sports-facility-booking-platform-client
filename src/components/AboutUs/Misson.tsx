import Lottie from 'lottie-react';
import React from 'react';
import mission from "@/assets/mission.json";
import purpose from "@/assets/purpose.json";
const Misson = () => {

    return (
   <section className='py-[60px] md:py-[90px] '>

<div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
 
    <h1  className='text-center font-bold  text-[36px] leading-[46px]    md:text-[60px] md:ledaing-[70px] '  >Our <span className='text-[#3d85ff] '>Mission</span>   </h1>
  
    <div className="flex flex-col-reverse md:flex-row items-center">
      {/* details */}
      <div className="space-y-5 flex-1 text-justify">
        <p className='text-[16px] leading-[26px] font-mono font-bold'>
          At RideWave, our mission is to elevate the sports experience for everyone by providing unparalleled access to top-quality sports facilities. We believe that everyone should have the opportunity to pursue their passion for sports, whether for recreation, fitness, or competition.
        </p>

        <p className='text-[16px] leading-[26px] font-mono font-bold' >
          Our commitment to excellence drives us to continuously improve our platform, offering state-of-the-art booking and management solutions that meet the dynamic needs of our users. We understand the importance of community in sports, and we strive to create a supportive environment where athletes, enthusiasts, and organizations can thrive.
        </p>
      </div>
    
      <div>
        <Lottie
          animationData={mission}
          loop={true}
          className="md:w-[400px] md:h-[300px]"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center">
 
      <div>
        <Lottie
          animationData={purpose}
          loop={true}
          className="md:w-[400px] md:h-[300px]"
        />
      </div>
    
      <div className="flex-1 text-justify">
        <p className='text-[16px] leading-[26px] font-mono font-bold mb-5'>
          At RideWave, our purpose is to create a seamless and impactful experience for every sports enthusiast. We are dedicated to:
        </p>
        <ul className="space-y-2 font-mono">
          <li>
            <p>
              <span className="font-semibold">Innovation:</span> Continuously enhancing our platform to offer cutting-edge solutions for booking and managing sports facilities.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Integrity:</span> Building trust by being transparent, reliable, and honest in all our interactions with users and partners.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Excellence:</span> Delivering top-notch quality in every aspect of our service, from facility management to customer support.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Community:</span> Fostering a vibrant and engaged community of sports lovers, providing a platform where everyone can connect, grow, and excel.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
   </section>
    );
};

export default Misson;