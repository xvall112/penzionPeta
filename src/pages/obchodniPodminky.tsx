import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import CompanyTerms from '../views/CompanyTerms/CompanyTerms';
import SEO from '../components/Seo';

export const query = graphql`
  query {
    contentfulOrganization {
      obchodnPodmnky {
        raw
      }
    }
  }
`;

const ObchodniPodmiky = (): JSX.Element => {
  const data = useStaticQuery(query);
  return (
    <>
      <SEO
        title="Obchodní Podmíky"
        description="Ubytování v penzionu Domeček Jalovčí"
      />
      <CompanyTerms
        title={'Obchodní Podmíky penzion Jalovčí'}
        content={data.contentfulOrganization.obchodnPodmnky}
      />
    </>
  );
};

export default ObchodniPodmiky;
