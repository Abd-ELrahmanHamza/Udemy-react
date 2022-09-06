// Import css
import styles from "../Style/Pages/Course/Course.module.css";

// Import components
import CourseIntro from "../Components/Course/CourseIntro";
import Companies from "../Components/Course/Companies";
import WhatLearn from "../Components/Course/WhatLearn";
import Content from "../Components/Course/Content";
import Requirements from "../Components/Course/Requirements";
import Description from "../Components/Course/Description";
import Instructors from "../Components/Course/Instructors";

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
