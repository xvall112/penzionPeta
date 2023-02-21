/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GatsbyImage } from 'gatsby-plugin-image';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { style } from '@mui/system';

const Teaser = ({ data }): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}
        >
          <Box>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              {data.smallTitle}
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              {data.title}{' '}
              <Typography color="primary" variant="inherit" component="span">
                {data.titleColor}
              </Typography>
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              {data.subtitle}
            </Typography>
            <Box mt={2}>
              <Grid container spacing={1}>
                {data.equipmentList.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width={'auto'}
                      padding={0}
                    >
                      <Box
                        component={ListItemAvatar}
                        minWidth={'auto !important'}
                        marginRight={2}
                      >
                        <Box
                          component={Avatar}
                          bgcolor={theme.palette.secondary.main}
                          width={20}
                          height={20}
                        >
                          <svg
                            width={12}
                            height={12}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Box>
                      </Box>
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '10px',
              WebkitBorderRadius: '10px',
              width: '100%',
              '& .slick-dots': {
                bottom: '15px',
                '& li': { margin: '0px' },
                '& button:before': {
                  color: `white !important`,
                  fontSize: '10px',
                },
              },
              '& .slick-prev': {
                display: 'block',
                left: 20,
                zIndex: 10,
              },
              '& .slick-next': {
                display: 'block',
                right: 20,
                zIndex: 10,
              },
              '& .slick-prev, & .slick-next': {
                width: 32,
                height: 32,
                '&:before': {
                  fontSize: 32,
                  color: 'common.white',
                },
              },
            }}
          >
            <Slider {...settings}>
              {data?.images?.map((img, i) => {
                return (
                  <Box key={i}>
                    <GatsbyImage
                      image={img.gatsbyImageData}
                      alt={img.title}
                      style={{ width: '100%', height: '100%' }}
                      imgStyle={{
                        borderRadius: '10px',
                        WebkitBorderRadius: '10px',
                      }}
                    />
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
