// Import css
import styles from "../../Style/Components/Course/Instructors.module.css";

// Import components
import Instructor from "./Instructor";

const Instructors = ({ course, courseSummary }) => {
  return (
    <div>
      <h2>Instructors</h2>
      {courseSummary["visible_instructors"].map((instructor) => (
        <Instructor instructor={instructor} key={instructor["title"]} />
      ))}
    </div>
  );
};

export default Instructors;
