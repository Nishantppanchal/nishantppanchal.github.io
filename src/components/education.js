import Courses from "./courses";

import React from "react";

const bachelorCourses = [
  {
    sem: 1,
    year: 2022,
    coursesList: [
      {
        code: "FIT1053",
        name: "Algorithms And Programming In Python: Advanced",
        mark: "Exempted",
        grade: false,
        note: false,
      },
      {
        code: "FIT1047",
        name: "Introduction To Computer Systems, Networks And Security",
        mark: 93,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT2081",
        name: "Mobile Application Development",
        mark: 82,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT3175",
        name: "Usability",
        mark: 86,
        grade: "HD",
        note: false,
      },
      {
        code: "MAT1830",
        name: "Discrete Mathematics For Computer Science",
        mark: 88,
        grade: "HD",
        note: false,
      },
    ],
  },
  {
    sem: 2,
    year: 2022,
    coursesList: [
      {
        code: "FIT1049",
        name: "IT Professional Practice",
        mark: 77,
        grade: "D",
        note: false,
      },
      {
        code: "FIT1054",
        name: "Computer Science (Advanced)",
        mark: 87,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT2100",
        name: "Operating Systems",
        mark: 93,
        grade: "HD",
        note: "Received highest mark",
      },
      {
        code: "MTH1030",
        name: "Techniques For Modelling",
        mark: 80,
        grade: "HD",
        note: false,
      },
    ],
  },
  {
    sem: 1,
    year: 2023,
    coursesList: [
      {
        code: "FIT2004",
        name: "Algorithms And Data Structures",
        mark: 88,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT2083",
        name: "Innovation And Research In Computer Science",
        mark: 95,
        grade: "HD",
        note: "Received highest mark",
      },
      {
        code: "FIT2099",
        name: "Object Oriented Design And Implementation",
        mark: 87,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT2108",
        name: "Industry Based Learning Seminar",
        mark: "PGO",
        grade: false,
        note: "Pass or fail only unit",
      },
      {
        code: "FIT3173",
        name: "Software Security",
        mark: 92,
        grade: "HD",
        note: false,
      },
    ],
  },
  {
    sem: 2,
    year: 2023,
    coursesList: [
      {
        code: "FIT2014",
        name: "Theory Of Computation",
        mark: 87,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT2102",
        name: "Programming Paradigms",
        mark: 98,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT3143",
        name: "Parallel Computing",
        mark: 84,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT3155",
        name: "Advanced Data Structures And Algorithms",
        mark: 75,
        grade: "D",
        note: false,
      },
    ],
  },
  {
    sem: 1,
    year: 2024,
    coursesList: [
      {
        code: "ECE3141",
        name: "Information and Networks",
        mark: 76,
        grade: "D",
        note: false,
      },
      {
        code: "FIT3171",
        name: "Databases",
        mark: 89,
        grade: "HD",
        note: false,
      },
    ],
  },
  {
    sem: 2,
    year: 2024,
    coursesList: [
      {
        code: "FIT3144",
        name: "Advanced Computer Science Project",
        mark: 92,
        grade: "HD",
        note: "Ran for a full year (2024 Sem 1 and 2)",
      },
      {
        code: "FIT2082",
        name: "Computer Science Research Project",
        mark: 92,
        grade: "HD",
        note: false,
      },
      {
        code: "MTH3175",
        name: "Network Mathematics (Advanced)",
        mark: 92,
        grade: "HD",
        note: false,
      },
    ],
  },
];

const honoursCourses = [
  {
    sem: 1,
    year: 2025,
    coursesList: [
      {
        code: "FIT5212",
        name: "Data Analysis for Semi-Structured Data",
        mark: 91,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT5217",
        name: "Natural Language Processing",
        mark: 95,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT5225",
        name: "Cloud Computing and Security",
        mark: 88,
        grade: "HD",
        note: false,
      },
      {
        code: "FIT5226",
        name: "Multi Agent Systems and Collective Behaviour",
        mark: 100,
        grade: "HD",
        note: false,
      },
    ]
  },
]

function addDelay(courses) {
  for (let i = 0, accum = 0; i < courses.length; i++) {
    courses[i].delay = accum;
    accum += 0.1;

    for (let j = 0; j < courses[i].coursesList.length; j++) {
      courses[i].coursesList[j].delay = accum;
      accum += 0.1;
    }
  }
}

addDelay(bachelorCourses);
addDelay(honoursCourses);

function Education() {
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
          <div className='text-slate-500 text-right'>2024 - 2025</div>
        </h2>
        <p className='italic font-spectral mt-1 text-lg text-left'>
          Bachelor of Computer Science (Honours)
        </p>
        <p>WAM: N/A | GPA: N/A</p>
      </div>
      <Courses courses={honoursCourses} />
      <div className='mt-5'>
        <h2 className='columns-2'>
          <div className='text-lg'>Monash University</div>
          <div className='text-slate-500 text-right'>2022 - 2024</div>
        </h2>
        <p className='italic font-spectral mt-1 text-lg text-left'>
          Bachelor of Computer Science
        </p>
        <p>WAM: 86.846 | GPA: 3.818 (4.0 scale)</p>
      </div>
      <Courses courses={bachelorCourses} />
    </>
  );
}

export default Education;
