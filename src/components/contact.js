import * as React from 'react';
import Obfuscate from 'react-obfuscate';

function Contact() {
  return (
    <>
      <h1 className='font-bold text-xl flex flex-row space-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
          />
        </svg>
        <p>Contact</p>
      </h1>
      <div className='mt-5'>
        <div className='flex flex-row items-center space-x-2 mt-1'>
          <p>Email</p>
          <hr className='border-1 rounded border-slate-500 grow' />
          <Obfuscate email='nishantppanchal@gmail.com' />
        </div>
        <div className='flex flex-row items-center space-x-2 mt-1'>
          <p>LinkedIn</p>
          <hr className='border-1 rounded border-slate-500 grow' />
          <Obfuscate href='https://www.linkedin.com/in/nishantppanchal/'>
            nishantppanchal
          </Obfuscate>
        </div>
        <div className='flex flex-row items-center space-x-2 mt-1'>
          <p>GitHub</p>
          <hr className='border-1 rounded border-slate-500 grow' />
          <Obfuscate href='https://github.com/Nishantppanchal'>@nishantppanchal</Obfuscate>
        </div>
      </div>
    </>
  );
}

export default Contact;
