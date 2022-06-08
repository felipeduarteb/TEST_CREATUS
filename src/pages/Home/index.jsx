import React from 'react';
import Contact from '../../components/Contact';
import Header from '../../components/Header';

import { Container } from './styled';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default Home;