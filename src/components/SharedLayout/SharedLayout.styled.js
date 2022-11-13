import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;
