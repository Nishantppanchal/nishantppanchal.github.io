import * as React from 'react';
import PageTemplate from '../components/pageTemplate';
import Page from '../enums/pages';

const NotFoundPage = () => {
  return (
    <PageTemplate page={Page.Projects}>
      <div className='text-3xl mt-20 text-center'>
        🚧 Page Under Construction 🚧
      </div>
    </PageTemplate>
  );
};

export default NotFoundPage;
