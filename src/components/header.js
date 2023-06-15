import React from 'react';
import Page from '../enums/pages';
import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';

const sm = 640;
const md = 768;

function Header(props) {
  const defaultClass = 'text-lg text-right sm:text-center';
  const toggledClass = `text-black ${defaultClass}`;
  const untoggledClass = `text-slate-500 hover:text-black ${defaultClass}`;

  const [isSm, setIsSm] = useState(window.innerWidth < sm ? true : false);
  const [isMd, setIsMd] = useState(
    sm <= window.innerWidth && window.innerWidth < md ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSm(window.innerWidth < sm ? true : false);
      setIsMd(sm <= window.innerWidth && window.innerWidth < md ? true : false);
    };

    window.addEventListener('resize', handleResize);
  });

  function handleNavigate(event, page) {
    event.preventDefault();
    console.log(page);

    switch (page) {
      case Page.Home: {
        navigate('/');
        break;
      }
      case Page.Projects: {
        navigate('/projects/');
        break;
      }
      case Page.Research: {
        navigate('/research/');
        break;
      }
      case Page.Resume: {
        navigate('/resume/');
        break;
      }
      default:
        navigate('/404/');
        break;
    }
  }

  function getTitleTag() {
    if (isSm || props === Page.Home) {
      return;
    } else if (isMd) {
      return <pre class='text-slate-500 w-max'>{props.page}</pre>;
    } else if (!isMd) {
      return <span class='text-slate-500'>{` - ${props.page}`}</span>;
    } else {
      console.error('Error getting title tag!');
    }
  }

  return (
    <>
      <header class='flex flex-row items-start max-h-fit my-20 space-x-5'>
        <button
          class='flex-none text-2xl sm:text-3xl justify-left'
          onClick={(event) => handleNavigate(event, Page.Home)}
        >
          Nishant Panchal
          {getTitleTag()}
        </button>
        <nav class='flex flex-col grow gap-x-5 justify-end pt-1 sm:pt-2 sm:flex-row'>
          <button
            class={props.page === Page.Projects ? toggledClass : untoggledClass}
            onClick={(event) => handleNavigate(event, Page.Projects)}
          >
            projects
          </button>
          <button
            class={props.page === Page.Research ? toggledClass : untoggledClass}
            onClick={(event) => handleNavigate(event, Page.Research)}
          >
            research
          </button>
          <button
            class={props.page === Page.Resume ? toggledClass : untoggledClass}
            onClick={(event) => handleNavigate(event, Page.Resume)}
          >
            resume
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
