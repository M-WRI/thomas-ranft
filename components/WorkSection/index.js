import WorkCategoryList from "./WorkCategoryList";

// style
import style from "../../styles/WorkSection.module.css";

const WorkSection = ({ data }) => {
  
  return (
    <div className={style.container}>
      <h2 className={style.sectionHeadline}>Werke</h2>
      <WorkCategoryList data={data} />
    </div>
  );
};

export default WorkSection;
