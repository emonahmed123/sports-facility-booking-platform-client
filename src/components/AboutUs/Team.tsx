import React from 'react';

const Team = () => {
    
    const data = [
        {
          id: 1,
          name: "John Doe",
          position: "Developer",
          image: person1,
        },
        {
          id: 2,
          name: "Clarence L. Baker",
          position: "Marketing Head",
          image: person2,
        },
        {
          id: 3,
          name: "William B.",
          position: "Manager",
          image:" https://img.freepik.com/premium-photo/face-young-handsome-bearded-man_251136-35800.jpg",
        },
        {
          id: 4,
          name: "Robyn A.",
          position: "Security Specialist",
          image: person4,
        },
      ];
    
    
    return (
        <section className='py-[60px] md:py-[90px] '>

<div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
 
    <h1  className='text-center font-bold  text-[36px] leading-[46px]    md:text-[60px] md:ledaing-[70px] '  >Our <span className='text-[#3d85ff] '>Mission</span>   </h1>
  
    
  </div>
   </section>
    );
};

export default Team;