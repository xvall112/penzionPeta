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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
          sx={{ order: { xs: 2, md: 1 } }}
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
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    align={'left'}
                    data-aos={'fade-up'}
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Vybavení
                  </Typography>
                </Grid>
                {data.equipmentList.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component={Card}
                      variant={'solid'}
                      bgcolor={'transparent'}
                      sx={{
                        cursor: 'pointer',
                      }}
                    >
                      <CardContent sx={{ paddingBottom: '16px !important' }}>
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
                              bgcolor={theme.palette.primary.main}
                              width={30}
                              height={30}
                            >
                              <svg
                                width={20}
                                height={20}
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
                      </CardContent>
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
          sx={{ order: { xs: 1, md: 2 } }}
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

        <Grid
          item
          container
          spacing={{ xs: 1, md: 4 }}
          sx={{ order: { xs: 3, md: 3 } }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align={'left'}
              data-aos={'fade-up'}
              sx={{
                fontWeight: 700,
              }}
            >
              Vhodné pro
            </Typography>
          </Grid>
          {data.suitFor.map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  /* transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  }, */
                }}
              >
                <Box
                  component={Card}
                  variant={'outlined'}
                  bgcolor={'transparent'}
                  padding={2}
                  width={1}
                  height={1}
                  data-aos={'fade-up'}
                  data-aos-delay={i * 100}
                  data-aos-offset={100}
                  data-aos-duration={600}
                >
                  <Box
                    position={'relative'}
                    display={'flex'}
                    justifyContent={'center'}
                  >
                    <Box
                      width={50}
                      height={50}
                      bgcolor={'secondary.main'}
                      borderRadius={'100%'}
                      sx={{
                        transform: `translate(${theme.spacing(
                          2,
                        )}, ${theme.spacing(-2)})`,
                        marginTop: 2,
                      }}
                    />
                    <Box
                      sx={{
                        color: 'primary.main',
                        position: 'absolute',
                        bottom: 0,
                      }}
                    >
                      <svg
                        height={48}
                        width={48}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d={item.icon.icon} />
                      </svg>
                    </Box>
                  </Box>
                  <Typography
                    variant={'subtitle1'}
                    align={'center'}
                    sx={{ fontWeight: 700, marginTop: 2 }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
