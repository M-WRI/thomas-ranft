import Image from "next/image";
import { motion } from "framer-motion";

// style
import style from "../../styles/WorkSection.module.css";

const WorkCategoryList = ({ data }) => {
  const animation = {
    border: (i) => ({}),
    category: (i) => ({}),
    image: (i) => ({}),
  };
  return (
    <>
      {data.works.map((work, i) => {
        console.log(work);
        return (
          <div key={work.slug}>
            <div className={style.border}></div>
            <div className={style.cardContent}>
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
          </div>
        );
      })}
    </>
  );
};

export default WorkCategoryList;
