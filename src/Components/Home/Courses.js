// ts-check

// Import CSS
import "../../Style/Components/Home/Courses.css";

// Import contexts
import { useCourses } from "../../Contexts/Courses";

// Import components
import CourseGroup from "./Coursegroup";

// Import contexts
import { useState } from "react";

const groupByTitle = (courses) => {
  let resultObj = {};
  for (const course of courses) {
    resultObj[course.title] = course;
  }
  return resultObj;
};

/**
 *
 * @param {String} title The title of the courses section
 * @param {String} description The description of the courses section
 * @param {Array} courses Array of courses
 * @returns  {React.ReactElement}
 */
const Courses = () => {
  // Global courses context
  const { courses } = useCourses();

  console.log(courses);

  let resultObj = groupByTitle(courses);

  const [activeCourse, setActiveCourse] = useState(Object.keys(resultObj)[0]);

  const handleClick = (event) => {
    setActiveCourse(event.target.textContent);
  };

  return (
    <>
      {resultObj && (
        <ul className="courses-list">
          {Object.keys(resultObj).map((title) => {
            if (activeCourse === title)
              return (
                <li
                  className="course-item active"
                  key={title}
                  onClick={handleClick}
                >
                  {title}
                </li>
              );
            else
              return (
                <li className="course-item" key={title} onClick={handleClick}>
                  {title}
                </li>
              );
          })}
        </ul>
      )}
      <CourseGroup courses={resultObj[activeCourse]} />
    </>
  );
};

export default Courses;
