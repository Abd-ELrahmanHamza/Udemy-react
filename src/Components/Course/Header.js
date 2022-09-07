// Import css
import styles from "../../Style/Components/Course/Header.module.css";

// Import react icons
import { BsStarFill } from "react-icons/bs";

// Import react router dom
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles["header"]}>
      <div>
        <h2 className={styles["title"]}>
          Learn Python: The Complete Python Programming Course
        </h2>
        <div>
          <span className={styles["course-rate"]}>
            {Math.round(4.3 * 10) / 10} <BsStarFill />
          </span>
          <Link to="/" className={styles["course-ratings"]}>
            ({2.944} ratings)
          </Link>
          <span className={styles["course-students"]}>10,488 students</span>
        </div>
      </div>
      <div className={styles["floating-course-content"]}>
        <h2 className={styles["price"]}>E£679.99</h2>
        <button className={styles["btn"]}>Buy now</button>
      </div>
    </header>
  );
};

export default Header;
