import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Box from '@mui/material/Box';
import { Link } from 'gatsby';
import { Button, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const data = useStaticQuery(query);
  const { email, instagram, tel } = data.contentfulWeb.organization;
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

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

      <Box display={'flex'} flexDirection={'row'}>
        <Box
          component={ListItem}
          disableGutters
          width={'auto'}
          padding={0}
          marginRight={{ xs: 1, md: 0 }}
        >
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
        <Box
          component={ListItem}
          disableGutters
          width={'auto'}
          paddingX={{ xs: 0, md: 2 }}
        >
          <Box minWidth={'auto !important'} marginRight={1}>
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
          <Box
            component={ListItemText}
            secondary={email}
            display={{ xs: 'none', md: 'block' }}
            secondaryTypographyProps={{
              color: !trigger ? 'common.white' : 'text.secondary',
            }}
          />
        </Box>
        <Box component={ListItem} disableGutters width={'auto'} padding={0}>
          <Box minWidth={'auto !important'} marginRight={1}>
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
          <Box
            component={ListItemText}
            secondary={tel}
            display={{ xs: 'none', md: 'block' }}
            secondaryTypographyProps={{
              color: !trigger ? 'common.white' : 'text.secondary',
            }}
          />
        </Box>
      </Box>

      <Box marginLeft={1}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => scrollTo('#rental')}
        >
          REZERVOVAT
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
