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
import StudentFeedback from "../Components/Course/StudentFeedback";
import Reviews from "../Components/Course/Reviews";
import FloatingCourse from "../Components/Course/FloatingCourse";
import Header from "../Components/Course/Header";

// Import react router dom
import { useParams } from "react-router-dom";

const Course = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Header />
      <div className={styles["container-course-intro"]}>
        <CourseIntro />
      </div>
      <div className={styles["outer-container"]}>
        <div className={styles["container"]}>
          <div className={styles["content-container"]}>
            <WhatLearn />
            <Content />
            <Requirements />
            <Description />
            <Instructors />
            <StudentFeedback />
            <Reviews />
          </div>
          <div className={styles["floating-course-container"]}>
            <FloatingCourse />
          </div>
        </div>
      </div>
      <Companies />
    </>
  );
};

export default Course;
