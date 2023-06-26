import * as React from 'react';
import PageTemplate from '../components/pageTemplate';
import Page from '../enums/pages';
import Project from '../components/project';

const research = [
  {
    projectName: 'Osteoporosis CT',
    date: 'August 2022',
    tags: [
      'Artificial Intelligence',
      'Deep Learning',
      'Machine Learning',
      'Radiology',
      'Classification',
      'PyTorch',
    ],
    shortDes: 'Deep learning algorithm to screen for Osteoporosis',
    longDes: (
      <p>
        Developing a deep learning algorithm with PyTorch to screen for
        Osteoporosis in patients based on head CT scans. For this research
        project, I'm working on a team that is collaborating with Austin
        Hospital to conduct the research.
      </p>
    ),
    links: [],
  },
];

function Research() {
  return (
    <PageTemplate page={Page.Research}>
      {research.map(({ projectName, date, tags, shortDes, longDes, links }) => (
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
}

export default Research;
