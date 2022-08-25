/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { StaticImage } from 'gatsby-plugin-image';

const Teaser = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

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
              Ubytování
            </Typography>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Domeček{' '}
              <Typography color="primary" variant="inherit" component="span">
                Jalovčí
              </Typography>
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Ubytování se nachází v krásne přírodě Středočeského kraje
              <br />
              Celkem 6 lůžek
              <br />
              Vlastní sociální zařízení
            </Typography>
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
          <StaticImage
            src="../../../../images/house.jpg"
            alt="Domecek Jalovci"
            width="100%"
            height="500px"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
