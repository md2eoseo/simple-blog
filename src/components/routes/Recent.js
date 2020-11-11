import React from "react";
import Posts from "../Posts";

function Recent() {
  // TODO: infinite scrolling
  return <Posts which="recent" len={10} />;
}

export default Recent;
