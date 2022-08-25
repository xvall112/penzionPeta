import React from 'react';
import Rental from 'views/Rental';
import SEO from '../components/Seo';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Rental />
      <SEO
        title="Petra Dědinová"
        description="Ubytování v penzionu Domeček Jalovčí"
      />
    </>
  );
};

export default IndexPage;
