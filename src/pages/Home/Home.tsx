import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import FeaturedFacilities from "../FeaturedFacilities/FeaturedFacilities";

const Home = () => {
    return (
        <div>
    
         <HeroSection/>
     <FeaturedFacilities></FeaturedFacilities>

        <HowItWorks/>
        </div>
    );
};

export default Home;