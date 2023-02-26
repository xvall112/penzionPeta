import React, { useContext } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { ReservationContext } from '../../../../context/ReservationContext';
import { useTheme } from '@mui/material/styles';
import { MdOutlineOutdoorGrill } from '@react-icons/all-files/md/MdOutlineOutdoorGrill';
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
          {data.subtitle}
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 1, md: 4 }}>
        <Grid item xs={12} sm={6}>
          <Box
            padding={{ xs: 3, sm: 6 }}
            width={1}
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
                  Pronájem kol
                </Typography>
                <Typography color="text.secondary">
                  4 horská kola k půjčení
                </Typography>
              </Box>
              <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={handleClickOpen}
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
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8.06 2c-.18 1.17.11 2.16.89 2.97.5.5.66 1.17.47 2.03h.99c.12-.55.14-1 .04-1.45-.09-.42-.4-.92-.95-1.52-.45-.56-.61-1.23-.45-2.03h-.99m2.49 0c-.19 1.17.11 2.16.89 2.97.5.5.65 1.17.47 2.03h.98c.11-.55.14-1 .05-1.45-.1-.42-.41-.92-.94-1.52-.47-.56-.62-1.23-.47-2.03h-.98m2.53 0c-.19 1.17.11 2.16.89 2.97.5.5.64 1.17.42 2.03h1.03c.13-.55.14-1 .05-1.45-.09-.42-.41-.92-.94-1.52-.47-.56-.62-1.23-.47-2.03h-.98M5 8c0 1.42.39 2.7 1.14 3.84a6.892 6.892 0 003 2.55l-3.98 6.05c-.1.12-.16.31-.16.56 0 .41.16.69.44.84.12.1.31.16.56.16.41 0 .69-.16.84-.44l.99-1.59h6.37c.21.58.59 1.08 1.08 1.45.5.38 1.08.58 1.72.58.83 0 1.53-.31 2.13-.91.59-.59.87-1.29.87-2.09 0-.83-.28-1.53-.87-2.12-.6-.6-1.3-.88-2.13-.88-.64 0-1.22.17-1.72.55-.5.37-.86.86-1.08 1.45H9.14l1.97-3.05c.16.05.45.05.89.05s.73 0 .89-.05l.99 1.55c.41-.54.96-.96 1.59-1.22l-.56-.89c1.12-.5 2.09-1.39 2.88-2.62C18.59 10.5 19 9.27 19 8H5m12 10c.3 0 .53.09.72.28.19.19.28.44.28.72 0 .27-.09.5-.28.71-.18.2-.44.29-.72.29-.26 0-.5-.09-.71-.29A.998.998 0 0116 19c0-.3.09-.53.29-.72.21-.19.44-.28.71-.28z" />
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
