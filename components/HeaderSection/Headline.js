// style
import style from "../../styles/HeaderSection.module.css";

const Headline = () => {
  return (
    <div className={style.headlineContainer}>
      <h1 className={style.headline}>Portfolio</h1>
      <h1 className={style.headline}>Thomas</h1>
      <h1 className={style.headline}>Michael</h1>
      <h1 className={style.headline}>Ranft</h1>
    </div>
  );
};

export default Headline;
