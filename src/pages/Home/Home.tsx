import TestimonialSlide from "@/components/TestimonialSlide";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import FeaturedFacilities from "../FeaturedFacilities/FeaturedFacilities";
import WhyChooseus from "@/components/WhyChooseus";
import ScrollToTop from "react-scroll-to-top";
import { LuArrowBigUpDash } from "react-icons/lu";
import Newslter from "@/components/Newslter";
import Faq from "@/components/faq";

const Home = () => {
  return (
    <>
      <ScrollToTop smooth component={<LuArrowBigUpDash size={40} />} />
      <HeroSection />
      <FeaturedFacilities />
      <HowItWorks />
      <TestimonialSlide />
      <WhyChooseus />
      <Newslter />
      <Faq />
    </>
  );
};

export default Home;
