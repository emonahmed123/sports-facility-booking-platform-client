import TestimonialSlide from "@/components/TestimonialSlide";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import FeaturedFacilities from "../FeaturedFacilities/FeaturedFacilities";
import WhyChooseus from "@/components/WhyChooseus";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedFacilities/>
      <HowItWorks />
      <TestimonialSlide />
      <WhyChooseus />
    </div>
  );
};

export default Home;
