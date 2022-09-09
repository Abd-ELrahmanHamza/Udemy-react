// ts-check

// Import CSS
import "../../Style/Components/Home/Courses.css";

// Import contexts
import { useCourses } from "../../Contexts/Courses";
import CourseGroup from "./Coursegroup";

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
      <CourseGroup courses={courses[0]} />
    </>
  );
};

export default Courses;
