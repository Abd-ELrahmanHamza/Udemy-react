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

const Instructor = () => {
  return (
    <>
      <h2 className={styles["instructor-link"]}>
        <Link to={"/"} className={styles["instructor-link"]}>
          Stephane Maarek | AWS Certified Cloud Practitioner,Solutions
          Architect,Developer
        </Link>
      </h2>
      <p className={styles["instructor-quote"]}>
        Best Selling Instructor, 9x AWS Certified, Kafka Guru
      </p>
      <div className={styles["instructor-info"]}>
        <img
          src={instructor}
          alt="instructor"
          className={styles["instructor-image"]}
        />
        <div>
          <div className={styles["instructor-badges"]}>
            <AiFillStar /> <span>4.4 Instructor Rating</span>
          </div>
          <div className={styles["instructor-badges"]}>
            <RiMedalLine /> <span>73,835 Reviews</span>
          </div>
          <div className={styles["instructor-badges"]}>
            <BsPeopleFill /> <span>891,903 Students</span>
          </div>
          <div className={styles["instructor-badges"]}>
            <AiFillPlayCircle /> <span>16 Courses</span>
          </div>
        </div>
      </div>
      <Description showTitle={false} />
    </>
  );
};

export default Instructor;
