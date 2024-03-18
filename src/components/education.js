import React, { useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    sem: 1,
    year: 2022,
    coursesList: [
      {
        code: 'FIT1053',
        name: 'Algorithms And Programming In Python: Advanced',
        mark: 'Exempted',
        grade: false,
        note: false,
      },
      {
        code: 'FIT1047',
        name: 'Introduction To Computer Systems, Networks And Security',
        mark: 93,
        grade: 'HD',
        note: false,
      },
      {
        code: 'FIT2081',
        name: 'Mobile Application Development',
        mark: 82,
        grade: 'HD',
        note: false,
      },
      {
        code: 'FIT3175',
        name: 'Usability',
        mark: 86,
        grade: 'HD',
        note: false,
      },
      {
        code: 'MAT1830',
        name: 'Discrete Mathematics For Computer Science',
        mark: 88,
        grade: 'HD',
        note: false,
      },
    ],
  },
  {
    sem: 2,
    year: 2022,
    coursesList: [
      {
        code: 'FIT1049',
        name: 'IT Professional Practice',
        mark: 77,
        grade: 'D',
        note: false,
      },
      {
        code: 'FIT1054',
        name: 'Computer Science (Advanced)',
        mark: 87,
        grade: 'HD',
        note: false,
      },
      {
        code: 'FIT2100',
        name: 'Operating Systems',
        mark: 93,
        grade: 'HD',
        note: 'Received highest mark',
      },
      {
        code: 'MTH1030',
        name: 'Techniques For Modelling',
        mark: 80,
        grade: 'HD',
        note: false,
      },
    ],
  },
  {
    sem: 1,
    year: 2023,
    coursesList: [
      {
        code: 'FIT2004',
        name: 'Algorithms And Data Structures',
        mark: 88,
        grade: 'HD',
        note: false,
      },
      {
        code: 'FIT2083',
        name: 'Innovation And Research In Computer Science',
        mark: 95,
        grade: 'HD',
        note: "Received highest mark",
      },
      {
        code: 'FIT2099',
        name: 'Object Oriented Design And Implementation',
        mark: 87,
        grade: 'HD',
        note: false,
      },
      {
        code: 'FIT2108',
        name: 'Industry Based Learning Seminar',
        mark: 'PGO',
        grade: false,
        note: 'Pass or fail only unit',
      },
      {
        code: 'FIT3173',
        name: 'Software Security',
        mark: 92,
        grade: 'HD',
        note: false,
      },
    ]
  }
];

for (let i = 0, accum = 0; i < courses.length; i++) {
  courses[i].delay = accum;
  accum += 0.1;

  for (let j = 0; j < courses[i].coursesList.length; j++) {
    courses[i].coursesList[j].delay = accum;
    accum += 0.1;
  }
}

function Education() {
  const [coursesVisible, toggleCourseVisible] = useState(false);

  function handleToggleCourses(e) {
    e.preventDefault();

    toggleCourseVisible(!coursesVisible);
  }

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
            d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
          />
        </svg>
        <p>Education</p>
      </h1>
      <div className='mt-5'>
        <h2 className='columns-2'>
          <div className='text-lg'>Monash University</div>
          <div className='text-slate-500 text-right'>2022 - 2025</div>
        </h2>
        <p className='italic font-spectral mt-1 text-lg text-left'>
          Bachelor of Computer Science Advanced (Honours)
        </p>
        <p>WAM: 87.917 | GPA: 3.917 (4.0 scale)</p>
      </div>
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
        <h2 className='font-bold'>Undergraduate Coursework</h2>
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
                      {typeof mark !==  'string' ? `Grade: ${mark}% | ${grade}` : mark}
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

export default Education;
