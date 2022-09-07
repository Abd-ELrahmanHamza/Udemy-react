// Import css
import styles from "../../Style/Components/Course/CourseIntro.module.css";

// Import react icons
import {
  BsStarHalf,
  BsStarFill,
  BsExclamationOctagonFill,
  BsGlobe,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import { FaClosedCaptioning } from "react-icons/fa";

// Import react router dom
import { Link } from "react-router-dom";

const CourseIntro = () => {
  return (
    <div className={styles["course-intro"]}>
      <div>
        <div className={styles["header"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles["image"]}
              src="https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg"
              alt=""
            />
            <div className={styles["play-icon"]}>
              <BsFillPlayCircleFill size={70} />
            </div>
            <h3 className={styles["preview-title"]}>Preview this course</h3>
          </div>
        </div>
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
        <div className={styles["floating-course-content"]}>
          <h2 className={styles["price"]}>E£679.99</h2>
          <button className={`${styles["btn"]} ${styles["cart"]}`}>
            Add to cart
          </button>
          <p className={styles["money-back"]}>30-Day Money-Back Guarantee</p>
          <p className={styles["money-back"]}>Full lifetime access</p>
          <div className={styles["links"]}>
            <span className={styles["link"]}>Share</span>
            <span className={styles["link"]}>Gift this course </span>
            <span className={styles["link"]}>Apply coupon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIntro;
