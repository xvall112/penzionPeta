import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { ReservationContext } from '../../../context/ReservationContext';

const mock = [
  {
    caption: 'New in store',
    title: 'Air Jordan 1 Mid Banned',
    description:
      'All orders will be shipped with DHL Express, including On Demand Delivery service.',
    image: 'https://assets.maccarianagency.com/backgrounds/img64.png',
    href: '/demos/ecommerce/product-overview',
  },
  {
    caption: 'Top price',
    title: 'Air Jordan 1 Retro High White University Blue Black',
    description:
      'We only accept items that are 100% authentic. All items must first be checked carefully.',
    image: 'https://assets.maccarianagency.com/backgrounds/img65.png',
    href: '/demos/ecommerce/product-overview',
  },
  {
    caption: 'New arrival',
    title: 'Nike Dunk High SE Camo Black Royal',
    description:
      'Our shoes are always unworn and supplied in the original shoe box.',
    image: 'https://assets.maccarianagency.com/backgrounds/img66.png',
    href: '/demos/ecommerce/product-overview',
  },
];

const PromoGrid = (): JSX.Element => {
  const theme = useTheme();
  const { handleClickOpen } = useContext(ReservationContext);
  return (
    <Grid container spacing={{ xs: 2, sm: 4 }}>
      {mock.map((item) => {
        return (
          <Grid item xs={12}>
            <Card
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                height: 1,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row-reverse' },
                alignItems: 'center',
              }}
            >
              <Box sx={{ p: 4, mb: 2 }}>
                <Box
                  component={LazyLoadImage}
                  effect="blur"
                  src={item.image}
                  width={1}
                  maxWidth={1}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.5)'
                        : 'none',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  color={'text.secondary'}
                  fontWeight={700}
                  variant={'caption'}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.caption}
                </Typography>
                <Typography variant={'h5'} fontWeight={700} marginY={1}>
                  {item.title}
                </Typography>
                <Typography color={'text.secondary'}>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  sx={{
                    textTransform: 'uppercase',
                    display: 'block',
                    mt: { xs: 2, sm: 4 },
                    fontWeight: 700,
                  }}
                >
                  Koupit
                </Button>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PromoGrid;
