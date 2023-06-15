import React from 'react';
import Layout from './layout';
import Header from './header';
import { Transition } from 'react-transition-group';

function PageTemplate({ children, page, location }) {
  return (
    <Layout>
      <title>page</title>
      <Header page={page} />
      {children}
    </Layout>
  );
}

export default PageTemplate;
