// Import components
import Card from "./Card";

// Import bootstrap components
import Carousel from "react-bootstrap/Carousel";
import { useSearchParams } from "react-router-dom";

const CourseGroup = ({ courses }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   *
   * @param {Array} data - Array contains all courses
   * @param {Integer} n - The size of group
   * @returns {Array} - Array contains a group of courses represented by arrays
   */
  function groupCourses(data, n) {
    var group = [];
    data = data.filter(
      (course) =>
        searchParams.get("course") === null ||
        course.title
          .toUpperCase()
          .indexOf(searchParams.get("course").toUpperCase()) !== -1
    );
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
  let groupedCourses = groupCourses(courses.items, 5);

  return (
    <section className="courses-section">
      <div>
        <h2 className="career-title">{courses.title}</h2>
        <p className="courses-paragraph">{courses.description}</p>
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

export default CourseGroup;
