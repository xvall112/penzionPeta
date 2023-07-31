import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CompanyTerms from '../views/CompanyTerms/CompanyTerms';
import SEO from '../components/Seo';

export const query = graphql`
  query {
    contentfulOrganization {
      zpraconnOsobnchDaj {
        raw
      }
    }
  }
`;

const Prodej = (): JSX.Element => {
  const data = useStaticQuery(query);
  return (
    <>
      <CompanyTerms
        title={'Zpracování osobních údajů penzion Jalovčí'}
        content={data.contentfulOrganization.zpraconnOsobnchDaj}
      />
    </>
  );
};

export default Prodej;

export function Head() {
  return <SEO title="Zpracování osobních údajů" />;
}