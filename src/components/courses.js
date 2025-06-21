import React, { useState } from "react";
import { motion } from "framer-motion";

function Courses({ courses }) {
  const [coursesVisible, toggleCourseVisible] = useState(false);

  function handleToggleCourses(e) {
    e.preventDefault();

    toggleCourseVisible(!coursesVisible);
  }

  return (
    <>
      <motion.button
        className='flex mt-5 flex-row items-center'
        onClick={handleToggleCourses}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5'
          animate={{ rotate: coursesVisible ? 90 : 0 }}
          transition={{
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          <path
            fillRule='evenodd'
            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
            clipRule='evenodd'
          />
        </motion.svg>
        <h2 className='font-bold'>Coursework</h2>
      </motion.button>
      {coursesVisible &&
        courses.map(({ sem, year, coursesList, delay }, i) => (
          <div className='mt-2 ml-6' key={i}>
            <motion.h3
              className='text-slate-500'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{
                delay: delay,
                duration: 0.3,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >{`Semester ${sem} ${year}`}</motion.h3>
            <ul>
              {coursesList.map(
                ({ code, name, mark, grade, note, delay }, j) => (
                  <motion.li
                    key={j}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{
                      delay: delay,
                      duration: 0.3,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className='mt-2'
                  >
                    <div className='overflow-auto italic font-spectral text-lg text-left'>{`${code} - ${name}`}</div>
                    <div className='text-sm'>
                      {typeof mark !== "string"
                        ? `Grade: ${mark}% | ${grade}`
                        : mark}
                    </div>
                    {note ? <div className='text-sm'>{note}</div> : null}
                  </motion.li>
                )
              )}
            </ul>
          </div>
        ))}
    </>
  );
}

export default Courses;
