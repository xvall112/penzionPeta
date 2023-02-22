import React, { useState } from 'react';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import Lightbox from 'react-image-lightbox';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function InfoModal({ title, list, price, images }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const openLightbox = (index: number): void => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = (): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClickOpen}
        fullWidth
      >
        Více info
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          <Typography variant="h4">{title}</Typography>
        </DialogTitle>
        <DialogContent>
          <ImageList variant="masonry" cols={isMd ? 3 : 2} gap={8}>
            {images.map((image, i) => {
              return (
                <ImageListItem
                  key={i}
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                  onClick={() => openLightbox(i)}
                >
                  <GatsbyImage
                    image={image.gatsbyImageData}
                    alt={image.title}
                    imgStyle={{
                      borderRadius: '10px',
                      WebkitBorderRadius: '10px',
                    }}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
          <DialogContentText>Cena: {price} Kč/noc</DialogContentText>
          <Box mt={3}>
            <Grid container spacing={2}>
              {list.map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={Card}
                    variant={'outlined'}
                    bgcolor={'transparent'}
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    <CardContent sx={{ paddingBottom: '16px !important' }}>
                      <Typography fontWeight={500}>{item}</Typography>
                    </CardContent>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Zavřít</Button>
        </DialogActions>
      </Dialog>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={images[currentImage].url}
          nextSrc={images[(currentImage + 1) % images.length].url}
          prevSrc={
            images[(currentImage + images.length - 1) % images.length].url
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </div>
  );
}
