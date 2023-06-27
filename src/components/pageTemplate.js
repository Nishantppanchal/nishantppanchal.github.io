import React from 'react';
import Layout from './layout';
import Header from './header';
import { motion } from 'framer-motion';

function PageTemplate({ children, page }) {
  return (
    <Layout>
      <title>{page}</title>
      <Header page={page} />
      <motion.main
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{
          x: 100,
          opacity: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
      >
        {children}
      </motion.main>
    </Layout>
  );
}

export default PageTemplate;
