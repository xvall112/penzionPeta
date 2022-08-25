import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'gatsby';
import { Button, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { NavItem } from './components';

import { ReservationContext } from '../../../../context/ReservationContext';
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const { handleClickOpen } = useContext(ReservationContext);
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component={Link}
        to={'/'}
        width={{ xs: 100, md: 120 }}
        sx={{ textDecoration: 'none' }}
      >
        <Box height={1} width={1}>
          <Typography
            variant="h4"
            gutterBottom
            color="primary"
            sx={{
              fontWeight: 900,
            }}
          >
            DJ
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box mr={1}>
          <Button
            component={'a'}
            href="mailto:petradedinova95@gmail.com"
            aria-label="Menu"
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
        <Button
          component={'a'}
          href="tel:725001393"
          aria-label="Menu"
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
      <Box
        sx={{ display: { xs: 'none', md: 'flex' }, textDecoration: 'none' }}
        alignItems={'center'}
      >
        <Box component="a">
          <Typography variant="h6" fontWeight={700}>
            Email: petradedinova95@gmail.com
          </Typography>
        </Box>
        <Box marginLeft={4} component="a">
          <Typography variant="h6" fontWeight={700}>
            {' '}
            Tel: 725001393{' '}
          </Typography>
        </Box>
      </Box>
      <Box marginLeft={1}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClickOpen}
        >
          REZERVOVAT
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
