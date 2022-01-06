import { motion } from "framer-motion";

// style
import style from "../../styles/HeaderSection.module.css";
// Components
import Headline from "./Headline";
import TitleImage from "./TitleImage";
import TitleText from "./TitleText";

const HeaderSection = () => {
  return (
    <section className={style.container}>
      <Headline motion={motion} />
      <TitleImage />
      <TitleText />
    </section>
  );
};

export default HeaderSection;
