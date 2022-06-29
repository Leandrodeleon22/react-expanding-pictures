import React from "react";
import EachPhoto from "./EachPhoto";
import classes from "./Photos.module.css";

function Photos() {
  const data = [
    {
      id: 1,
      picture: "/1.jpg",
      text: "This is the first text",
    },

    {
      id: 2,
      picture: "/2.jpg",
      text: "This is the second text",
    },

    {
      id: 3,
      picture: "/3.jpg",
      text: "This is the third text",
    },

    {
      id: 4,
      picture: "/4.jpg",
      text: "This is the fourth text",
    },

    {
      id: 5,
      picture: "/5.jpg",
      text: "This is the fifth text",
    },
  ];

  return (
    <div className={classes.main}>
      <ul className={classes.section}>
        <EachPhoto data={data}></EachPhoto>
      </ul>
    </div>
  );
}

export default Photos;
