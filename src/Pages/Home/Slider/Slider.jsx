const Slider = () => {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/3YCwpSJ/banner1.jpg" className="w-full" />
    <div className="absolute h-full flex justify-between bg-black bg-opacity-60 left-0 top-0">
      <div>
        <h2 className="text-center font-extrabold text-white text-3xl md:pt-4 md:mt-80">Unleash Your Potential  <br/> At Our Summer Camp</h2>
        <p className="text-center font-semibold  text-white  md:mt-5 md:mx-72">Join us at our thrilling summer sports camp where young athletes get the opportunity to unlock their full potential and take their game to new heights. With a wide range of sports activities, expert coaching, and a fun-filled atmosphere. Our camp promises an unforgettable summer packed with excitement, teamwork, and personal growth. Do not miss out on this incredible opportunity to elevate your game!</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hY3n9vk/banner2.jpg" className="w-full" />
    <div className="absolute h-full flex justify-between bg-black bg-opacity-60 left-0 top-0">
      <div>
        <h2 className="text-center font-extrabold text-white text-3xl md:mt-80">Unleash Your Potential  <br/> At Our Summer Camp</h2>
        <p className="text-center font-semibold  text-white mt-5 md:mx-72">Join us at our thrilling summer sports camp where young athletes get the opportunity to unlock their full potential and take their game to new heights. With a wide range of sports activities, expert coaching, and a fun-filled atmosphere. Our camp promises an unforgettable summer packed with excitement, teamwork, and personal growth. Do not miss out on this incredible opportunity to elevate your game!</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/5BsBdFN/banner3.jpg" className="w-full" />
    <div className="absolute h-full flex justify-between bg-black bg-opacity-60 left-0 top-0">
      <div>
        <h2 className="text-center font-extrabold text-white text-3xl md:mt-80">Unleash Your Potential  <br/> At Our Summer Camp</h2>
        <p className="text-center font-semibold  text-white mt-5 md:mx-72">Join us at our thrilling summer sports camp where young athletes get the opportunity to unlock their full potential and take their game to new heights. With a wide range of sports activities, expert coaching, and a fun-filled atmosphere. Our camp promises an unforgettable summer packed with excitement, teamwork, and personal growth. Do not miss out on this incredible opportunity to elevate your game!</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZfPZtBq/banner4.jpg" className="w-full" />
    <div className="absolute h-full flex justify-between bg-black bg-opacity-60 left-0 top-0">
      <div>
        <h2 className="text-center font-extrabold text-white text-3xl md:mt-80">Unleash Your Potential  <br/> At Our Summer Camp</h2>
        <p className="text-center font-semibold  text-white mt-5 md:mx-72">Join us at our thrilling summer sports camp where young athletes get the opportunity to unlock their full potential and take their game to new heights. With a wide range of sports activities, expert coaching, and a fun-filled atmosphere. Our camp promises an unforgettable summer packed with excitement, teamwork, and personal growth. Do not miss out on this incredible opportunity to elevate your game!</p>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
);
};

export default Slider;
