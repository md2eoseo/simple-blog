import React from "react";
import styled from "styled-components";

const Container = styled.h2`
  margin-left: 4vw;
  margin-bottom: 2vw;
  font-size: 50px;

  @media (max-width: 1440px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

function Category({ which }) {
  return <Container>{which}</Container>;
}

export default Category;
