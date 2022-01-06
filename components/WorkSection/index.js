import { useEffect } from "react";
import WorkCategoryList from "./WorkCategoryList";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// style
import style from "../../styles/WorkSection.module.css";

const WorkSection = ({ data }) => {
  return (
    <section className={style.container}>
      <h2 className={style.sectionHeadline}>Werke</h2>
      {data.map((data, i) => (
        <div key={i}>
          <WorkCategoryList type={data.artworkType} image={data.coverImage} />
        </div>
      ))}
    </section>
  );
};

export default WorkSection;
