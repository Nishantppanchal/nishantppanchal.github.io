import React from 'react';
import Page from '../enums/pages';
import { navigate } from 'gatsby';

function Header(props) {
  const toggledClass = 'text-black';
  const untoggledClass = 'text-slate-500 hover:text-black';

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

  return (
    <>
      <header class='flex flex-row items-center max-h-fit m-5'>
        <button
          class='flex-none font-bold text-2xl'
          onClick={(event) => handleNavigate(event, Page.Home)}
        >
          {'Nishant Panchal' +
            (props.page !== Page.Home ? ` - ${props.page}` : '')}
        </button>
        <nav class='flex grow gap-x-5 justify-end'>
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
