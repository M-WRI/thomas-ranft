import { motion } from "framer-motion";

// style
import style from "../../styles/HeaderSection.module.css";

const Headline = () => {
  const headline = [
    { id: "1", title: "Portfolio" },
    { id: "2", title: "Thomas" },
    { id: "3", title: "Michael" },
    { id: "4", title: "Ranft" },
  ];

  const animation = {
    headline: (i) => ({
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.2 + i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={style.headlineContainer}>
      {headline.map((line, i) => (
        <div key={line.id} className={style.headlineWrapper}>
          <motion.h1
            className={style.headline}
            initial={{ opacity: 0, y: "110%" }}
            custom={i}
            animate="headline"
            variants={animation}
          >
            {line.title}
          </motion.h1>
        </div>
      ))}
    </div>
  );
};

export default Headline;
