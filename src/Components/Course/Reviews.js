// Import css
import styles from "../../Style/Components/Course/Reviews.module.css";

// Import react icons
import { AiOutlineSearch } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className={styles["reviews-container"]}>
      <h2>Reviews</h2>
      <div className={styles["search-container"]}>
        <input
          type={"text"}
          placeholder="Search reviews"
          className={styles["search-input"]}
        />
        <button className={styles["search-icon-back"]}>
          <AiOutlineSearch size={30} className={styles["search-icon"]} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
