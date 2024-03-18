import * as React from 'react';
import PageTemplate from '../components/pageTemplate';
import Page from '../enums/pages';
import Project from '../components/project';

const projects = [
  {
    projectName: 'Portfolio Website',
    date: 'June 2023',
    tags: ['Gatsby', 'ReactJS', 'Javascript', 'GitHub Pages'],
    shortDes: 'A static website about me',
    longDes: (
      <p>
        Developed using Gatsby and hosted on GitHub Pages, my personal website
        provided information about me and showcases my projects. With a sleek
        and modern design, it allows visitors to explore my creative endeavors
        and professional accomplishments. By leveraging the power of Gatsby, the
        website offers a fast and seamless browsing experience, ensuring that
        visitors can easily navigate through my projects and gain insights into
        my skills and expertise. The integration with GitHub Pages enables easy
        deployment and updates, ensuring that my site is always up-to-date with
        the latest additions to my portfolio.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/nishantppanchal.github.io',
      },
    ],
  },
  {
    projectName: 'COVID-19 Simulation Algorithm',
    date: 'May 2023',
    tags: ['Jupyter Notebooks', 'Python', 'Modelling'],
    shortDes:
      'Simulates spread of COVID-19 in the G02 Lecture Theatre on the Monash Clayton Campus',
    longDes: (
      <p>
        This is a model I develop for{' '}
        <a href='https://handbook.monash.edu/2023/units/FIT2083?year=2023'>
          FIT2083
        </a>
        . This model aims to simulate the spread of COVID-19 in the G02 Lecture
        Theatre at Monash University's Clayton Campus over the course of a
        semester. This algorithm utilises previous research to calculate
        transparency risk.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/COVID-19-Modelling-Algorithm',
      },
    ],
  },
  {
    projectName: 'Process Scheduler',
    date: 'November 2022',
    tags: ['C', 'makefile'],
    shortDes: 'Simulates a process scheduler in C',
    longDes: (
      <p>
        This program simulate a process scheduler in C for{' '}
        <a href='https://handbook.monash.edu/2022/units/FIT2100?year=2022'>
          FIT2100
        </a>
        . Three different scheduling algorithms.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/MONAI/tree/5674-get-std-from-tensor',
      },
    ],
  },
  {
    projectName: 'Fileutil C Program',
    date: 'August 2022',
    tags: ['C', 'makefile'],
    shortDes: 'A program to edit files from command line using C',
    longDes: (
      <p>
        A program written in C without any libraries for{' '}
        <a href='https://handbook.monash.edu/2022/units/FIT2100?year=2022'>
          FIT2100
        </a>
        . This program allows users to edit files from command line using C.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Fileutil-c-program',
      },
    ],
  },
  {
    projectName: 'RSA Key Generator',
    date: 'July 2022',
    tags: ['Python', 'Cryptography'],
    shortDes: 'A python RSA key generator without the use of libraries',
    longDes: (
      <p>
        A RSA key generator written in Python that allow user to generate RSA
        keys for encryption and decryption. No libraries where used to
        generating this the RSA key. All the mathematics was custom written.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/RSA-key-generator',
      },
    ],
  },
  {
    projectName: 'MARIE Wordle Game',
    date: 'July 2022',
    tags: ['Assembly', 'MARIE'],
    shortDes: 'Wordle game in MARIE',
    longDes: (
      <p>
        A wordle game in MARIE assembly language. This was developed as part of
        a project for{' '}
        <a href='https://handbook.monash.edu/2022/units/FIT1047'>FIT1047</a>.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/MAIRE-Wordle-Game',
      },
    ],
  },
  {
    projectName: 'Time Tracking Website',
    date: 'February 2022',
    tags: [
      'ReactJS',
      'Django',
      'RESTful API',
      'Google Login',
      'Authentication',
      'Postgres',
    ],
    shortDes: 'Project-based Time Tracking SPA',
    longDes: (
      <p>
        Trackable is a single page application application (SPA) that uses
        ReactJS on the frontend with Django and a PostgreSQL database on the
        backend, providing users with a solution to track and manage their time
        spent on projects or client work. With its intuitive interface, users
        can create project profiles, set time goals, and effortlessly record
        their activities, whether it's tracking billable hours, monitoring
        personal projects, or managing team efforts. By leveraging the
        flexibility and scalability of ReactJS, Django, and PostgreSQL,
        Trackable empowers users to gain valuable insights into their
        productivity patterns, make informed decisions, and optimize their
        workflow, ultimately boosting efficiency and helping them achieve their
        goals more effectively.
      </p>
    ),
    links: [
      {
        name: 'Front GitHub',
        href: 'https://github.com/Nishantppanchal/Time-tracking-website-frontend',
      },
      {
        name: 'Backend GitHub',
        href: 'https://github.com/Nishantppanchal/Time-tracking-website-backend',
      },
    ],
  },
  {
    projectName: 'Cave Discovery Algorithm',
    date: '2021',
    tags: ['Search Algorithm', 'Python'],
    shortDes: 'Search algorithm to solve the Cave Discovery problem',
    longDes: (
      <p>
        A search algorithm that solve the Cave Discovery problem in Python using
        PyNode. This is a problem that required me to use a transversal to map a
        cave and find the threats. This was an assignment for VCE Algorithmics
        units 3&4.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Cave-Discovery-Problem',
      },
    ],
  },
  {
    projectName: 'Virus Spread Model',
    date: '2021',
    tags: ['Modelling', 'Python'],
    shortDes:
      'A model simulating the spread of a computer virus in a computer network',
    longDes: (
      <p>
        This project required me to model the spread of a virus within a
        computer network. This project was an assignment in VCE Algorithmics
        units 3&4. This model was written in Python using Pynode.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Virus-spread-model',
      },
    ],
  },
  {
    projectName: 'Trapeze Problem',
    date: '2021',
    tags: ['Algorithms', 'Python'],
    shortDes: 'An algorithm solving Trapeze problem',
    longDes: (
      <p>
        A algorithmic solution to a problem with Python. The problem is called
        the Trapeze problem. The solution involves the use of graph theory. This
        project was an assignment in VCE Algorithmics units 3&4. This model was
        written in Python using Pynode.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Trapeze-Problem',
      },
    ],
  },
  {
    projectName: 'Pacman Game',
    date: '2021',
    tags: ['Pylet', 'OOP', 'Python', 'Game'],
    shortDes: 'A Pacman Game implement using OOP',
    longDes: (
      <p>
        A Object Oriented Programming (OOP) Pacman game. This Pacman game
        written in Python using Pyglet for the GUI.
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Pacman-game-with-OOP',
      },
      {
        name: 'Play on Replit',
        href: 'https://replit.com/@NishantP13/Pacman-game-with-OOP?lite=true',
      },
    ],
  },
  {
    projectName: 'Catch The Raindrops Game',
    date: '2020',
    tags: ['Pylet', 'Game', 'Python'],
    shortDes: 'A simple game where you catch the raindrop',
    longDes: (
      <p>
        <p>
          A game in python that involves the play to catch falling raindrops
          using their mouse. This is a very basic game, however it was meant to
          be a learning experience to provide me with the knowledge and tools to
          create more complex python games. Pyglet was used the GUI.
        </p>
        <p>
          Note the laggy expirence is due to very limited computing power on
          replit, not the program itself.
        </p>
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Catch-the-raindrops-game',
      },
      {
        name: 'Play on Replit',
        href: 'https://replit.com/@NishantP13/Catch-the-raindrops-game?lite=true',
      },
    ],
  },
  {
    projectName: 'Perceptron',
    date: '2019',
    tags: ['Machine Learning', 'Python', 'Classification'],
    shortDes: 'A perceptron to classify 3x3 drawing into Xs and Os',
    longDes: (
      <p>
        <p>
          This perceptron is neuron that is able to detect the difference
          between Xs and Os. Although it can be trained to believe and X or O is
          whatever shape the user desires by retraining it. The pre-existing
          trained perceptron is not prefect, however it simply a proof of
          concept and provided me a valuable learning experience. Pyglet was
          used the GUI.
        </p>
        <p>
          Note the laggy expirence is due to very limited computing power on
          replit, not the program itself.
        </p>
      </p>
    ),
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/Nishantppanchal/Perceptron',
      },
      {
        name: 'Run on Replit',
        href: 'https://replit.com/@NishantP13/Perceptron?lite=true',
      },
    ],
  },
];

const Projects = () => {
  return (
    <PageTemplate page={Page.Projects}>
      {projects.map(({ projectName, date, tags, shortDes, longDes, links }) => (
        <Project
          projectName={projectName}
          date={date}
          tags={tags}
          shortDes={shortDes}
          longDes={longDes}
          links={links}
        />
      ))}
    </PageTemplate>
  );
};

export default Projects;
