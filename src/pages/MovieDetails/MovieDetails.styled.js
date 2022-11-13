import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBackwards = styled(Link)`
  color: black;

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;

export const MovieMainInfo = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

export const MainInfoWrapper = styled.div``;

export const Text = styled.p`
  margin-bottom: 20px;
`;

export const MovieAddInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddInfoList = styled.ul`
  display: flex;
  width: 200px;
  justify-content: space-evenly;
`;
