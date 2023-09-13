import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';
import React from 'react';

export const ImageGallery = ({ gallery }) => {
  return (
    <StyledList>
      <ImageGalleryItem gallery={gallery} />
    </StyledList>
  );
};
