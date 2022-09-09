// Import css
import styles from "../../Style/Components/Course/Instructor.module.css";

// Import react router dom components
import { Link } from "react-router-dom";

// Import image
import instructor from "../../Assets/Images/instructor.jpg";

// Import icons
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import Description from "./Description";

const Instructor = ({ instructor }) => {
  return (
    <>
      <h2 className={styles["instructor-link"]}>
        <Link to={"/"} className={styles["instructor-link"]}>
          {instructor["display_name"]}
        </Link>
      </h2>
      <p className={styles["instructor-quote"]}>{instructor["job_title"]}</p>
      <div className={styles["instructor-info"]}>
        <img
          src={instructor["image_100x100"]}
          alt="instructor"
          className={styles["instructor-image"]}
        />
        <div>
          <div className={styles["instructor-badges"]}>
            <AiFillStar />{" "}
            <span>{instructor["Instructor_Rating"]} Instructor Rating</span>
          </div>
          <div className={styles["instructor-badges"]}>
            <RiMedalLine /> <span>{instructor["Reviews"]} Reviews</span>
          </div>
          <div className={styles["instructor-badges"]}>
            <BsPeopleFill /> <span>{instructor["Students"]} Students</span>
          </div>
          <div className={styles["instructor-badges"]}>
            <AiFillPlayCircle /> <span>{instructor["Courses"]} Courses</span>
          </div>
        </div>
      </div>
      <Description description={instructor["description"]} showTitle={false} />
    </>
  );
};

export default Instructor;
