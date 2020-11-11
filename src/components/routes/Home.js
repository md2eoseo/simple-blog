import React from "react";
import ProjectContainer from "../ProjectContainer";
import RecentContainer from "../RecentContainer";

function Home() {
  return (
    <>
      <RecentContainer home={true} len={4} />
      <ProjectContainer />
    </>
  );
}

export default Home;
