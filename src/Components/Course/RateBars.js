// Import css
import styles from "../../Style/Components/Course/RateBars.module.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const RateBars = () => {
  return (
    <div className={styles["rate-bars"]}>
      <span className={styles["rate-bar"]}>
        <span className={styles["progress"]}></span>
      </span>
      <div className={styles["progress-stars"]}>
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarFill size={20} className={styles["star"]} />
        <BsStarHalf size={20} className={styles["star"]} />
      </div>
      <div className={styles["rate-percent"]}>43%</div>
    </div>
  );
};

export default RateBars;
