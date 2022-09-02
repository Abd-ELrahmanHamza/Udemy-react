// Import css
import styles from "./Course.module.css";

// Import components
import CourseIntro from "../../Components/Course/CourseIntro/CourseIntro";
import Companies from "../../Components/Course/Companies/Companies";
import WhatLearn from "../../Components/Course/WhatLearn/WhatLearn";

const Course = () => {
  return (
    <>
      <div className={styles["black-back"]}></div>
      <div className={styles["container"]}>
        <div className={styles["content-container"]}>
          <CourseIntro />
          <WhatLearn />
        </div>
      </div>
      <Companies />
    </>
  );
};

export default Course;
