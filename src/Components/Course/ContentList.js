// Import css
import styles from "../../Style/Components/Course/ContentList.module.css";

// Import components
import ContentItem from "./ContentItem";
const ContentList = ({ course, courseSummary }) => {
  return (
    <div className={styles["ContentList"]}>
      {course["curriculum_context"]["data"]["sections"].map((content) => (
        <ContentItem content={content} key={content["title"]} />
      ))}
      <button className={styles["more-sections-btn"]}>5 more sections</button>
    </div>
  );
};

export default ContentList;
