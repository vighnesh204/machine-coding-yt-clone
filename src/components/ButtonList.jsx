import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "Gaming",
  "Anime",
  "Movies",
  "Live",
  "Sports",
  "Learning",
  "Fashion & Beauty",
  "Comedy",
  "Podcast",
  "BGMI"
];

const ButtonList = () => {
  return (
    <div className="flex gap-2 mb-4">
      {list.map((item) => (
        <Button key={item} item={item} />
      ))}
    </div>
  );
};

export default ButtonList;
