import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import DonutAnimation from '../components/donutAnimation';
import Donut from '../components/Donut';
import Typical from 'react';
import TypingAnimation from '../components/typingAnimation';
import Page from '../enums/pages';
import Font from '../enums/fonts';
import PageTemplate from '../components/pageTemplate';

const TYPING_TEXTS = [
  'Software Engineer',
  'Designer',
  'Researcher',
  'Problem Solver',
];
const TYPING_STYLES = [
  Font.SpaceMono,
  Font.Sofia,
  Font.Spectral,
  Font.MontserratAlternates,
];

function IndexPage() {
  return (
    <PageTemplate page={Page.Home}>
      <TypingAnimation
        prefixText='I am a'
        texts={TYPING_TEXTS}
        textsStyles={TYPING_STYLES}
      />
    </PageTemplate>
  );
}

export default IndexPage;
