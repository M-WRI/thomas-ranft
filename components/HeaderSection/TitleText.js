import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// style
import style from "../../styles/HeaderSection.module.css";

const TitleText = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  const animation = {
    text: {
      opacity: 1,
      transition: { bounce: 0, ease: "easeOut", duration: 0.5 },
    },
  };

  const textControl = useAnimation();

  useEffect(() => {
    if (inView) {
      textControl.start("text");
    }
  }, [inView, textControl]);

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0 }}
        variants={animation}
        animate={textControl}
        className={style.titleText}
      >
        Thomas Michael Ranft ist ein Grafiker und Drucker spezialisiert in
        Radierungen, Lithografie und Zeichnungen. Er ist Mitbegründer der
        Künstlergruppe Clara Mosch.
      </motion.p>
    </div>
  );
};

export default TitleText;
