// ts-check

// Import CSS
import "./Courses.css";

// Import components
import Card from "../Card/Card";

// Import bootstrap components
import Carousel from "react-bootstrap/Carousel";

/**
 *
 * @param {String} title The title of the courses section
 * @param {String} description The description of the courses section
 * @param {Array} courses Array of courses
 * @returns  {React.ReactElement}
 */
const Courses = ({ title, description, courses }) => {
  /**
   *
   * @param {Array} data - Array contains all courses
   * @param {Integer} n - The size of group
   * @returns {Array} - Array contains a group of courses represented by arrays
   */
  function groupCourses(data, n) {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  }

  /**
   * Array contains a group of courses represented by arrays each array has 5 courses
   * @type {Array}
   */
  let groupedCourses = groupCourses(courses, 5);
  return (
    <>
      <ul className="courses-list">
        <li className="course-item active">Python</li>
        <li className="course-item">Excel</li>
        <li className="course-item">Web development</li>
        <li className="course-item">Javascript</li>
        <li className="course-item">Data science</li>
        <li className="course-item">AWS Certification</li>
        <li className="course-item">Drawing</li>
      </ul>
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
    </>
  );
};

export default Courses;
