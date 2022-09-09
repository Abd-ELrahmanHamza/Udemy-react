// Import css
import styles from "../../Style/Components/Course/ContentItem.module.css";

// Import react icons
import { IoIosArrowDown } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";

// Import hooks
import { useState } from "react";

const ContentItem = ({ content }) => {
  // State to store state of item (open or closed)
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(!open);
  };

  return (
    <div className={styles["content-item"]}>
      <div className={styles["content-item-header"]} onClick={handleClick}>
        <div className={styles["item-title-container"]}>
          <IoIosArrowDown
            size={20}
            className={`${styles["arrow-icon"]} ${
              !open ? styles["arrow-icon-reverse"] : ""
            }`}
          />
          <span className={styles["item-title"]}>{content["title"]}</span>
        </div>
        <div>
          <span>
            {content["lecture_count"]} Lectures •{" "}
            {content["content_length_text"]}min
          </span>
        </div>
      </div>
      {content["items"].map((item) => (
        <div
          className={`${styles["content-item-body"]} ${
            !open ? styles["hide-body"] : ""
          }`}
        >
          <div className={styles["item-container"]}>
            <div className={styles["item-title-container"]}>
              <AiFillPlayCircle size={20} />
              <span
                className={`${styles["item-body-title"]} ${
                  item["can_be_previewed"] && styles["can-preview-title"]
                }`}
              >
                {item["title"]}
              </span>
            </div>
            <div className={styles["item-body-time"]}>
              {item["can_be_previewed"] && (
                <span className={styles["can-preview"]}>Preview</span>
              )}
              {item["content_summary"]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentItem;
