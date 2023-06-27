import React from 'react';
import Page from '../enums/pages';
import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';
import TypingAnimation from './typingAnimation';
import { motion } from 'framer-motion';

const md = 768;

function Header(props) {
  const defaultClass = 'text-lg text-right sm:text-center';
  const toggledClass = `text-black ${defaultClass}`;
  const untoggledClass = `text-slate-500 hover:text-black ${defaultClass}`;

  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < md ? true : false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, []);

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
      <header className='flex flex-row items-start max-h-fit space-x-5'>
        <div className='flex-none text-2xl sm:text-3xl justify-left text-left'>
          <div className='flex flex-row space-x-2'>
            <motion.button
              onClick={(event) => handleNavigate(event, Page.Home)}
              whileTap={{ scale: 0.95 }}
            >
              Nishant Panchal
            </motion.button>
            {props.page !== Page.Home && !isMd ? (
              <motion.span
                initial={{ opacity: 0, y: '0.25em' }}
                animate={{ opacity: 1, y: '0em' }}
                exit={{ opacity: 0, y: '-0.25em' }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className='text-slate-500 inline-block'
                before=' '
              >{` - ${props.page}`}</motion.span>
            ) : (
              ''
            )}
          </div>
          {props.page !== Page.Home ? (
            <div className='h-8'>
              <TypingAnimation textStyles='text-lg' />
            </div>
          ) : (
            ''
          )}
        </div>
        <nav className='flex flex-col grow gap-x-5 justify-end pt-1 sm:pt-2 sm:flex-row'>
          <motion.button
            className={
              props.page === Page.Projects ? toggledClass : untoggledClass
            }
            onClick={(event) => handleNavigate(event, Page.Projects)}
            whileTap={{ scale: 0.95 }}
          >
            projects
          </motion.button>
          <motion.button
            className={
              props.page === Page.Research ? toggledClass : untoggledClass
            }
            onClick={(event) => handleNavigate(event, Page.Research)}
            whileTap={{ scale: 0.95 }}
          >
            research
          </motion.button>
          <motion.button
            className={
              props.page === Page.Resume ? toggledClass : untoggledClass
            }
            onClick={(event) => handleNavigate(event, Page.Resume)}
            whileTap={{ scale: 0.95 }}
          >
            resume
          </motion.button>
        </nav>
      </header>
    </>
  );
}

export default Header;
