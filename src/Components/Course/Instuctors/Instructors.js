// Import css
import styles from "./Instructors.module.css";

// Import react router dom components
import { Link } from "react-router-dom";

// Import image
import instructor from "../../../Assets/Images/instructor.jpg";

const Instructors = () => {
  return (
    <div>
      <h2>Instructors</h2>
      <h2 className={styles["instructor-link"]}>
        <Link to={"/"} className={styles["instructor-link"]}>
          Stephane Maarek | AWS Certified Cloud Practitioner,Solutions
          Architect,Developer
        </Link>
      </h2>
      <p className={styles["instructor-quote"]}>
        Best Selling Instructor, 9x AWS Certified, Kafka Guru
      </p>
      <img src={instructor} alt="instructor" className={styles["instructor-image"]} />
    </div>
  );
};

export default Instructors;
