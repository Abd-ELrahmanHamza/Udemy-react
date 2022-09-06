// Import css
import styles from "../../Style/Pages/Course/Course.module.css";

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
      <div className={styles["container-course-intro"]}>
        <CourseIntro />
      </div>
      <div className={styles["container"]}>
        <div className={styles["content-container"]}>
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
