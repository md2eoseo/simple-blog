import React from "react";
import Card from "./Card";
import Category from "./Category";
import styled from "styled-components";
import recentPosts from "../data/recent";
import projectPosts from "../data/project";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Posts({ which, home, len }) {
  return (
    <>
      {home && <Category which={which} />}
      <Container>
        {which === "recent" &&
          (recentPosts.length > 0
            ? recentPosts
                .slice(0, len)
                .map((post) => <Card key={post.id} {...post} which="recent" />)
            : "No posts")}
        {which === "project" &&
          (projectPosts.length > 0
            ? projectPosts.map((post) => (
                <Card key={post.id} {...post} which="project" />
              ))
            : "No projects")}
      </Container>
    </>
  );
}

export default Posts;
