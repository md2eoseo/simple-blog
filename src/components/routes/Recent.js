import React from "react";
import styled from "styled-components";
import RecentContainer from "../RecentContainer";

function Recent() {
  const Container = styled.div`
    width: 100%;
    padding: 50px 10px;
    display: grid;
    row-gap: 20px;
  `;

  return (
    <Container>
      <RecentContainer len={10} />
    </Container>
  );
}

export default Recent;
