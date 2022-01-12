import WorkCategoryList from "./WorkCategoryList";

// style
import style from "../../styles/WorkSection.module.css";

const WorkSection = ({ data }) => {
  const filteredCategories = [];
  const categories = () => {
    for (let i = 0; i < data.length; i++) {
      if (
        !filteredCategories.find((el) => el.artworkType === data[i].artworkType)
      )
        filteredCategories.push(data[i]);
    }
  };
  categories();

  return (
    <section className={style.container}>
      <h2 className={style.sectionHeadline}>Werke</h2>
      {filteredCategories.map((data, i) => (
        <div key={i}>
          <WorkCategoryList type={data.artworkType} image={data.coverImage} />
        </div>
      ))}
    </section>
  );
};

export default WorkSection;
