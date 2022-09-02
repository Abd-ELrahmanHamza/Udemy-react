// Import css
import styles from "./ContentList.module.css";

// Import components
import ContentItem from "../ContentItem/ContentItem";
const ContentList = () => {
  return (
    <div className={styles["ContentList"]}>
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <button className={styles["more-sections-btn"]}>5 more sections</button>
    </div>
  );
};

export default ContentList;
