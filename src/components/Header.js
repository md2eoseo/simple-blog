import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nearBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  @media (max-width: 960px) {
    height: 60px;
  }

  @media (max-width: 320px) {
    height: 40px;
  }
`;

const Button = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.nearBlack};
  margin: 0 25px;

  ${(props) =>
    props.logo &&
    css`
      margin: 0 0 0 40px;
    `}

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    font-size: 1.5rem;
    margin: 15px;
    ${(props) =>
      props.logo &&
      css`
        margin: 0 0 0 20px;
      `}
  }

  @media (max-width: 320px) {
    font-size: 1rem;
    margin: 8px;
    ${(props) =>
      props.logo &&
      css`
        margin: 0 0 0 12px;
      `}
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function Header() {
  return (
    <Container>
      <Link to="/">
        <Button logo>2eoseo</Button>
      </Link>
      <Menu>
        <Link to="/about">
          <Button>about</Button>
        </Link>
        <Link to="/project">
          <Button>project</Button>
        </Link>
        <Link to="/recent">
          <Button>recent</Button>
        </Link>
        <Link to="/contact">
          <Button>contact</Button>
        </Link>
      </Menu>
    </Container>
  );
}

export default Header;
