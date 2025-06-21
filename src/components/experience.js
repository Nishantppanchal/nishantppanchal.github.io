import * as React from "react";

function Experience() {
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
            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
          />
        </svg>

        <p>Experience</p>
      </h1>
      <div className='mt-5'>
        <h2 className='text-lg'>
          Machine Learning Scientist Intern at{" "}
          <a href='https://en.wikipedia.org/wiki/Australian_Government'>
            Australian Government
          </a>
        </h2>
        <p className='font-extralight mt-2'>
          February 2024 - Present • Melbourne, AU
        </p>
        <ul className='mt-2'>
          <li>I am working on Artificial Intelligence.</li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>
          Cybersecurity Intern at{" "}
          <a href='https://en.wikipedia.org/wiki/Australian_Government'>
            Australian Government
          </a>
        </h2>
        <p className='font-extralight mt-2'>
          November 2023 - February 2024 • Canberra, AU
        </p>
        <ul className='mt-2'>
          <li>Worked on a cybersecurity team.</li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>
          Artificial Intelligence Team Lead at{" "}
          <a href='https://www.mbsi.org.au/'>
            Melbourne Bioinnovation Student Initative
          </a>
        </h2>
        <p className='font-extralight mt-2'>
          August 2023 - March 2025 • Melbourne, AU
        </p>
        <ul className='mt-2'>
          <li>This role was voluntary.</li>
          <li>
            Co-lead a team working to develop a cutting-edge segmentation
            algorithm for perivascular spaces in MRI scans of the human brain.
          </li>
          <li>
            Collaborated with the{" "}
            <a href='https://www.monash.edu/medicine/translational/neuroscience/research/law-group'>
              iBrain research lab
            </a>{" "}
            at Monash University.
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>
          Quantitative Analyst Intern at{" "}
          <a href='https://www.churchillassetmanagement.com.au/'>
            Churchill Asset Management
          </a>
        </h2>
        <p className='font-extralight mt-2'>
          February 2023 - November 2023 • Melbourne, AU
        </p>
        <ul className='mt-2'>
          <li>
            Early stage Hedge Fund that invests in tech and biotech companies.
          </li>
          <li>
            Played a major role in developing, testing and optimising a complex
            systematic portfolio hedging algorithm to mitigate risk from ground
            up. This required to work on machine learning algorithms as a part
            of this process.
          </li>
          <li>
            Involved in developing and testing a sophisticated algorithm to
            optimise the allocation of capital across a multitude of biotech and
            tech themes.
          </li>
          <li>
            Collaborating with cross-functional teams to integrate insights and
            ideas.
          </li>
          <li>
            Effectively liaising and communicating with external party to build
            the scalable and robust infrastructure used to develop and run
            Churchill's algorithms and models.
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>
          Artificial Intelligence Research Assistant at{" "}
          <a href='https://www.mbsi.org.au/'>
            Melbourne Bioinnovation Student Initative
          </a>
        </h2>
        <p className='font-extralight mt-2'>
          August 2022 - August 2023 • Melbourne, AU
        </p>
        <ul className='mt-2'>
          <li>This role was voluntary.</li>
          <li>
            Developed deep learning and machine learning algorithms along with
            software applications in collaboration with Austin Radiology AI Labs
            to assist with Radiology research and clinical workflow at{" "}
            <a href='https://www.austin.org.au/'>Austin Hospital</a>
          </li>
          <li>Working in an interdisciplinary team.</li>
          <li>
            As a part of this role, I was appointed the position of Honorary
            Research Assistant at{" "}
            <a href='https://www.austin.org.au/'>Austin Hospital</a>.
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>
          Tutor at <a href='https://spectrumtuition.com/'>Spectrum Tuition</a>
        </h2>
        <p className='font-extralight mt-2'>
          February 2022 - February 2023 • Melbourne, AU
        </p>
        <ul className='mt-2'>
          <li>
            Ran both Mathematics and English tuition class for a variety of year
            levels in person as well as online.
          </li>
          <li>
            Coordinated with another tutor to run classes effectively in
            collaboration.
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <h2 className='text-lg'>Software project for Move Energy</h2>
        <p className='font-extralight mt-2'>
          December 2020 - January 2021 • Melbourne, AU
        </p>
        <ul className='mt-2'>
          <li>
            Developed the GUI software for a Linux-based embedded device using
            Python.
          </li>
          <li>
            Liaised with team at Move Energy to determine their technical
            requirement.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
