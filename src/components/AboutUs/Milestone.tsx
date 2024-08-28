import Lottie from "lottie-react";
import achivement from '@/assets/achivement.json'
const Milestone = () => {
    const historyMilestones = [
      {
        year: 2022,
        event:
          "RideWave was established with the mission to revolutionize access to sports facilities, starting with a single state-of-the-art complex in [Your City].",
      },
      {
        year: 2023,
        event:
          "Expanded our network to include multiple facilities across the region, offering a wide range of sports and fitness options for all ages and skill levels.",
      },
      {
        year: 2023,
        event:
          "Achieved the milestone of 100,000 bookings, reflecting the growing demand for our services and the satisfaction of our users.",
      },
      {
        year: 2024,
        event:
          "Launched our user-friendly mobile app, streamlining the booking process and providing users with real-time access to facility schedules and availability.",
      },
      {
        year: 2024,
        event:
          "Recognized as a leader in promoting community health and wellness, receiving accolades for our contribution to local sports initiatives.",
      },
      {
        year: "Present Day",
        event:
          "Continuing to innovate and expand, with plans to introduce advanced features and services that enhance the user experience and support the growth of sports communities.",
      },
    ];
  
    return (
      <section className=" py-[60px] md:py-[90px] ">
        
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
      <h1  className='text-center font-bold  text-[36px] leading-[46px]    md:text-[60px] md:ledaing-[70px]  mb-10 font-Poppis'  >Our <span className='text-[#3d85ff] '>Milestones</span>   </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-5 font-mono">

          <div>
            <Lottie animationData={achivement} loop={true} className="h-[300px] w-[400px]" />
          </div>
          <div className="flex-1 text-justify">
            <p className="text-xl font-semibold mb-5">Our Journey:</p>
            <ul className="space-y-2">
              {historyMilestones.map((milestone, index) => (
                <li key={index}>
                  <p>
                    <span className="font-semibold">{milestone.year}:</span> {milestone.event}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </section>
    );
  };
export default Milestone  