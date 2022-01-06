import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// style
import style from "../../styles/WorkSection.module.css";

const WorkCategoryList = ({ type, image }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const charLines = type.match(/.{1,4}/g);

  const animation = {
    border: {
      x: "0%",
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeOut",
      },
    },
    image: {
      y: "0%",
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const lineAnimation = {
    lines: (j) => ({
      y: "0%",
      transition: {
        delay: 0.6 + j * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const imageControl = useAnimation();
  const borderControl = useAnimation();

  useEffect(() => {
    if (inView) {
      imageControl.start("image");
      borderControl.start("border");
    }
  }, [inView, imageControl, borderControl]);

  return (
    <>
      <div ref={ref}>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            className={style.border}
            initial={{ x: "100%" }}
            variants={animation}
            animate={borderControl}
          ></motion.div>
        </div>
        <div className={style.cardContent}>
          <div className={style.categoryContainer}>
            <h3 className={style.categoryHeadline}>
              {charLines.map((line, j) => (
                <div key={j} className={style.overflow}>
                  {inView && (
                    <motion.div
                      custom={j}
                      initial={{ y: "100%" }}
                      variants={lineAnimation}
                      animate="lines"
                    >
                      {line}
                    </motion.div>
                  )}
                </div>
              ))}
            </h3>
          </div>
          <div className={style.overflow}>
            <motion.div
              className={style.imageContainer}
              initial={{ y: "100%" }}
              variants={animation}
              animate={imageControl}
            >
              <Image
                src={image.url}
                alt={image.fileName}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCategoryList;
