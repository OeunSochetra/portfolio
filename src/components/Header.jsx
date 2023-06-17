import React from 'react';



export const Header = () => {
  return (
    <header className='w-full h-[80px] flex items-center'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <div className='flex items-center mb-4 lg:mb-0'>
            {/*.........Logo........*/}
            <div className='flex items-center gap-2'>
              <span className='w-[34px] h-[35px] bg-[#035AA6] text-[#ffffff] text-[18px] font-[500] rounded-full flex items-center justify-center'>
                C
              </span>

              <div className="leading-[20px] ml-2">
                <h1 className='text-xl text-[#035AA6] font-[600]'>Oeun Sochetra</h1>
                <p className='text-[14px] text-[#035AA6] font-[500]'>personal</p>
              </div>
            </div>
          </div>
            {/*.........Logo End.........*/}
          {/*.........Menu.........*/}
          <div className='gap-4 flex flex-wrap justify-center lg:justify-end text-[#035AA6] '>
            <a className='mb-2 lg:mb-0 lg:ml-4 ' href="#about">About</a>
            <a className='mb-2 lg:mb-0 lg:ml-4 ' href="services">Services</a>
            <a className='mb-2 lg:mb-0 lg:ml-4 ' href="portfiolo">Portfiolo</a>
            <a className='mb-2 lg:mb-0 lg:ml-4 ' href="contact">Contact</a>
             
          </div>
          {/*.........Menu end...........*/}
          {/*.........Menu right.........*/}
          <div className="flex items-center gap-2">
          <button className='flex items-center gap-2 text-[#035AA6] font-[600] border border-solid border-[#035AA6] p-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#035AA6] 
          hover:text-[#ffffff] hover:font-[700] ease-in duration-300'>
            <i className="ri-chat-1-fill"></i> Let's talk
         </button>
         <span className='text-2xl text-[#035AA6] md:hidden cursor-pointer' >
         <i class="ri-menu-line"></i>
         </span>
         </div>

          {/*.........Menu left..........*/}
        </div>
      </div>
    </header>
  );
};

export default Header;



