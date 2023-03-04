import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CompanyTerms from '../views/CompanyTerms/CompanyTerms';
import SEO from '../components/Seo';

export const query = graphql`
  query {
    contentfulOrganization {
      ubytovacD {
        raw
      }
    }
  }
`;

const UbytovaciRad = (): JSX.Element => {
  const data = useStaticQuery(query);
  return (
    <>
      <CompanyTerms
        title={'Ubztovací řád penzion Jalovčí'}
        content={data.contentfulOrganization.ubytovacD}
      />
    </>
  );
};

export default UbytovaciRad;

export function Head() {
  return <SEO title="Ubytovací řád" />;
}
