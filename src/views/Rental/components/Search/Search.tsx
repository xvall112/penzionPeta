import React, { useContext } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { ReservationContext } from '../../../../context/ReservationContext';
import { useTheme } from '@mui/material/styles';
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';

const Search = ({ data }): JSX.Element => {
  const { handleClickOpen } = useContext(ReservationContext);
  const theme = useTheme();
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
          {data.subtitle.subtitle}
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 1, md: 4 }}>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
            height={1}
            component={Card}
            boxShadow={3}
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
                <Typography color="text.secondary">
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
            height={1}
            component={Card}
            boxShadow={3}
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
                  Prodej
                </Typography>
                <Typography color="text.secondary">
                  domácích produktů z farmy
                </Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button
                  component={Link}
                  variant="contained"
                  color="secondary"
                  size="large"
                  to="/prodej"
                >
                  Více
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        {data.services.map((item, i) => (
          <Grid item xs={12} sm={4} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={3}
              padding={4}
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box display={'flex'} flexDirection={'column'}>
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={50}
                  height={50}
                  marginBottom={2}
                  bgcolor={theme.palette.primary.main}
                  color={theme.palette.background.paper}
                >
                  <svg
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={item.icon.icon} />
                  </svg>
                </Box>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;
