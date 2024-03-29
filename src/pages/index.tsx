import React from 'react';
import Rental from 'views/Rental';
import SEO from '../components/Seo';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Ubytování a agroturistika"
        description="Ubytování v penzionu Domeček Jalovčí"
      />
      <Rental />
    </>
  );
};

export default IndexPage;
