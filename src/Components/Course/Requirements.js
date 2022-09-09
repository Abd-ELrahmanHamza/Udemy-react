// Import CSS
import styles from "../../Style/Components/Course/Requirements.module.css";

// Import react icons
import { BsCircleFill } from "react-icons/bs";
const Requirements = ({ course, courseSummary }) => {
  return (
    <div>
      <h2>Requirements</h2>
      <ul className={styles["requirements-list"]}>
        {course["details"]["Requirements"].map((requirement) => (
          <li key={requirement} className={styles["requirements-list-item"]}>
            <BsCircleFill size={8} />
            <span className={styles["item-text"]}>{requirement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requirements;
