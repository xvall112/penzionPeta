import React from 'react';
import CompanyTerms from '../views/CompanyTerms/CompanyTerms';
import SEO from '../components/Seo';

const Prodej = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Ubytování a agroturistika"
        description="Ubytování v penzionu Domeček Jalovčí"
      />
      <CompanyTerms />
    </>
  );
};

export default Prodej;
