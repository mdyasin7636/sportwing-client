import AboutUs from "../../AboutUs/AboutUs";
import Contact from "../../Contact/Contact";
import ExpertGuides from "../../ExpertGuides";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <AboutUs></AboutUs>
            <ExpertGuides></ExpertGuides>
            <Contact></Contact>
        </div>
    );
};

export default Home;