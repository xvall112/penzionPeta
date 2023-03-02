import React, { useContext } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';
import { ReservationContext } from '../../../../context/ReservationContext';

export const query = graphql`
  query {
    contentfulWeb {
      organization {
        email
        instagram
        tel
      }
    }
  }
`;

const Footer = (): JSX.Element => {
  const data = useStaticQuery(query);
  const { email, instagram, tel } = data.contentfulWeb.organization;
  const theme = useTheme();
  const { mode } = theme.palette;
  const { handleClickOpen } = useContext(ReservationContext);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'start', sm: 'center' }}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            flexDirection="column"
            alignItems={{ xs: 'center', md: 'start' }}
            mb={2}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-between'}
            >
              <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}
              >
                <Box minWidth={'auto !important'} marginRight={2}>
                  <Button
                    component={'a'}
                    href={`mailto:${email}`}
                    aria-label="Email"
                    variant={'outlined'}
                    sx={{
                      borderRadius: 2,
                      minWidth: 'auto',
                      padding: 1,
                      borderColor: alpha(theme.palette.divider, 0.2),
                    }}
                  >
                    <EmailIcon />
                  </Button>
                </Box>
                <ListItemText primary={'Email'} secondary={email} />
              </Box>
              <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}
              >
                <Box minWidth={'auto !important'} marginRight={2}>
                  <Button
                    component={'a'}
                    href={`tel:${tel}`}
                    target="_blank"
                    aria-label="Telefon"
                    variant={'outlined'}
                    sx={{
                      borderRadius: 2,
                      minWidth: 'auto',
                      padding: 1,
                      borderColor: alpha(theme.palette.divider, 0.2),
                    }}
                  >
                    <PhoneIcon />
                  </Button>
                </Box>
                <ListItemText primary={'Telefon'} secondary={tel} />
              </Box>
              <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}
              >
                <Box minWidth={'auto !important'} marginRight={2}>
                  <Button
                    component={'a'}
                    href={instagram}
                    target="_blank"
                    aria-label="Instagram"
                    variant={'outlined'}
                    sx={{
                      borderRadius: 2,
                      minWidth: 'auto',
                      padding: 1,
                      borderColor: alpha(theme.palette.divider, 0.2),
                    }}
                  >
                    <InstagramIcon />
                  </Button>
                </Box>
                <ListItemText primary={'Instagram'} secondary={'Instagram'} />
              </Box>
            </Box>
            <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
              <Box marginTop={1}>
                <Box>
                  <h3>Domeček Jalovčí</h3>
                </Box>
                <Box>Třtí 21</Box>
                <Box>Dolní Hbity</Box>
                <Box>262 63</Box>
                <Box>
                  <h5>Petra Dědinová</h5>
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  target="blank"
                  size="small"
                  onClick={() => scrollTo('#rental')}
                >
                  REZERVOVAT
                </Button>
              </Box>
            </Box>
          </Box>

          <Box flexGrow={2} width="100%" height="100%" px={{ sx: 0, md: 4 }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Třtí&ie=UTF8&t=&z=12&iwloc=B&output=embed"
              style={{
                minHeight: 300,
                filter:
                  theme.palette.mode === 'dark'
                    ? 'grayscale(0.5) opacity(0.7)'
                    : 'none',
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid item>
          <Typography
            align={'center'}
            variant={'caption'}
            color="text.primary"
            component={Link}
            to="/obchodniPodminky"
          >
            Obchodní podmínky
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={'center'}
            variant={'caption'}
            color="text.primary"
            component={Link}
            to="/zpracovaniOsobnichUdaju"
          >
            Zpracování osobních údajů
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={'center'}
            variant={'caption'}
            color="text.primary"
            component={Link}
            to="/ubytovaciRad"
          >
            Ubytovací řád
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align={'center'}
            variant={'subtitle2'}
            color="text.secondary"
            gutterBottom
          >
            &copy; Domeček Jalovčí. 2023, All rights reserved
          </Typography>
          <Typography
            align={'center'}
            variant={'caption'}
            color="text.secondary"
            component={'p'}
          ></Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
