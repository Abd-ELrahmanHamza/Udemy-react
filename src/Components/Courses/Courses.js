// Import CSS
import "./Courses.css";

// Import components
import Card from "../Card/Card";

// Import bootstrap components
import Carousel from "react-bootstrap/Carousel";

const Courses = () => {
  return (
    <section className="courses-section">
      <div>
        <h2 className="career-title">
          Expand your career opportunities with Python
        </h2>
        <p className="courses-paragraph">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners and advanced developers alike.
        </p>
        <button className="my-btn explore">Explore Python</button>
      </div>

      <Carousel>
        <Carousel.Item>
          <div className="courses" id="courses">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="courses" id="courses">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Courses;
