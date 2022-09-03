// Import css
import styles from "./Instructors.module.css";

// Import react router dom components
import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div>
      <h2>Instructors</h2>
      <h2>
        <Link to={"/"} className={styles["Instructor-link"]}>
          Instructor link
        </Link>
      </h2>
    </div>
  );
};

export default Instructors;
