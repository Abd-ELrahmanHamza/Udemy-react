// Import css
import styles from "../../Style/Components/Course/ContentItem.module.css";

// Import react icons
import { IoIosArrowDown } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";

// Import hooks
import { useState } from "react";

const ContentItem = () => {
  // State to store state of item (open or closed)
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(!open);
  };

  return (
    <div className={styles["content-item"]} onClick={handleClick}>
      <div className={styles["content-item-header"]}>
        <div className={styles["item-title-container"]}>
          <IoIosArrowDown
            size={20}
            className={`${styles["arrow-icon"]} ${
              !open ? styles["arrow-icon-reverse"] : ""
            }`}
          />
          <span className={styles["item-title"]}>
            Up and Running With Python
          </span>
        </div>
        <div>
          <span>2 Lectures • 6min</span>
        </div>
      </div>

      <div
        className={`${styles["content-item-body"]} ${
          !open ? styles["hide-body"] : ""
        }`}
      >
        <div className={styles["item-title-container"]}>
          <AiFillPlayCircle size={20} />
          <span className={styles["item-body-title"]}>
            Up and Running With Python
          </span>
        </div>
        <div>
          <span>04:07</span>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
