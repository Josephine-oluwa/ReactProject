import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Logo</Logo>
          <NavHolder>
            <Nav>
              <span>Home</span>
            </Nav>
            <Nav>
              <span>About</span>
            </Nav>
            <Nav>
              <span>contact</span>
            </Nav>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Nav = styled.div`
  display: flex;
`;
const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const Logo = styled.div``;

const Main = styled.div`
  width: 80%;
  justify-content: space-between;
  display: flex;
  //   align-items: center;
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
