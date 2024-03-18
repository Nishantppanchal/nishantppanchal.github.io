import React from 'react';
import TypingAnimation from '../components/typingAnimation';
import Page from '../enums/pages';
import PageTemplate from '../components/pageTemplate';
import Contact from '../components/contact';
import AboutMe from '../components/aboutMe';
import MyPhilosophy from '../components/myPhilosophy';

function IndexPage() {
  return (
    <PageTemplate page={Page.Home}>
      <div className='flex flex-col justify-center h-[calc(60vh)] sm:h-[calc(70vh)]'>
        <TypingAnimation textStyles='m-auto text-4xl md:text-5xl text-center' />
      </div>
      <MyPhilosophy />
      <div className='mt-20'>
        <AboutMe />
      </div>
      <div className='mt-20'>
        <Contact />
      </div>
    </PageTemplate>
  );
}

export default IndexPage;
