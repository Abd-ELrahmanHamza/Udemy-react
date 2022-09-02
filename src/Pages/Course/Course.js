// Import css
import styles from "./Course.module.css";

// Import components
import CourseIntro from "../../Components/CourseIntro/CourseIntro";
import Companies from "../../Components/Companies/Companies";

const Course = () => {
  return (
    <>
      <div className={styles["black-back"]}></div>
      <div className={styles["container"]}>
        <div className={styles["content-container"]}>
          <CourseIntro />
        </div>
      </div>
      <Companies />
    </>
  );
};

export default Course;
