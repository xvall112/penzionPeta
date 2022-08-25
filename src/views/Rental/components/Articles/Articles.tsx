import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

const mock = [
  {
    title: 'Gril',
    subtitle: 'Plynoví gril k dispozici',
  },
  {
    title: 'Bazén',
    subtitle:
      'Není nic lepšího než se v horkých dnech ochladit v bazénu s výhledem',
  },
  {
    title: 'Sauna',
    subtitle: 'V zimě ideální na regenaraci po dlouhé tůře',
  },
];

const Articles = (): JSX.Element => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={4}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <ListItemText
              primary={item.title}
              secondary={item.subtitle}
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{ variant: 'subtitle1' }}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                },
                margin: 0,
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles;
