import React from 'react';

export const Services = () => {
  const cardContent = [
    {
      heading: 'Frontend Devoloment',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur',
      buttonText: 'Read more'
    },
    {
      heading: 'UX/UI Design',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur minus culpa deserunt delectus sapiente inventore pariatur',
      buttonText: 'Read more'
    },
  ];

  return (
    <section id='services'>
      <div className='container lg:pt-5'>
        <div className='text-center'>
          <h2 className='font-[800] text-[#035AA6] text-[2.4rem] mp-10'>What do I help?</h2>
          <p className='text-[#011526] lg:max-w-[600px] lg:mx-auto font-[500] text-[16px] leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloribus esse minus possimus delectus iste, vel
            amet fuga eius repudiandae obcaecati laborum sapiente nisi voluptate cumque rem repellendus.
          </p>
        </div>

        <div data-aos='fade-up' data-aos-duration='1800' data-aos-delay='400' className='flex flex-wrap gap-10 mt-10 justify-center'>
          {cardContent.map((card, index) => (
            <div className='card' key={index}>
              <div className='content'>
                <p className='heading'>{card.heading}</p>
                <p className='para'>{card.para}</p>
                <button className='btn'>{card.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

