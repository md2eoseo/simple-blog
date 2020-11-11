import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 320px;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
  }
  &:hover div {
    opacity: 1;
  }

  @media (max-width: 1056px) {
    width: 100%;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border-radius: 7px;
  background-color: white;
  position: absolute;
  bottom: -4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.25s ease-in 0s;

  &:hover {
    text-decoration: underline;
  }
`;

const limitTitle = 40;

function Card({ id, title, content, imgURL, date }) {
  return (
    <Container>
      <Link to={`/recent/${id}`}>
        <CardImg
          alt="cardImg"
          src={imgURL ? imgURL : "https://picsum.photos/400"}
        />
        <Info>
          <b style={{ fontSize: 25, wordBreak: "break-all" }}>
            {title.length > { limitTitle }
              ? title.slice(0, { limitTitle }) + "..."
              : title}
          </b>
          <i style={{ alignSelf: "flex-end" }}>{date}</i>
        </Info>
      </Link>
    </Container>
  );
}

export default Card;
