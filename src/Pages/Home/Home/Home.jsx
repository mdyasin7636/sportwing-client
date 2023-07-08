import AboutUs from "../../AboutUs/AboutUs";
import InstructorTeam from "../../AboutUs/InstructorTeam/InstructorTeam";
import Contact from "../../Contact/Contact";
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
            <InstructorTeam></InstructorTeam>
            <Contact></Contact>
        </div>
    );
};

export default Home;