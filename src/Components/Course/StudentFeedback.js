// Import css
import styles from "../../Style/Components/Course/StudentFeedback.module.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";

// Import components
import RateBars from "./RateBars";

const StudentFeedback = ({ reviews }) => {
  console.log(
    "------------",
    reviews["ratingDistribution"].map((rate) => rate["count"])
  );
  let sumReviews = reviews["ratingDistribution"].reduce(
    (previousValue, currentValue) => previousValue + currentValue["count"],
    0
  );
  console.log(sumReviews);
  return (
    <div className={styles["student-feedback"]}>
      <h2>Student feedback</h2>
      <div className={styles["rate-container"]}>
        <div className={styles["rate"]}>
          <div className={styles["rate-number"]}>
            {reviews["averageRating"].toFixed(1)}
          </div>
          <div className={styles["rate-stars"]}>
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarHalf size={20} className={styles["star"]} />
          </div>
          <div>Course rating</div>
        </div>
        <div className={styles["rate-bars-container"]}>
          {reviews["ratingDistribution"].map((rate) => (
            <RateBars width={((rate["count"] / sumReviews) * 100).toFixed(1)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
