import React from 'react';

const Team = () => {
  type data= {
    id: number;
    name: string;
    position: string;
    image: string;
}[]


    const datas:data = [
        {
          id: 1,
          name: "John Doe",
          position: "Developer",
          image:"https://static9.depositphotos.com/1005893/1105/i/450/depositphotos_11050974-stock-photo-indian-businessman.jpg",
        },
        {
          id: 2,
          name: "Clarence L. Baker",
          position: "Marketing Head",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlPCTomT7A1MOU7wcxWeGD6VdqoKNsIBpZg&s",
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
          image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
        },
      ];
    
    
    return (
        <section className='py-[60px] md:py-[90px] '>

<div className="max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis">
 
    <h1  className='text-center font-bold  text-[36px] leading-[46px]    md:text-[60px] md:ledaing-[70px] mb-14 '  >Our <span className='text-[#3d85ff] '>Team</span>   </h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[10px]  gap-y-[15px] place-items-center justify-items-center  '>


     {
      datas?.map((data)=><div className="w-[370px] lg:w-[300px]  xl:w-[370px] relative px-2 py-2 bg-[#f5f8fc] rounded-[9px] border  border-[#D4D8DE] font-Poppis">
      <img
        className="mb-5 w-full h-[250px] object-bottom"
        loading="lazy"
        src={data?.image}
        alt=""
      />

      <div className="flex justify-between mb-5">
        <div>
          <h3 className="text-18px leading-28px md:text-22px md:leading-[32px] font-semibold text-heading mb-[2px]">
        {data?.name}
          </h3>
          <p className="text-[16px] leading-[26px] text-[#666270]">
        {data?.position}
          </p>
        </div>
        {/* <h3 className="text-22px leading-[32px] font-semibold text-[#6637EE]">
          ${pricePerHour}<span className="text-[16px] text-text">Hr</span>
        </h3> */}
      </div>
      <div className="max-w-[370px] h-[1px] bg-[#D6D4DD] mb-5"></div>

      

      
    </div>)
     }

   </div>
    
  </div>
   </section>
    );
};

export default Team;