import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import style from "../../styles/HeaderSection.module.css";

const TitleImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = {
    image: {
      opacity: 1,
      y: "0%",
      transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
    },
  };

  const imgControl = useAnimation();

  useEffect(() => {
    if (inView) {
      imgControl.start("image");
    }
  }, [inView, imgControl]);

  return (
    <div ref={ref} className={style.imageContainer}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={imgControl}
        variants={animation}
        className={style.imageWrapper}
      >
        <Image
          src="/images/thomas-michael-ranft-title-img.png"
          alt="Thomas Ranft"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </motion.div>
    </div>
  );
};

export default TitleImage;

// initial={{ opacity: 0, y: "100%" }}
// animate={imgControl}
// variants={animation}
