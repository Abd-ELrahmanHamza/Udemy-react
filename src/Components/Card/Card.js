// Import CSS
import "./Card.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";
const Card = ({ course }) => {
  return (
    <div className="course">
      <img src={course.image} alt={course.alt} height="135"></img>
      <a href={course.image}>
        <h4 className="course-title">{course.title}</h4>
      </a>
      <p className="course-instructor">{course.author}</p>
      <div className="stars">
        <i className="course-rate">{Math.round(course.rating * 10) / 10}</i>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <i className="fa-solid fa-star-half-stroke"></i>
        <p className="course-students">({course.people})</p>
      </div>
      <h4 className="course-price">E&#163;{course.price}</h4>
      <p className="course-discount">E&#163;{course.discount}</p>$
      {course.bestseller && <span className="best-seller">Bestseller</span>}
    </div>
  );
};

export default Card;
