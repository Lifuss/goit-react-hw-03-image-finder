import React from 'react';
import {
  StyledBtn,
  StyledHeader,
  StyledInput,
  StyledSearchForm,
  StyledSpan,
} from './SearchBar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledHeader>
      <StyledSearchForm onSubmit={onSubmit}>
        <StyledBtn type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledBtn>

        <StyledInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    </StyledHeader>
  );
};
