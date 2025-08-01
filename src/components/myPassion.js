import React from "react";

function MyPassion() {
  return (
    <div>
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
            d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
          />
        </svg>

        <p>What Drives Me</p>
      </h1>
      <p className='mt-5'>
        My passion for building started with LEGO. I spent hours as a child
        turning small, simple pieces into complex creations. That same curiosity
        now drives my interest in software and AI. I'm especially fascinated by
        how models rooted in statistics can power systems that feel intelligent
        and dynamic. Whether it's engineering robust applications or designing
        enterprise grade AI systems, I'm motivated by the challenge of turning
        abstract ideas into real, working systems. Studying Computer Science
        gives me the foundation to understand how everything fits together, from
        low-level architecture to high-level design, and to build technology
        that's both innovative and impactful.
      </p>
    </div>
  );
}

export default MyPassion;
