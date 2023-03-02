import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Places = ({ data }): JSX.Element => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index: number): void => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = (): void => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <ImageList variant="masonry" cols={isMd ? 3 : 2} gap={8}>
        {data.map((image, i) => {
          return (
            <ImageListItem
              key={i}
              sx={{ '&:hover': { cursor: 'pointer' } }}
              onClick={() => openLightbox(i)}
            >
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={image.title}
                imgStyle={{ borderRadius: '10px', WebkitBorderRadius: '10px' }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>

      {viewerIsOpen && (
        <Lightbox
          mainSrc={data[currentImage].url}
          nextSrc={data[(currentImage + 1) % data.length].url}
          prevSrc={data[(currentImage + data.length - 1) % data.length].url}
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % data.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Places;
