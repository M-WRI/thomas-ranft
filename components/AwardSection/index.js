import style from "../../styles/AwardsExhibitions.module.css";

const AwardSection = ({ data }) => {
  return (
    <section className={style.container}>
      <h1 className={style.head}>Auszeichnungen</h1>
      <div className={style.contentContainer}>
        {data.map((data, i) => (
          <div key={i} className={style.contentWrapper}>
            <div className={style.text}>
              <span>{data.name}</span>
            </div>
            <div className={style.text}>
              <span>{data.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
