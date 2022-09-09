// Import CSS
import styles from "../../Style/Components/Course/Description.module.css";

// Import PropTypes
import PropTypes from "prop-types";

// Import react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Import hooks
import { useState } from "react";

const Description = ({ description, for_who, showTitle }) => {
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
        {description}
        {for_who && <h2>Who this course is for:</h2>}
        {for_who && for_who}
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
