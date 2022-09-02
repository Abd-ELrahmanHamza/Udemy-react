// Import css
import styles from "./Course.module.css";

// Import components
import CourseIntro from "../../Components/Course/CourseIntro/CourseIntro";
import Companies from "../../Components/Course/Companies/Companies";
import WhatLearn from "../../Components/Course/WhatLearn/WhatLearn";
import Content from "../../Components/Course/Content/Content";

const Course = () => {
  return (
    <>
      <div className={styles["black-back"]}></div>
      <div className={styles["container"]}>
        <div className={styles["content-container"]}>
          <CourseIntro />
          <WhatLearn />
          <Content />
        </div>
      </div>
      <Companies />
    </>
  );
};

export default Course;
