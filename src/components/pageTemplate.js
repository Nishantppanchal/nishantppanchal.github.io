import React from 'react';
import Layout from './layout';
import Header from './header';
import { motion, AnimatePresence } from 'framer-motion';

function PageTemplate({ children, page }) {
  return (
    <Layout>
      <title>{page}</title>
      <Header page={page} />
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default PageTemplate;
