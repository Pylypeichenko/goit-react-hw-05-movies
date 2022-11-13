import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const MovieCard = styled.li`
  width: 250px;

  &:hover,
  &:focus {
    scale: 1.02;
  }
`;
