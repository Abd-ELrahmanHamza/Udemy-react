// Import css
import styles from "../../Style/Components/Course/CourseIntro.module.css";

// Import react icons
import {
  BsStarHalf,
  BsStarFill,
  BsExclamationOctagonFill,
  BsGlobe,
} from "react-icons/bs";
import { FaClosedCaptioning } from "react-icons/fa";

// Import react router dom
import { Link } from "react-router-dom";

const CourseIntro = () => {
  return (
    <div className={styles["course-intro"]}>
      <h1 className={styles["title"]}>
        Python Beyond the Basics - Object-Oriented Programming
      </h1>
      CourseHeader
      <h2 className={styles["description"]}>
        From Classes To Inheritance - OOP In-Depth For Python Programmers
      </h2>
      <div className={styles["stars"]}>
        <span className={styles["course-rate"]}>
          {Math.round(4.3 * 10) / 10}
        </span>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <i className="fa-solid fa-star-half-stroke"></i>
        <Link to="/" className={styles["course-ratings"]}>
          ({2.944} ratings)
        </Link>
        <span className={styles["course-students"]}>10,488 students</span>
      </div>
      <p className={styles["created-by"]}>
        Created by
        <span className={styles["course-ratings"]}>infinite Skills</span>
      </p>
      <div className={styles["captions"]}>
        <div className={styles["captions-inner"]}>
          <BsExclamationOctagonFill />
          <span> Last updated on 9/2022 </span>
        </div>
        <div className={styles["captions-inner"]}>
          <BsGlobe />
          <span> English </span>
        </div>
        <div className={styles["captions-inner"]}>
          <FaClosedCaptioning />
          <span> English </span>
        </div>
      </div>
    </div>
  );
};

export default CourseIntro;
