import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem, ThemeModeToggler } from './components';

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
}

const Topbar = ({ onSidebarOpen, pages }: Props): JSX.Element => {
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
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light'
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
          />
        </Box>
        <Box marginLeft={2.5}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
          />
        </Box>
        <Box marginLeft={2.5}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
          />
        </Box>
        <Box marginLeft={2.5}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
          />
        </Box>
        <Box marginLeft={2.5}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
          />
        </Box>
        <Box marginLeft={2.5}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
          />
        </Box>
        <Box marginLeft={2.5}>
          <Link
            underline="none"
            component="a"
            href="/docs/introduction"
            color="text.primary"
          >
            Docs
          </Link>
        </Box>
        <Box marginLeft={2.5}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={1}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://material-ui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Buy now
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Box marginRight={2}>
          <ThemeModeToggler />
        </Box>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
