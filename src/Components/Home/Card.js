//ts-check

// Import CSS
import "../../Style/Components/Home/Card.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";

/**
 *
 * @param {Object} course An object that contains course details
 * @returns {React.ReactElement}
 */
const Card = ({ course }) => {
  return (
    <div className="course">
      <img
        src={course["image_240x135"]}
        alt={course["title"]}
        height="135"
      ></img>
      <a href={course["learn_url"]}>
        <h4 className="course-title">{course["title"]}</h4>
      </a>
      <p className="course-instructor">{course["instructor_name"]}</p>
      <div className="stars">
        <i className="course-rate">{Math.round(course["rating"] * 10) / 10}</i>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <i className="fa-solid fa-star-half-stroke"></i>
        <p className="course-students">({course["num_subscribers"]})</p>
      </div>
      {course["price"]["discount_price"] && (
        <h4 className="course-price">
          {course["price"]["discount_price"]["price_string"]}
        </h4>
      )}
      {course["price"]["list_price"] && (
        <p className="course-discount">
          {course["price"]["list_price"]["price_string"]}
        </p>
      )}
      $
      {course["bestseller_badge_content"] && (
        <span className="best-seller">Bestseller</span>
      )}
    </div>
  );
};

export default Card;
