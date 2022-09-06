// Import css
import styles from "../../Style/Components/Course/StudentFeedback.module.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const StudentFeedback = () => {
  return (
    <div className={styles["student-feedback"]}>
      <h2>Student feedback</h2>
      <div className={styles["rate-container"]}>
        <div className={styles["rate"]}>
          <div className={styles["rate-number"]}>4.4</div>
          <div className={styles["rate-stars"]}>
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarFill size={20} className={styles["star"]} />
            <BsStarHalf size={20} className={styles["star"]} />
          </div>
          <div>Course rating</div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
