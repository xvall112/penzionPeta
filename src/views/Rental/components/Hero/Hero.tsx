/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from 'components/Container';
import {
  IconButton,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
const Hero = ({ data }): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <ImageList
        cols={1}
        sx={{
          width: '100%',
          height: '100vh',
          margin: '0px',
        }}
      >
        <ImageListItem>
          <GatsbyImage
            image={data.backgroundImage.gatsbyImageData}
            alt={data.backgroundImage.gatsbyImageData}
            style={{ width: '100%', height: '100vh' }}
          />
          <ImageListItemBar
            sx={{ height: '100vh' }}
            position={'center'}
            title={
              <Typography variant="h1" fontWeight={700} align="center">
                {data.title}
              </Typography>
            }
            subtitle={
              <>
                <Typography variant="h5" align="center">
                  {data.subtitle}
                </Typography>
              </>
            }
            actionIcon={<KeyboardArrowDownIcon />}
          />
        </ImageListItem>
      </ImageList>
    </>
  );
};

export default Hero;
