import { useEffect } from "react";
import WorkCategoryList from "./WorkCategoryList";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// style
import style from "../../styles/WorkSection.module.css";

const WorkSection = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  //   const animation = {
  //     image: {
  //       opacity: 1,
  //       y: "0%",
  //       transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
  //     },
  //   };

  //   const imgControl = useAnimation();

  //   useEffect(() => {
  //     if (inView) {
  //       imgControl.start("image");
  //     }
  //   }, [inView, imgControl]);
  return (
    <section ref={ref} className={style.container}>
      <h2 className={style.sectionHeadline}>Werke</h2>
      <WorkCategoryList data={data} />
    </section>
  );
};

export default WorkSection;
