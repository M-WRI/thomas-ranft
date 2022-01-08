import style from "../../styles/AwardsExhibitions.module.css";

const ExhibitionSection = ({ data }) => {
  return (
    <section className={style.container}>
      <h1 className={style.head}>Austellungen</h1>
      <div className={style.contentContainer}>
        {data.map((data, i) => (
          <div key={i} className={style.contentWrapper}>
            <div className={style.text}>
              <span>{data.year}</span>
            </div>
            <div className={style.text}>
              <span>{data.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExhibitionSection;
