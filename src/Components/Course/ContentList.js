// Import css
import styles from "../../Style/Components/Course/ContentList.module.css";

// Import components
import ContentItem from "./ContentItem";

// Import hooks
import { useState } from "react";

const ContentList = ({ course, courseSummary }) => {
  const [curSections, setCurSections] = useState(
    course["curriculum_context"]["data"]["sections"].slice(
      0,
      Math.min(5, course["curriculum_context"]["data"]["sections"].length)
    )
  );
  const addMoreSections = () => {
    setCurSections([
      ...curSections,
      ...course["curriculum_context"]["data"]["sections"].slice(
        curSections.length,
        Math.min(
          course["curriculum_context"]["data"]["sections"].length,
          curSections.length + 5
        )
      ),
    ]);
  };
  return (
    <div className={styles["ContentList"]}>
      {curSections.map((content) => (
        <ContentItem content={content} key={content["title"]} />
      ))}
      {curSections.length !==
        course["curriculum_context"]["data"]["sections"].length && (
        <button
          className={styles["more-sections-btn"]}
          onClick={addMoreSections}
        >
          5 more sections
        </button>
      )}
    </div>
  );
};

export default ContentList;
