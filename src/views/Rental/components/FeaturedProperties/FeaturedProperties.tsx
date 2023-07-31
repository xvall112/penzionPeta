import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme } from '@mui/material/styles';
import RezervationModal from './components/RezervationModal';
import InfoModal from './components/InfoModal';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: 20 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: 20, zIndex: 10 }}
      onClick={onClick}
    />
  );
}

const FeaturedProperties = ({ data }): JSX.Element => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {data.smallTitle}
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
          {data.title}
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          {data.subtitle}
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {data.rooms.map((room, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                boxShadow={3}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 280,
                    overflow: 'hidden',
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
                    '& .slick-dots': {
                      bottom: '15px',
                      '& li': { margin: '0px' },
                      '& button:before': {
                        color: 'white !important',
                        fontSize: '10px',
                      },
                    },
                  }}
                >
                  <Slider {...settings}>
                    {room?.images?.map((img, i) => {
                      return (
                        <Box height={'280px'} key={i}>
                          <GatsbyImage
                            key={i}
                            image={img.gatsbyImageData}
                            alt={img.title}
                            style={{ width: '100%', height: '280px' }}
                            imgStyle={{
                              borderRadius: '10px 10px 0px 0px',
                              WebkitBorderRadius: '10px 10px 0px 0px',
                            }}
                          />
                        </Box>
                      );
                    })}
                  </Slider>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    position={'absolute'}
                    bottom={0}
                    padding={2}
                    width={1}
                  >
                    <Box
                      padding={1}
                      bgcolor={'background.paper'}
                      boxShadow={1}
                      borderRadius={2}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        {room.price} Kč
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {room.name}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {room.describe}
                    </Typography>
                  </Box>
                  {/*  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      20 {'\u33A1'}
                    </Typography>
                  </Box> */}
                </CardContent>
                <Box display={'flex'} flexGrow={1} />
                <CardActions>
                  <Box width="100%">
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <InfoModal
                          title={room.name}
                          list={room.info}
                          price={room.price}
                          images={room.images}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <RezervationModal
                          calendarId={room.calendarId}
                          title={room.name}
                          price={room.price}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardActions>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProperties;
