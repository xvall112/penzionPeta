import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Solenická podkova',
    subtitle:
      'Solenická podkova, které se někdy říká také Zduchovická vyhlídka, nabízí pohled z výšky přibližně 150 metrů nad vodní hladinou. ',
    link:
      'https://www.kudyznudy.cz/aktivity/vyhlidka-solenicka-podkova-romanticky-vyhled-na',
  },
  {
    title: 'Svatý Jan Nepomucký nad Kamýkem',
    subtitle:
      'Barokní poutní jednolodní kostel sv. Jana Nepomuckého s polygonálně ukončeným presbytářem z l. 1760 - 64 na symbolickém půdorysu hořícího srdce.',
    link: 'https://www.turistika.cz/mista/svaty-jan-u-sedlcan/detail',
  },
  {
    title: 'Zřícenina hradu Vrškamýk',
    subtitle:
      'Vrškamýk je zřícenina hradu nacházející se jeden kilometr západně od obce Kamýk nad Vltavou v okrese Příbram.',
    link:
      'https://www.kudyznudy.cz/aktivity/zricenina-hradu-vrskamyk-hunec-v-kamyku-nad-vlta',
  },
  {
    title: 'Rozhledna Milada',
    subtitle:
      'Rozhledna má devět pater a jméno získala po mamince Radomila Kessla, který je autorem a provozovatelem věže. Téměř 30 m vysoká věž',
    link:
      'https://www.kudyznudy.cz/aktivity/rozhledna-milada-u-orlicke-prehrady',
  },
];

const Advantages = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={8}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Místa
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Objevujte krásná místa v okolí
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Prozkoumejte místa v okolí na kole nebo pěšky.
          <br />
          Připravili jsme pro Vás přehled míst, které stojí za návštěvu
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={3}
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
            <Box marginTop={1}>
              <Button
                component={'a'}
                href={item.link}
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                Více
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advantages;
