// Import CSS
import "./Courses.css";

// Import components
import Card from "../Card/Card";

// Import bootstrap components
import Carousel from "react-bootstrap/Carousel";

const Courses = ({ title, description, courses }) => {
  function groupCourses(data, n) {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  }

  let groupedCourses = groupCourses(courses, 5);
  return (
    <section className="courses-section">
      <div>
        <h2 className="career-title">{title}</h2>
        <p className="courses-paragraph">{description}</p>
        <button className="my-btn explore">Explore Python</button>
      </div>

      <Carousel>
        {groupedCourses.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="courses" id="courses">
              {group.map((course) => (
                <Card key={course.id} course={course}></Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Courses;
