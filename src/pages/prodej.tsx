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
    <SEO title="Prodej" description="prodej domácíxh produktů z naší farmy" />
  );
}
