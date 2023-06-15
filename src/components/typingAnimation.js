import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TypingPhase from '../enums/typingPhases';
import Font from '../enums/fonts';

const TYPING_INTERVAL = 150;
const IDLING_START_INTERVAL = 500;
const IDLING_END_INTERVAL = 2000;
const DELETING_INTERVAL = 50;
const STYLES_CSS = {
  [Font.Poppins]: 'font-poppins',
  [Font.SpaceMono]: 'font-spaceMono',
  [Font.Sofia]: 'font-sofia',
  [Font.Spectral]: 'font-spectral',
  [Font.MontserratAlternates]: 'font-montserratAlternates',
};

function TypingAnimation(props) {
  const texts = props.texts;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [typingPhase, setTypingPhase] = useState(TypingPhase.Typing);

  useEffect(() => {
    switch (typingPhase) {
      case TypingPhase.Typing: {
        if (typedText.length >= texts[currentIndex].length) {
          setTypingPhase(TypingPhase.Idling);
        } else {
          const timeout = setTimeout(() => {
            setTypedText(texts[currentIndex].slice(0, typedText.length + 1));
          }, TYPING_INTERVAL);
          return () => clearTimeout(timeout);
        }
      }
      case TypingPhase.Idling: {
        if (typedText.length == 0) {
          setCurrentIndex((currentIndex + 1) % texts.length);
          const timeout = setTimeout(() => {
            setTypingPhase(TypingPhase.Typing);
          }, IDLING_START_INTERVAL);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setTypingPhase(TypingPhase.Deleting);
          }, IDLING_END_INTERVAL);
          return () => clearTimeout(timeout);
        }
      }
      case TypingPhase.Deleting: {
        if (typedText.length <= 0) {
          setTypingPhase(TypingPhase.Idling);
        } else {
          const timeout = setTimeout(() => {
            setTypedText(texts[currentIndex].slice(0, typedText.length - 1));
          }, DELETING_INTERVAL);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [texts, typedText, typingPhase]);

  return (
    <div class='flex justify-center'>
      <div class='py-[30%] text-4xl md:text-5xl text-center'>
        <span>{props.prefixText + ' '}</span>
        <span
          className={`cursor ${
            typingPhase == TypingPhase.Idling ? ' blinking' : ''
          }`}
            // className='cursor'
        >
          <span class={STYLES_CSS[props.textsStyles[currentIndex]]}>
            {typedText}
          </span>
        </span>
      </div>
    </div>
  );
}

export default TypingAnimation;
