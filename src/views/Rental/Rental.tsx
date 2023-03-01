import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';

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
        services {
          title
          subtitle
          icon {
            icon
          }
          ic {
            ic
          }
        }
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
        suitFor {
          title
          icon {
            icon
          }
        }
      }
      roomsSection {
        smallTitle
        subtitle
        title
        rooms {
          describe
          id
          calendarId
          info
          name
          price
          images {
            url
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
        url
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 500)
        title
      }
      reviews {
        name
        review
      }
      placesSection {
        smallTitle
        subtitle
        title
        places {
          smallTitle
          title
          mapLink
          description
          more
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
    reviews,
    placesSection,
  } = data.contentfulWeb;
  console.log(heroSection);

  return (
    <Main colorInvert={true}>
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
      <Box bgcolor={'alternate.main'} id="rental">
        <Container>
          <FeaturedProperties data={roomsSection} />
        </Container>
      </Box>
      <Container>
        <Places data={photogallery} />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Reviews data={reviews} />
        </Container>
      </Box>
      {/* <Container>
        <Partners />
      </Container> */}

      <Container>
        <Advantages data={placesSection} />
      </Container>

      {/*  <Container>
        <AskExpert />
      </Container> */}
    </Main>
  );
};

export default Rental;
