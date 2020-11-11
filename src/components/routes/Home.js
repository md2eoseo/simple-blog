import React from "react";
import Posts from "../Posts";

function Home() {
  return (
    <>
      <Posts which="recent" home={true} len={4} />
      <Posts which="project" home={true} />
    </>
  );
}

export default Home;
