import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { ReservationContext } from '../../../context/ReservationContext';

export const query = graphql`
  query {
    contentfulProdej {
      products {
        smallTitle
        title
        price
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const PromoGrid = (): JSX.Element => {
  const data = useStaticQuery(query);
  const { products } = data.contentfulProdej;
  const theme = useTheme();
  const { handleClickOpen } = useContext(ReservationContext);
  return (
    <Grid container spacing={{ xs: 2, sm: 4 }}>
      {products.map((item, i) => {
        return (
          <Grid item xs={12} key={i}>
            <Card
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                height: 1,
              }}
            >
              <Grid
                container
                alignItems={{ xs: 'start', md: 'center' }}
                direction={{ xs: 'column', sm: 'row-reverse' }}
                spacing={2}
              >
                <Grid item xs={12} md={6}>
                  <GatsbyImage
                    image={item.image.gatsbyImageData}
                    alt={item.image.title}
                    style={{ height: '100%', width: '100%' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    color={'text.secondary'}
                    fontWeight={700}
                    variant={'caption'}
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {item.smallTitle}
                  </Typography>
                  <Typography variant={'h5'} fontWeight={700} marginY={1}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>{item.price}</Typography>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    sx={{
                      textTransform: 'uppercase',
                      display: 'block',
                      mt: { xs: 2, sm: 4 },
                      fontWeight: 700,
                    }}
                  >
                    Koupit
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PromoGrid;
