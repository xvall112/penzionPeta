import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from 'components/Container';
import { Topbar, Footer } from './components';
interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

const Main = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}: Props): JSX.Element => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar colorInvert={trigger ? false : colorInvert} />
        </Container>
      </AppBar>

      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
