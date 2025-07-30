import React from "react";

function AboutMe() {
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
            d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
          />
        </svg>
        <p>About Me</p>
      </h1>
      <p className='mt-5'>
        I currently work at{" "}
        <a href='https://en.wikipedia.org/wiki/Australian_Government'>
          Australian Government
        </a>{" "}
        as a Data Scientist Intern. I'm also a part-time student at{" "}
        <a href='https://www.monash.edu/'>Monash University</a> studying a
        Bachelor of Computer Science (Honours).
      </p>
      <p className='mt-5'>
        I'm passionate about <i>artificial intelligence</i>,{" "}
        <i>machine learning</i>, <i>embedded devices</i>, <i>robotics</i>,{" "}
        <i>mathematics</i> and <i>software engineering</i>.
      </p>
    </div>
  );
}

export default AboutMe;
