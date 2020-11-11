import React from "react";
import ProjectContainer from "../ProjectContainer";
import RecentContainer from "../RecentContainer";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 50px 10px;
  display: grid;
  row-gap: 20px;
`;

function Home() {
  return (
    <Container>
      <RecentContainer home={true} len={4} />
      <ProjectContainer />
    </Container>
  );
}

export default Home;
