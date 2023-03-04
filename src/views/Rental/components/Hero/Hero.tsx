/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme, alpha } from '@mui/material/styles';
import { StaticImage } from 'gatsby-plugin-image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from 'components/Container';
import { Box, Typography } from '@mui/material';

const Hero = ({ data }): JSX.Element => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });
  const theme = useTheme();

  return (
    <>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        height={'110vh'}
        display={'flex'}
        alignItems={'center'}
        marginTop={-13}
        paddingTop={13}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          component={GatsbyImage}
          image={data.backgroundImage.gatsbyImageData}
          alt={data.backgroundImage.title}
          sx={{
            position: 'absolute',
            objectFit: 'cover',
            /* support for plugin https://github.com/bfred-it/object-fit-images */
            fontFamily: 'object-fit: cover;',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 1,
            height: 1,
            background: alpha(theme.palette.common.black, 0.5),
            zIndex: 1,
          }}
        />

        <Box margin={'0 auto'} maxWidth="600px" zIndex={2} px={2}>
          <StaticImage
            src={'../../../../images/logoObdelnik.png'}
            alt="logo"
            style={{ height: '100%', maxWidth: '100%' }}
          />

          {/* <Typography
              variant="h1"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 900,
                color: 'common.white',
                textTransform: 'uppercase',
              }}
            >
              {data.title}
            </Typography> */}

          <Typography
            variant="h4"
            align="center"
            component="p"
            color="common.white"
          >
            {data.subtitle}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
