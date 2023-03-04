import React from 'react';
import ProdejIndex from '../views/Prodej/Index';
import SEO from '../components/Seo';

const Prodej = (): JSX.Element => {
  return (
    <>
      <SEO title="Prodej" description="prodej domácíxh produktů z naší farmy" />
      <ProdejIndex />
    </>
  );
};

export default Prodej;
