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

const CourseIntro = ({ course, courseSummary }) => {
  return (
    <div className={styles["course-intro"]}>
      <div>
        <div className={styles["header"]}>
          <div className={styles["image-container"]}>
            <img
              className={styles["image"]}
              src={courseSummary["image_750x422"]}
              alt=""
            />
            <div className={styles["play-icon"]}>
              <BsFillPlayCircleFill size={70} />
            </div>
            <h3 className={styles["preview-title"]}>Preview this course</h3>
          </div>
        </div>
        <h1 className={styles["title"]}>{courseSummary["title"]}</h1>
        CourseHeader
        <h2 className={styles["description"]}>{courseSummary["headline"]}</h2>
        <div className={styles["stars"]}>
          <span className={styles["course-rate"]}>
            {courseSummary["rating"].toFixed(1)}
          </span>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <i className="fa-solid fa-star-half-stroke"></i>
          <Link to="/" className={styles["course-ratings"]}>
            (
            {courseSummary["num_reviews"]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            ratings)
          </Link>
          <span className={styles["course-students"]}>
            {courseSummary["num_subscribers"]
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            students
          </span>
        </div>
        <p className={styles["created-by"]}>
          Created by
          {courseSummary["visible_instructors"].map((instructor) => (
            <span
              key={instructor["title"]}
              className={styles["course-ratings"]}
            >
              {instructor["title"]}
            </span>
          ))}
        </p>
        <div className={styles["captions"]}>
          <div className={styles["captions-inner"]}>
            <BsExclamationOctagonFill />
            <span> Last updated on {courseSummary["last_update_date"]} </span>
          </div>
          <div className={styles["captions-inner"]}>
            <BsGlobe />
            {courseSummary["caption_languages"].map((language) => (
              <span key={language}> {language} </span>
            ))}
          </div>
          <div className={styles["captions-inner"]}>
            <FaClosedCaptioning />
            <span>
              {courseSummary["caption_languages"].map((language) => (
                <span key={language}> {language} </span>
              ))}
            </span>
          </div>
        </div>
        <div className={styles["floating-course-content"]}>
          <h2 className={styles["price"]}>
            {courseSummary["price"]["list_price"]["price_string"]}
          </h2>
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
