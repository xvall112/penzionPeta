import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ReservationContext } from '../../../../context/ReservationContext';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { handleClickOpen } = useContext(ReservationContext);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Grid container direction="column" spacing={0}>
            <Grid item>
              <h3>Domeček Jalovčí</h3>
            </Grid>

            <Grid item>Třtí 21</Grid>
            <Grid item>Dolní Hbity</Grid>
            <Grid item>262 63</Grid>
            <Grid item>
              <h5>Petra Dědinová</h5>
            </Grid>
          </Grid>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                target="blank"
                size="small"
                onClick={handleClickOpen}
              >
                REZERVOVAT
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Domeček Jalovčí. 2022, All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        ></Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
