// Import css
import styles from "../../Style/Components/Course/RateBars.module.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const RateBars = ({ width }) => {
  return (
    <div className={styles["rate-bars"]}>
      <span className={styles["rate-bar"]}>
        <span
          className={styles["progress"]}
          style={{ width: `${width}%` }}
        ></span>
      </span>
      <div className={styles["progress-stars"]}>
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarHalf size={20} className={styles["star"]} />
      </div>
      <div className={styles["rate-percent"]}>
        {width}
        {width.length < 4 ? "0" : ""}%
      </div>
    </div>
  );
};

export default RateBars;
