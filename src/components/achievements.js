import * as React from 'react';

function Achievements() {
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
            d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
          />
        </svg>
        <p>Achievements</p>
      </h1>
      <div className='mt-5'>
        <h2 className='text-lg'>2023</h2>
        <ul className='mt-1 text-left'>
          <li>
            Commendation letter for receiving highest mark in{' '}
            <a href='https://handbook.monash.edu/2022/units/FIT2083?year=2023'>
              FIT2083 Innovation and research in computer science
            </a>
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>2022</h2>
        <ul className='mt-1 text-left'>
          <li>
            Commendation letter for receiving highest mark in{' '}
            <a href='https://handbook.monash.edu/2022/units/FIT2100?year=2022'>
              FIT2100 Operating Systems
            </a>
          </li>
          <li>
            Commendation letter excellent academic performance in Semester 1
            2022
          </li>
          <li>
            7th place in <a href='https://codequest.club/'>CodeQuest</a>
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>2021</h2>
        <ul className='mt-1 text-left'>
          <li>John Monash Science School Silver Diploma Award</li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>2020</h2>
        <ul className='mt-1text-left'>
          <li>Distinction in Chemistry Olympiad</li>
          <li>Distinction in Biology Olympiad</li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>2019</h2>
        <ul className='mt-1 text-left'>
          <li>High Distinction in Australian Geography Competition</li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>2019</h2>
        <ul className='mt-1 text-left'>
          <li>
            High Distinction in{' '}
            <a href='https://www.sciencevictoria.com.au/sts/'>
              Science Talent Search
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Achievements;
