import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => (
  <div className="flex-1 p-5">
    <ButtonList />
    <VideoContainer />
  </div>
);

export default MainContainer;