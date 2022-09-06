// Import css
import styles from "../../Style/Components/Course/Review.module.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Review = () => {
  return (
    <div className={styles["review"]}>
      <div className={styles["reviewer-image"]}>
        <span>AH</span>
      </div>
      <div className={styles["review-body"]}>
        <h3 className={styles["reviewer-name"]}>Asif H.</h3>
        <div className={styles["rate-stars"]}>
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarHalf size={20} className={styles["star"]} />
          <span className={styles["review-date"]}>2 weeks ago</span>
        </div>
        <p className={styles["review-text"]}>
          Sometimes confusing but was able to clarify. Good job nonetheless.
        </p>
        <p className={styles["review-question"]}>Was this review helpful?</p>
        <div className={styles["thumb-container"]}>
          <span className={styles["thumb"]}>
            <FiThumbsUp size={25} />
          </span>
          <span className={styles["thumb"]}>
            <FiThumbsDown size={25} />
          </span>
          <span className={styles["report"]}>Report</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
