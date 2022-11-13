import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, Nav, StyledNavLink } from './SharedLayout.styled';
import { Container } from 'components/common.styled/common.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </Nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<div>Loading info for you ...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
