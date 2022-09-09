// Import css
import styles from "../../Style/Components/Course/WhatLearn.module.css";

// Import react icons
import { AiOutlineCheck } from "react-icons/ai";

const WhatLearn = ({ course, courseSummary }) => {
  return (
    <div className={styles["what-learn"]}>
      <h2>What you'll learn</h2>
      <div className={styles["learning-objectives-container"]}>
        {courseSummary["objectives_summary"].map((objective) => (
          <p className={styles["learning-objectives"]}>
            <AiOutlineCheck size={20} />
            <span className={styles["objective"]}>{objective}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhatLearn;
