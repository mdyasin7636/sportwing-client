import AboutUs from "../../AboutUs/AboutUs";
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
        </div>
    );
};

export default Home;