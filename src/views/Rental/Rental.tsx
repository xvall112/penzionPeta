import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import KontaktDialog from '../../components/KontaktDialog';
import {
  Advantages,
  Articles,
  AskExpert,
  FeaturedProperties,
  Hero,
  Partners,
  Places,
  Reviews,
  Search,
  Teaser,
} from './components';

export const query = graphql`
  query {
    contentfulWeb {
      organization {
        tel
        email
        instagram
        id
      }
      heroSection {
        backgroundImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        subtitle
        title
      }
      infoSection {
        subtitle
        title
        hireBikeInfo
      }
      equipmentSection {
        titleColor
        title
        subtitle
        smallTitle
        equipmentList
        images {
          title
          gatsbyImageData(placeholder: BLURRED, aspectRatio: 1)
        }
      }
      roomsSection {
        smallTitle
        subtitle
        title
        rooms {
          calendarLink
          describe
          id
          info
          name
          price
          images {
            title
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 400
            )
          }
        }
      }
      photogallery {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 500)
        description
      }
      placesSection {
        smallTitle
        subtitle
        title
        places {
          title
          mapLink
          description
          images {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 400
            )
          }
        }
      }
    }
  }
`;

const Rental = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    organization,
    heroSection,
    infoSection,
    equipmentSection,
    roomsSection,
    photogallery,
    placesSection,
  } = data.contentfulWeb;
  console.log(heroSection);

  return (
    <Main colorInvert={true}>
      <KontaktDialog />
      <Hero data={heroSection} />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Search data={infoSection} />
        </Container>
      </Box>
      <Container>
        <Teaser data={equipmentSection} />
      </Container>
      {/*   <Container sx={{ paddingTop: '0 !important' }}>
        <Articles />
      </Container> */}
      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedProperties data={roomsSection} />
        </Container>
      </Box>
      <Container>
        <Places />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
      {/* <Container>
        <Partners />
      </Container> */}

      <Container>
        <Advantages />
      </Container>

      {/*  <Container>
        <AskExpert />
      </Container> */}
    </Main>
  );
};

export default Rental;
