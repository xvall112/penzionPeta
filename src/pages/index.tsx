import React from 'react';
import Rental from 'views/Rental';
import SEO from '../components/Seo';

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Rental />
    </>
  );
};

export default IndexPage;
export function Head() {
  return (
    <SEO
      title="Domeček Jalovčí"
      description="Ubytování a agroturistika v malebné vesničce Třtí-Jalovčí v malé zemědělské usedlosti."
    />
  );
}
