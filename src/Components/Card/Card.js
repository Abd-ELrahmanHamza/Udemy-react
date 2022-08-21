// Import CSS
import "./Card.css";

// Import react icons
import { BsStarHalf, BsStarFill } from "react-icons/bs";
const Card = () => {
  let bestseller = true;
  return (
    <div className="course">
      <img
        src="https://img-c.udemycdn.com/course/750x422/1477998_1fa5_3.jpg"
        alt="excel course"
        height="135"
      ></img>
      <a href="https://www.udemy.com/course/complete-python-bootcamp/">
        <h4 className="course-title">
          Learn Python: The Complete Python Programming Course
        </h4>
      </a>
      <p className="course-instructor">Alan Rodrigues</p>
      <div className="stars">
        <i className="course-rate">4.6</i>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <i className="fa-solid fa-star-half-stroke"></i>
        <p className="course-students">427,994</p>
      </div>
      <h4 className="course-price">E&#163;14.99</h4>
      <p className="course-discount">E&#163;519.99</p>$
      {bestseller ? <span className="best-seller">Bestseller</span> : ""}
    </div>
  );
};

export default Card;
