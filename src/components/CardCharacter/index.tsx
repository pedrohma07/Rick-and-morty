import React from "react";
import style from "./style.module.scss";

type User = {
  name: string
  specie: string
  img: string
}

const index = (props: User): JSX.Element => {
  return (
    <div className={style.container}>
      <img className={style.img} src={ props.img } alt="CHARACTER IMG" />
      <div className={style.wrapper}>
        <span className={style.name}>{ props.name } </span>
        <span className={style.specie}>{ props.specie }</span>
      </div>
    </div>
  );
};

export default index;
