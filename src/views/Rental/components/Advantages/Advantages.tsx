import React from 'react';
import Box from '@mui/material/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Advantages = ({ data }): JSX.Element => {
  const { smallTitle, subtitle, title, places } = data;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: !isMd,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: isMd,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Box marginBottom={8}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {smallTitle}
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
          {title}
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          data-aos={'fade-up'}
          sx={{ textAlign: { xs: 'left', md: 'center' } }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          height: { xs: 'auto', md: 1 },

          '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
            height: { xs: 'auto', md: 1 },
          },
          '& .slick-prev, & .slick-next': {
            zIndex: 2,
            bottom: 0,
            top: '100%',
            left: '100%',
            right: 0,
            transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
            marginLeft: theme.spacing(-2),
            width: 32,
            height: 32,
            '&:before': {
              fontSize: 32,
              color: 'primary.main',
            },
          },
          '& .slick-prev': {
            marginLeft: theme.spacing(-7),
          },
          '& .slick-slide > div': {
            marginX: '20px',
          },
        }}
      >
        <Slider {...sliderOpts}>
          {places.map((item, i) => (
            <Box key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
              <GatsbyImage
                image={item.images.gatsbyImageData}
                alt={item.images.title}
                imgStyle={{ borderRadius: '10px', WebkitBorderRadius: '10px' }}
                style={{ height: '200px', marginBottom: '10px' }}
              />
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
                align={'left'}
              >
                {item.smallTitle}
              </Typography>
              <ListItemText
                primary={item.title}
                secondary={item.description}
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{ variant: 'subtitle1' }}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 700,
                  },
                  margin: 0,
                }}
              />
              <Box sx={{ flexGrow: 1 }} />
              {item.more && (
                <Box marginTop={1}>
                  <Button
                    component={'a'}
                    href={item.more}
                    target="_blank"
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Více
                  </Button>
                </Box>
              )}
              {item.mapLink && (
                <Button
                  component={'a'}
                  href={item.mapLink}
                  target="_blank"
                  endIcon={
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={24}
                      height={24}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </Box>
                  }
                >
                  Mapa
                </Button>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Advantages;
