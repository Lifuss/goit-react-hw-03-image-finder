import React from 'react';
import { StyledImg, StyledItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ gallery }) => {
  return gallery.map(({ id, webformatURL, tags }) => (
    <StyledItem key={id}>
      <StyledImg src={webformatURL} alt={tags} />
    </StyledItem>
  ));
};
