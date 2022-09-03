// Import css
import styles from "./Course.module.css";

// Import components
import CourseIntro from "../../Components/Course/CourseIntro/CourseIntro";
import Companies from "../../Components/Course/Companies/Companies";
import WhatLearn from "../../Components/Course/WhatLearn/WhatLearn";
import Content from "../../Components/Course/Content/Content";
import Requirements from "../../Components/Course/Requirements/Requirements";
import Description from "../../Components/Course/Description/Description";
import Instructors from "../../Components/Course/Instuctors/Instructors";

const Course = () => {
  return (
    <>
      <div className={styles["black-back"]}></div>
      <div className={styles["container"]}>
        <div className={styles["content-container"]}>
          <CourseIntro />
          <WhatLearn />
          <Content />
          <Requirements />
          <Description />
          <Instructors />
        </div>
      </div>
      <Companies />
    </>
  );
};

export default Course;
