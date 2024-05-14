import style from "./style.module.scss";

type Character = {
  name: string
  specie: string
  status: string
  gender: string
  image: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
}



const index = (props: Character): JSX.Element => {
  return (
    <div className={style.container}>
      <img className={style.characterImg} src={ props.image } alt="CHARACTER IMG" />
      <div className={style.data}>
        <h1 className={style.name}>{ props.name } </h1>
        <div className={style.details}>
          <span className={`${style.ball}`}></span>
          <span className={style.status}>{ props.status }</span>
          <span>&nbsp;-&nbsp;</span>
          <span className={style.specie}>{ props.specie }</span>
        </div>
        <div className={style.last_location}>
          <span style={{color: "gray"}}>Last known location:</span>
          <span className={style.specie}>{ props.location.name }</span>
        </div>
        <div className={style.origin}>
          <span style={{color: "gray"}}>Origin:</span>
          <span className={style.specie}>{ props.origin.name }</span>
        </div>
      </div>
    </div>
  );
};

export default index;
