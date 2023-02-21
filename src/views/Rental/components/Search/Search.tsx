import React, { useContext } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReservationContext } from '../../../../context/ReservationContext';

const Search = ({ data }): JSX.Element => {
  const { handleClickOpen } = useContext(ReservationContext);
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="h6"
          color={'text.secondary'}
          data-aos={'fade-up'}
          sx={{ textAlign: { xs: 'left', md: 'center' } }}
        >
          {data.subtitle}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Ubytování
                </Typography>
                <Typography>
                  3x dvoulůžkový pokoj s vlastním sociálním zařízení{' '}
                </Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button
                  variant="contained"
                  size="large"
                  color={'secondary'}
                  onClick={() => scrollTo('#rental')}
                >
                  Více
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            component={Card}
            boxShadow={4}
            data-aos="fade-up"
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box>
                <Typography fontWeight={700} variant={'h6'} gutterBottom>
                  Pronájem kol
                </Typography>
                <Typography>4 horská kola k půjčení</Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleClickOpen}
                >
                  Více
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
