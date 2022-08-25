import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ReservationContext } from '../../../../context/ReservationContext';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img27.jpg',
    title: 'Pokoj 1',

    price: '1000 Kč/noc',
    size: '20',
    location: '2 lůžka, oddělené postele, TV, sociální zařízení',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img27.jpg',
    title: 'Pokoj 2',
    time: '11:30 AM - 1:00 AM',
    price: '1000 Kč/noc',
    size: '20',
    location: '2 lůžka, manželská postel, TV, sociální zařízení',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img27.jpg',
    title: 'Pokoj 3',

    price: '1000 Kč/noc',
    size: '20',
    location: '2 lůžka, oddělené postele, TV, sociální zařízení',
  },
];

const FeaturedProperties = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { handleClickOpen } = useContext(ReservationContext);
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
          Pokoje
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
          Každý si najde to své
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Pokoje s vlastním sociálním zařízení
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
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
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                  }}
                >
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
                        {item.price}
                      </Typography>
                    </Box>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'}>
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
                      {item.size} {'\u33A1'}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
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
              onClick={handleClickOpen}
            >
              Rezervuj si svůj pokoj
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedProperties;
