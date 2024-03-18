import * as React from 'react';
import PageTemplate from '../components/pageTemplate';
import Page from '../enums/pages';
import Contact from '../components/contact';
import Education from '../components/education';
import Experience from '../components/experience';
import Achievements from '../components/achievements';

function Resume() {
  return (
    <PageTemplate page={Page.Resume}>
      <div className='mt-20'>
        <Contact />
      </div>
      <div className='mt-20'>
        <Education />
      </div>
      <div className='mt-20'>
        <Experience />
      </div>
      <div className='mt-20'>
        <Achievements />
      </div>
    </PageTemplate>
  );
}

export default Resume;
