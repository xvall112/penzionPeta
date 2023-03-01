import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Hero from './components/Hero';
import PromoGrid from './components/PromoGrid';

const Index = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <PromoGrid />
      </Container>
    </Main>
  );
};

export default Index;
