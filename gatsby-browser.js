import './src/styles/global.css';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

export function wrapPageElement({ element, props }) {
  return <AnimatePresence mode='wait'>{element}</AnimatePresence>;
}
