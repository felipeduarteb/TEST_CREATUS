import React from 'react';
import Contact from '../../components/Contact';
import Header from '../../components/Header';
import ShareNews from '../../components/ShareNews';
import SpecialSelection from '../../components/SpecialSelection';

import { Container } from './styled';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Contact />
        <SpecialSelection />
        <ShareNews />
      </Container>
    </>
  );
}

export default Home;