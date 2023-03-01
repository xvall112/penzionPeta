import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

export const query = graphql`
  query {
    contentfulOrganization {
      email
      tel
    }
  }
`;

const ContactCard = (): JSX.Element => {
  const theme = useTheme();
  const data = useStaticQuery(query);
  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Kontakt
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          Pokud máte nějaké otázky můžete mě kontaktovat
        </Typography>
        <Typography variant={'subtitle2'}>
          {data.contentfulOrganization.email}
          <br />
          {data.contentfulOrganization.tel}
          <br />
          Třtí 21
          <br />
          Dolní Hbity
          <br />
          Czech Republic
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
