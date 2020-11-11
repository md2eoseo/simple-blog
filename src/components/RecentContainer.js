import React from "react";
import Card from "./Card";
import styled from "styled-components";
import posts from "../data/recent";

const Container = styled.div`
  padding: 0 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 28px;
  justify-self: center;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1056px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 14px;
  }
`;

const Category = styled.h2`
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

function HomeRecent({ home, len }) {
  return (
    <>
      {home && <Category>recent</Category>}
      <Container>
        {posts.length > 0
          ? posts.slice(0, len).map((post) => <Card key={post.id} {...post} />)
          : "No posts"}
      </Container>
    </>
  );
}

export default HomeRecent;
