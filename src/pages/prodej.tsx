import React from 'react';
import ProdejIndex from '../views/Prodej/Index';
import SEO from '../components/Seo';

const Prodej = (): JSX.Element => {
  return (
    <>
      <ProdejIndex />
    </>
  );
};

export default Prodej;

export function Head() {
  return (
    <SEO
      title="Prodej"
      description="prodej domácíxh produktů z naší farmy"
      image="https://images.ctfassets.net/std3enenx15w/3btEvEB2WfZacGjdnmExnm/9c51342c0a1bed04e4106bac5d1f3875/24.png"
    />
  );
}
