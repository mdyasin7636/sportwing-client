import { IoIosCheckmarkCircle } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="mb-10">
      <Fade>
        <h2 className="text-center font-bold text-3xl mt-10 mb-6">About Us</h2>
      </Fade>

      <div className="grid md:grid-cols-2">
        <div className="p-5">
          <Fade>
            <h2 className="text-center font-bold text-lg mb-4">
              We Are Best Sports Summer Camp!
            </h2>
          </Fade>

          <Fade>
            <p className="text-center font-semibold ml-10">
              We are dedicated to providing a dynamic and inclusive environment
              where young athletes can explore a wide range of sports and
              develop their athletic skills. From the thrill of scoring goals in
              football to the precision of a strike in bowling, our camp offers
              a diverse array of sports, including karate, baseball,
              snowboarding, badminton, rugby, swimming, and more. Our
              experienced coaches are passionate about nurturing talent,
              fostering teamwork, and instilling values such as sportsmanship
              and perseverance. Join us for an unforgettable summer filled with
              fun, growth, and a love for sports!
            </p>
          </Fade>
        </div>
        <div className="p-5">
          <Fade>
            <h2 className="text-center font-bold text-lg mb-4">Facilities</h2>
          </Fade>

          <div className="md:ml-44">
            <div className="flex mb-2 font-semibold">
              <IoIosCheckmarkCircle size={25} className="mr-2" />
              <Fade>
                <p>State-of-the-Art Sports Facilities</p>
              </Fade>
            </div>
            <div className="flex items-center mb-2 font-semibold">
              <IoIosCheckmarkCircle size={25} className="mr-2" />
              <Fade>
                <p>Well-Equipped Training Areas</p>
              </Fade>
            </div>
            <div className="flex items-center mb-2 font-semibold">
              <IoIosCheckmarkCircle size={25} className="mr-2" />
              <Fade>
                <p>Safety and First Aid Stations</p>
              </Fade>
            </div>
            <div className="flex items-center mb-2 font-semibold">
              <IoIosCheckmarkCircle size={25} className="mr-2" />
              <Fade>
                <p>Recreational Areas and Common Spaces</p>
              </Fade>
            </div>
            <div className="flex items-center mb-2 font-semibold">
              <IoIosCheckmarkCircle size={25} className="mr-2" />
              <Fade>
                <p>Nutrition and Dining</p>
              </Fade>
            </div>
            <div className="flex items-center mb-2 font-semibold">
              <IoIosCheckmarkCircle size={25} className="mr-2" />
              <Fade>
                <p>Accommodation and Lodging</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
