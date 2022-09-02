// Import css
import styles from "./WhatLearn.module.css";

// Import react icons
import { AiOutlineCheck } from "react-icons/ai";

const WhatLearn = () => {
  return (
    <div className={styles["what-learn"]}>
      <h2>What you'll learn</h2>
      <div className={styles["learning-objectives-container"]}>
        <p className={styles["learning-objectives"]}>
          <AiOutlineCheck size={20} />
          <span className={styles["objective"]}>
            Create their own Python Programs
          </span>
        </p>
        <p className={styles["learning-objectives"]}>
          <AiOutlineCheck size={20} />
          <span className={styles["objective"]}>
            Become an experienced Python Programmer
          </span>
        </p>
        <p className={styles["learning-objectives"]}>
          <AiOutlineCheck size={20} />
          <span className={styles["objective"]}>
            Parse the Web and Create their own Games
          </span>
        </p>
      </div>
    </div>
  );
};

export default WhatLearn;
