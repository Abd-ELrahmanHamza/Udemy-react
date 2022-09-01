// Import css
import styles from "./Course.module.css";

// Import components
import Footer from "../../Components/Footer/Footer";
import CourseIntro from "../../Components/CourseIntro/CourseIntro";

const Course = () => {
  return (
    <>
      <div className={styles["black-back"]}></div>
      <div className={styles["container"]}>
        <div className={styles["content-container"]}>
          <CourseIntro />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
