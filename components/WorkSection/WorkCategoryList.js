import Image from "next/image";

// style
import style from "../../styles/WorkSection.module.css";

const WorkCategoryList = ({ data }) => {
  return (
    <>
      {data.works.map((work, i) => {
        console.log(work);
        return (
          <div key={work.slug} className={style.card}>
            <div className={style.categoryContainer}>
              <h3 className={style.categoryHealine}>{work.artworkType}</h3>
            </div>
            <div className={style.imageContainer}>
              <Image
                src={work.coverImage.url}
                alt={work.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WorkCategoryList;
