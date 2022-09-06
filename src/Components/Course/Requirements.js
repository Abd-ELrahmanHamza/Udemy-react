// Import CSS
import styles from "../../Style/Components/Course/Requirements.module.css";

// Import react icons
import { BsCircleFill } from "react-icons/bs";
const Requirements = () => {
  return (
    <div>
      <h2>Requirements</h2>
      <ul className={styles["requirements-list"]}>
        <li className={styles["requirements-list-item"]}>
          <BsCircleFill size={8} />
          <span className={styles["item-text"]}>
            Macintosh (OSX)/ Windows(Vista and higher) Machine
          </span>
        </li>
        <li>
          <BsCircleFill size={8} />
          <span className={styles["item-text"]}>Internet Connection</span>
        </li>
      </ul>
    </div>
  );
};

export default Requirements;
