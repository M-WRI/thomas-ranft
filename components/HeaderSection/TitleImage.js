import Image from "next/image";

import style from "../../styles/HeaderSection.module.css";

const TitleImage = () => {
  return (
    <div className={style.imageContainer}>
      <div className={style.imageWrapper}>
        <Image
          src="/images/thomas-michael-ranft-title-img.png"
          alt="Thomas Ranft"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default TitleImage;
