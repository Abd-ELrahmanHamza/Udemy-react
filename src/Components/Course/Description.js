// Import CSS
import styles from "../../Style/Components/Course/Description.module.css";

// Import PropTypes
import PropTypes from "prop-types";

// Import react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Import hooks
import { useState } from "react";

const Description = ({ course, courseSummary, showTitle }) => {
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showTitle && <h2>Description</h2>}
      <div
        className={`${
          showMore ? styles["description-paragraph-show-more"] : ""
        } ${showMore ? styles["description-paragraph"] : ""}`}
      >
        {course["details"]["description"]}
        {<h2>Who this course is for:</h2>}
        {course["details"]["for_who"]}
      </div>
      <button className={styles["show-more-btn"]} onClick={handleShowMore}>
        Show more {showMore && <IoIosArrowDown />}{" "}
        {!showMore && <IoIosArrowUp />}
      </button>
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string,
  showTitle: PropTypes.bool,
};

Description.defaultProps = {
  message: "Hello",
  showTitle: true,
};
export default Description;
