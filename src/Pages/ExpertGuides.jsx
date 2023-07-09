/* eslint-disable react/no-unescaped-entities */
import expertImg from '../../src/assets/expert.jpg'

const ExpertGuides = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-10 mb-6">
        Expert Guides
      </h2>
      <div className="grid md:grid-cols-2 mt-10">
        <div className='px-1'>
          <img className='rounded' src={expertImg} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center px-5'>
          <h2  className="font-bold text-2xl">
          Setting the Standard in Sports Instruction
          </h2>
          <p className="font-bold mt-2">Achieve Peak Performance through Personalized Coaching</p>
          <p className="font-semibold text-center mt-1" >Our world-class team of sport instructors are not only passionate about their respective sports but are also highly skilled and experienced in their fields. With their extensive knowledge and dedication, they serve as mentors, motivators, and guides, helping you unlock your full potential and achieve remarkable results.</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertGuides;
