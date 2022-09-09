// Import css
import styles from "../../Style/Components/Course/Reviews.module.css";

// Import react icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

// Import components
import Review from "./Review";

// Import hooks
import { useState } from "react";

const Reviews = ({ reviews }) => {
  const [curReviews, setCurReviews] = useState(
    reviews.slice(0, Math.min(5, reviews.length))
  );

  const addMoreReviews = () => {
    setCurReviews([
      ...curReviews,
      ...reviews.slice(
        curReviews.length,
        Math.min(reviews.length, curReviews.length + 5)
      ),
    ]);
    console.log(" curReviews ", curReviews);
  };
  return (
    <div className={styles["reviews-container"]}>
      <h2>Reviews</h2>
      <div className={styles["search-container"]}>
        <div className={styles["search"]}>
          <input
            type={"text"}
            placeholder="Search reviews"
            className={styles["search-input"]}
          />
          <button className={styles["search-icon-back"]}>
            <AiOutlineSearch size={30} className={styles["search-icon"]} />
          </button>
        </div>

        <div className={styles["select-star-container"]}>
          <select className={styles["select-star"]} name="star" id="star">
            <option value="All ratings">All ratings</option>
            <option value="Five stars">Five stars</option>
            <option value="Four stars">Four stars</option>
            <option value="Three stars">Three stars</option>
            <option value="Two stars">Two stars</option>
            <option value="One star">One stars</option>
          </select>
          <span className={styles["arrow-icon"]}>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div>
        {curReviews.map((review) => (
          <Review review={review} key={review["id"]} />
        ))}
      </div>
      {curReviews.length !== reviews.length && (
        <button
          className={styles["more-sections-btn"]}
          onClick={addMoreReviews}
        >
          Show more reviews
        </button>
      )}
    </div>
  );
};

export default Reviews;
