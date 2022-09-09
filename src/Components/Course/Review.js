// Import css
import styles from "../../Style/Components/Course/Review.module.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Review = ({ review }) => {
  return (
    <div className={styles["review"]}>
      <div className={styles["reviewer-image"]}>
        <span>{review["user"]["initials"]}</span>
      </div>
      <div className={styles["review-body"]}>
        <h3 className={styles["reviewer-name"]}>
          {review["user"]["display_name"]}
        </h3>
        <div className={styles["rate-stars"]}>
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarFill size={20} className={styles["star"]} />
          <BsStarHalf size={20} className={styles["star"]} />
          <span className={styles["review-date"]}>
            {review["created_formatted_with_time_since"]}
          </span>
        </div>
        <p className={styles["review-text"]}>{review["content"]}</p>
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
