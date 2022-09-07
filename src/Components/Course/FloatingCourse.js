// Import css
import styles from "../../Style/Components/Course/FloatingCourse.module.css";

// Import icons
import { BsFillPlayCircleFill } from "react-icons/bs";

const FloatingCourse = () => {
  return (
    <div className={styles["floating-course"]}>
      <div className={styles["header"]}>
        <div className={styles["image"]}></div>
        <div className={styles["play-icon"]}>
          <BsFillPlayCircleFill size={70} />
        </div>
        <h3 className={styles["preview-title"]}>Preview this course</h3>
      </div>
      <div className={styles["preview-body"]}>
        <h2 className={styles["price"]}>E£679.99</h2>
        <button className={`${styles["btn"]} ${styles["cart"]}`}>
          Add to cart
        </button>
        <button className={styles["btn"]}>Buy now</button>
      </div>
    </div>
  );
};

export default FloatingCourse;
