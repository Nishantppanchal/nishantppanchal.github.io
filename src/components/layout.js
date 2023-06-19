import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <div className='container min-h-full min-w-screen-md max-w-screen-md px-5 mx-auto py-[68px] sm:py-[116px] md:py-[148px]'>
        {children}
      </div>
    </div>
  );
}
// mt-12 sm:mt-24 md:mt-32
export default Layout;
