import React from 'react';
import myImage from '../assets/Images/myimage.png';
import CountUp from 'react-countup';





export const Hero = () => {

 

  return (
    <section className='pt-0' id='about'>
      <div className="container pt-14 text-4xl">
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2'>
            <h5 data-aos='fade-right' data-aos-duration='1500' className='text-[#035AA6] font-[600] text-[16px]'>Hello Welcome</h5>
            <h1 data-aos='fade-up' data-aos-duration='1500' className='text-[#035AA6] font-[800] text-[1.8rem] sm:text-[40px] mt-5 leading-[35px sm:leading-[46px]]'>I'm Oeun Sochetra <br/> Software Developer </h1>

            <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='flex items-center gap-6 mt-7 text-sm' >
              <a href="#contact"><button className='bg-[#011526] text-[white] font-[500] flex items-center gap-2 hover:bg-[#035AA6] ease-in druation-300 py-2 px-4 rounded-[8px]' >
                <i className="ri-mail-fill"></i>Hire me</button> </a>
              <a href="#portfiolo" className='text-[#011526] font-[600] text-[16px]  hover:text-[#035AA6] ' >See Portfolio</a>
            </div>

            <div className='p-4 sm:p-6'>
              <p data-aos="fade-left" data-aos-duration="1500" className='flex gap-2 text-[#011526] font-semibold text-base leading-7 sm:leading-8 sm:text-lg mt-2 sm:mt-3'>
                <span><i className="ri-apps-line"></i></span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, atque.
                Expedita perferendis reprehenderit aliquam a recusandae soluta 
                rem harum. Similique neque et adipisci ipsam ipsa dolorem maxime 
                numquam sapiente ut.
              </p>
              <div className='flex items-center gap-9 mt-14'>
                <span className='text-[#035AA6] text-[15px] font-[600]'>Follow me</span>
                <span>
                  <a href="#youtube" className='text-[#035AA6] text-[20px] font-[600]'><i className="ri-youtube-line"></i></a>
                </span>
                <span>
                  <a href="#youtube" className='text-[#035AA6] text-[20px] font-[600]'><i className="ri-github-fill"></i></a>
                </span>
                <span>
                  <a href="#youtube" className='text-[#035AA6] text-[20px] font-[600]'><i className="ri-facebook-circle-fill"></i></a>
                </span>
                <span>
                  <a href="#youtube" className='text-[#035AA6] text-[20px] font-[600]'><i className="ri-instagram-line"></i></a>
                </span>
              </div>
            </div>
          </div>
             { /*...........Hero end left..........*/} 

             { /*...........HeroImage..............*/}

          <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className='md:w-1/2 flex items-center justify-center mt-10 sm:mt-0'>
            <div className='rounded-full bg-[#035AA6] p-2'>
              <img data-aos='fade-left' data-aos-duration='1800' data-aos-delay='200' src={myImage} alt="Hero Image" className='max-w-full h-auto rounded-full' />
            </div>
          </div>
            {/*...........Hero image end ..........*/}
            {/*...........Hero contaent right ..........*/}
            <div className="md:basis-1/5 flex justiy-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              <div className="mb-10">
                <h2 className='text-[#035AA6] font-[700] text-[32px]  '>
                <CountUp start={0} end={7} duration={4} suffix="+" />
              </h2>
                <h4 className='text-[#035AA6] font-[700] text-[15px] ' >
                  Years of Experience
                </h4>
                <h2 className='text-[#035AA6] font-[700] text-[32px] '>
                <CountUp start={0} end={100} duration={4} suffix="%" />
              </h2>
                <h4 className='text-[#035AA6] font-[700] text-[15px] ' >
                  Success Rate
                </h4>
                <h2 className='text-[#035AA6] font-[700] text-[32px] '>
                <CountUp start={0} end={150} duration={4} suffix="+" />
              </h2>
                <h4 className='text-[#035AA6] font-[700] text-[15px] ' >
                  Happy Clients
                </h4>
                <h2 className='text-[#035AA6] font-[700] text-[32px] '>
                <CountUp start={0} end={230} duration={4} suffix="+" />
              </h2>
                <h4 className='text-[#035AA6] font-[700] text-[15px] ' >
                  Projects Complete
                </h4>
              </div>
            </div>
            {/*...........Hero contaent right end ..........*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;



