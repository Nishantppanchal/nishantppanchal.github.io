import React from 'react';

function Layout({ children }) {
  return (
    <div className='container min-h-full max-w-screen-md px-5 mx-auto py-[68px] sm:py-[116px] md:py-[148px]'>
      {children}
    </div>
  );
}
// mt-12 sm:mt-24 md:mt-32
export default Layout;
