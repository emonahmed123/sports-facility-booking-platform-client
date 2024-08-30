import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const TestimonialSlide = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });
  return (
    <section className="pt-[40px] bg-[#f5f8fc]">
      {/* heading */}
      <div className="text-center  font-Poppis ">
        <h1 className="text-5xl  font-semibold mb-3 ">
          Testi<span className="text-[#3d85ff]">monials</span>
        </h1>

        {/* description */}
        <p className="text-[14px] max-w-[640px] mx-auto ">
          Hear from our satisfied User in the Testimonials section, where real
          customers share their experiences and stories about their favorite
          facilates and the exceptional service they received.
        </p>
      </div>
      {/* slide */}
      <div className=" ">
        <div
          ref={sliderRef}
          className="keen-slider md:h-96 bg-transparent  mb-24 p-2 rounded-xl "
        >
          {/* slides */}
          <div className="keen-slider__slide number-slide1 flex items-center justify-center text-center ">
            <div className="max-w-[700px] p-2 md:p-2">
              <p className="mb-2">
                "Reatly Academy offers guitar lessons that are simply
                exceptional. The instructors possess remarkable talent and
                expertise, guiding students with patience and enthusiasm. The
                practice rooms are well-equipped with high-quality instruments,
                creating an ideal learning environment."
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rating style={{ maxWidth: 100 }} value={4} readOnly />
                <span>{4.0}</span>
              </div>
              <h3 className="font-bold">- Sarah</h3>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1 flex items-center justify-center text-center  ">
            <div className=" max-w-[700px] p-2 md:p-2">
              <p className="mb-2">
                "MelodyMakers Academy offers guitar lessons that are simply
                exceptional. The instructors possess remarkable talent and
                expertise, guiding students with patience and enthusiasm. The
                practice rooms are well-equipped with high-quality instruments,
                creating an ideal learning environment."
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rating style={{ maxWidth: 100 }} value={4} readOnly />
                <span>{4.0}</span>
              </div>
              <h3 className="font-bold">- Sarah</h3>
            </div>
          </div>
          {/* slides */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlide;
