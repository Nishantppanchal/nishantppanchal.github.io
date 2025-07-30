import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TypingPhase from "../enums/typingPhases";

const TYPING_INTERVAL = 150;
const IDLING_START_INTERVAL = 500;
const IDLING_END_INTERVAL = 2000;
const DELETING_INTERVAL = 50;
const TYPING_TEXTS = ["Engineer", "Designer", "Researcher", "Problem Solver"];
const TYPING_STYLES = [
  "font-spaceMono",
  "font-sofia",
  "font-spectral",
  "font-montserratAlternates",
];

function TypingAnimation(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [typingPhase, setTypingPhase] = useState(TypingPhase.Typing);

  useEffect(() => {
    switch (typingPhase) {
      case TypingPhase.Typing: {
        if (typedText.length >= TYPING_TEXTS[currentIndex].length) {
          setTypingPhase(TypingPhase.Idling);
        } else {
          const timeout = setTimeout(() => {
            setTypedText(
              TYPING_TEXTS[currentIndex].slice(0, typedText.length + 1)
            );
          }, TYPING_INTERVAL);
          return () => clearTimeout(timeout);
        }
        break;
      }
      case TypingPhase.Idling: {
        if (typedText.length === 0) {
          setCurrentIndex((currentIndex + 1) % TYPING_TEXTS.length);
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
            setTypedText(
              TYPING_TEXTS[currentIndex].slice(0, typedText.length - 1)
            );
          }, DELETING_INTERVAL);
          return () => clearTimeout(timeout);
        }
        break;
      }
      default: {
        console.error("Invalid TypePhase");
        break;
      }
    }
  }, [typedText, typingPhase]);

  return (
    <div className={props.textStyles}>
      <span>I am a </span>
      <span
        className={`cursor ${
          typingPhase === TypingPhase.Idling ? " blinking" : ""
        } ${TYPING_STYLES[currentIndex]} will-change-scroll`}
        // className='cursor'
      >
        {typedText}
      </span>
    </div>
  );
}

export default TypingAnimation;
