import React, { Fragment, useState } from "react";
import Image from "next/image";
import classes from "./EachPhoto.module.css";

function EachPhoto(props) {
  const [active, setActive] = useState(1);

  const data = props.data;

  const photo = data.map((el) => {
    const onClickHandler = () => {
      const selectedPicture = data.find((group) => group.id === el.id);
      setActive(selectedPicture.id);

      console.log(active);
    };
    console.log(el.id);
    return (
      <li
        onClick={onClickHandler}
        key={el.id}
        className={
          el.id === active
            ? `${classes.current} ${classes.active}`
            : classes.current
        }
      >
        <h1
          className={el.id === active ? classes["text-active"] : classes.text}
        >
          {el.text}
        </h1>
        <Image
          src={el.picture}
          alt={el.text}
          layout={"fill"}
          objectFit={"cover"}
        ></Image>
      </li>
    );
  });

  return <Fragment>{photo}</Fragment>;
}

export default EachPhoto;
