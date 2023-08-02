import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import sliderImg1 from '../../../../src/assets/slider/banner1.jpg'
import sliderImg2 from '../../../../src/assets/slider/banner2.jpg'
import sliderImg3 from '../../../../src/assets/slider/banner3.jpg'
import sliderImg4 from '../../../../src/assets/slider/banner4.jpg'

const Slider = () => {
  
  return (
      
    <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={sliderImg1} alt="" />
          <div className="absolute h-full flex items-center bg-black bg-opacity-60 left-0 top-0">
          <div className='text-center text-white'>
            <h2 className="font-extrabold md:text-3xl">
              Unleash Your Potential <br/> At Our Summer Camp
            </h2>
            <p className="font-semibold md:mt-4 md:mx-[450px]">
              Join us at our thrilling summer sports camp where young athletes
              get the opportunity to unlock their full potential and take their
              game to new heights. With a wide range of sports activities,
              expert coaching, and a fun-filled atmosphere.
            </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg2} alt="" />
          <div className="absolute h-full flex items-center bg-black bg-opacity-60 left-0 top-0">
          <div className='text-center text-white'>
            <h2 className="font-extrabold md:text-3xl">
              Unleash Your Potential <br/> At Our Summer Camp
            </h2>
            <p className="font-semibold md:mt-4 md:mx-[450px]">
              Join us at our thrilling summer sports camp where young athletes
              get the opportunity to unlock their full potential and take their
              game to new heights. With a wide range of sports activities,
              expert coaching, and a fun-filled atmosphere.
            </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg3} alt="" />
          <div className="absolute h-full flex items-center bg-black bg-opacity-60 left-0 top-0">
          <div className='text-center text-white'>
            <h2 className="font-extrabold md:text-3xl">
              Unleash Your Potential <br/> At Our Summer Camp
            </h2>
            <p className="font-semibold md:mt-4 md:mx-[450px]">
              Join us at our thrilling summer sports camp where young athletes
              get the opportunity to unlock their full potential and take their
              game to new heights. With a wide range of sports activities,
              expert coaching, and a fun-filled atmosphere.
            </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg4} alt="" />
          <div className="absolute h-full flex items-center bg-black bg-opacity-60 left-0 top-0">
          <div className='text-center text-white'>
            <h2 className="font-extrabold md:text-3xl">
              Unleash Your Potential <br/> At Our Summer Camp
            </h2>
            <p className="font-semibold md:mt-4 md:mx-[450px]">
              Join us at our thrilling summer sports camp where young athletes
              get the opportunity to unlock their full potential and take their
              game to new heights. With a wide range of sports activities,
              expert coaching, and a fun-filled atmosphere.
            </p>
          </div>
        </div>
        </SwiperSlide>
       
      </Swiper>

  );
};

export default Slider;
