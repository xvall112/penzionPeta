import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Places = (): JSX.Element => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index: number): void => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = (): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: '../../../../images/pool.jpg',
      source: '../../../../images/pool.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: '../../../../images/pool.jpg',
      source: '../../../../images/pool.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: '../../../../images/pool.jpg',
      source: '../../../../images/pool.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: '../../../../images/pool.jpg',
      source: '../../../../images/pool.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      {/* <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Places
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Find more places
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          For entrepreneurs, startups and freelancers.
          <br />
          Discover coworking spaces designed to inspire and to connect you to a
          community of motivated people.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Book a space
          </Button>
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
            onClick={() => openLightbox(0)}
          >
            Open the gallery
          </Box>
        </Box>
      </Box> */}
      <Box
        sx={{
          borderRadius: '10px',
          WebkitBorderRadius: '10px',
          overflow: 'hidden',
          '& img': {
            borderRadius: '10px',
            WebkitBorderRadius: '10px',
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StaticImage
              layout={'fullWidth'}
              height={500}
              src="../../../../images/pool.jpg"
              alt="..."
              style={{ borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StaticImage
              layout={'fullWidth'}
              height={500}
              src="../../../../images/house.jpg"
              alt="..."
              style={{ borderRadius: '10px' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <StaticImage
              layout={'fullWidth'}
              height={500}
              src="../../../../images/titleImage.jpg"
              alt="..."
              style={{ borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StaticImage
              layout={'fullWidth'}
              height={500}
              src="../../../../images/sunset.jpg"
              alt="..."
              style={{ borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StaticImage
              layout={'fullWidth'}
              height={500}
              src="../../../../images/seroundings.jpg"
              alt="..."
              style={{ borderRadius: '10px' }}
            />
          </Grid>
        </Grid>
      </Box>
      {/*  {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )} */}
    </Box>
  );
};

export default Places;
