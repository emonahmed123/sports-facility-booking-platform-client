import React from 'react';

const Contact = () => {
    return (
        <section className="pb-[60px] md:pb-[80px]">
      
      <div className="h-[500px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.6608451691877!2d90.1679780742273!3d24.323462466537237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37560fdcdc0bf1f9%3A0x4c68714ad87fd11a!2sShikder%20Road%2C%20Sakhipur!5e0!3m2!1sen!2sbd!4v1700055112412!5m2!1sen!2sbd"
      width="100%"
      height="500"
      
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
      
        <div className="font-Poppins pt-[60px] lg:pt-0 px-5 lg:px-0">
          <div
            className="flex justify-center items-center gap-x-[100px] flex-col lg:flex-row gap-y-[30px]"
          >
            <div
              className="w-[100%] lg:w-[50%] lg:bg-[#ECECEC] lg:h-[100vh] flex justify-center items-center"
            >
              <div>
                <div className="flex gap-x-[20px] mb-[30px]">
                  <img
                    src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/qyfOQjUhZCklLUmpq2uU1698592256.svg"
                    alt=""
                  />
                  <p className="text-[14px] sm:text-20px md:leading-30px text-primary">
                    2369 Robinson Lane Jackson, OH 45640
                  </p>
                </div>
                <div className="flex gap-x-[20px] mb-[30px]">
                  <img
                    src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/z3VtDXQWCLwF8igKzy261698593387.svg"
                    alt=""
                  />
                  <p className="text-[14px] sm:text-20px md:leading-30px text-primary">
                    (+88) 017 000 00000
                  </p>
                </div>
                <div className="flex gap-x-[20px] mb-[30px]">
                  <img
                    src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/qyfOQjUhZCklLUmpq2uU1698592256.svg"
                    alt=""
                  />
                  <p className="text-[14px] sm:text-20px md:leading-30px text-primary">
                    Info@example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <div className="max-w-[485px] mx-auto">
                <form
                  action="
               "
                >
                  <input
                    className="w-full border border-[#ECECEC] px-5 py-5 rounded-[12px] mb-5"
                    type="text"
                    name=""
                    placeholder="Name"
                    id=""
                  />
                  <input
                    className="w-full border border-[#ECECEC] px-5 py-5 rounded-[12px] mb-5"
                    type="email"
                    name=""
                    placeholder="Email"
                    id=""
                  />
                  <input
                    className="w-full border border-[#ECECEC] px-5 py-5 rounded-[12px] mb-5"
                    type="Subject"
                    name=""
                    placeholder="Subject"
                    id=""
                  />
                  <textarea
                    className="w-full border border-[#ECECEC] px-5 py-5 h-[114px] rounded-[12px] mb-5 resize-none"
                    type="Subject"
                    name=""
                    placeholder="Message"
                    id=""
                  ></textarea>
      
                  <button
                    className="px-8 py-[14px] bg-primary rounded-[8px] text-[#FFF] font-Poppins text-16px font-semibold"
                  >
                  Contrac
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default Contact;