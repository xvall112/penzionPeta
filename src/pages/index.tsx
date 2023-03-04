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
      image="https://images.ctfassets.net/std3enenx15w/3btEvEB2WfZacGjdnmExnm/9c51342c0a1bed04e4106bac5d1f3875/24.png"
    />
  );
}
