// Import css
import ContentList from "../ContentList/ContentList";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div>
      <h2>Course content</h2>
      <div className={styles["content-info"]}>
        <p>15 sections • 146 lectures • 14h 42m total length</p>
        <button className={styles["expand"]}>Expand all sections</button>
      </div>
      <ContentList />
    </div>
  );
};

export default Content;
