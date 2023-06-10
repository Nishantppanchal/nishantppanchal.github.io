import React from 'react';
import Page from '../enums/pages';

function Header(props) {
  const toggledClass = 'text-black';
  const untoggledClass = 'text-slate-500 hover:text-black';

  function upperFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <header class='flex flex-row items-center max-h-fit m-5'>
        <button class='flex-none font-bold text-2xl'>
          {'Nishant Panchal' +
            (props.page != Page.Home ? ` - ${props.page}` : '')}
        </button>
        <nav class='flex grow gap-x-5 justify-end'>
          <button
            class={props.page === Page.Projects ? toggledClass : untoggledClass}
          >
            projects
          </button>
          <button
            class={props.page === Page.Research ? toggledClass : untoggledClass}
          >
            research
          </button>
          <button
            class={props.page === Page.Resume ? toggledClass : untoggledClass}
          >
            resume
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
