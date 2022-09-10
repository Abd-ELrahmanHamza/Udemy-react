// Import css
import styles from "../../Style/Components/Course/SmallNav.module.css";

// Import react router dom
import { Link } from "react-router-dom";

// Import hooks
import { useEffect } from "react";

const SmallNav = () => {
  const handleResize = () => {
    if (window.pageYOffset >= 1200 && window.innerWidth <= 600) {
      document.getElementById("small-navbar").style.display = "flex";
    } else {
      document.getElementById("small-navbar").style.display = "none";
    }
  };
  useEffect(() => {
    // Add scroll event listener to window
    window.addEventListener("resize", handleResize);

    // cleanup this component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={styles["small-nav-bar"]} id="small-navbar">
      <ul className={styles["links-list"]}>
        <li className={styles["list-item"]}>
          <Link className={styles["list-link"]} to="/">
            Overview
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["list-link"]} to="/">
            Curriculum
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["list-link"]} to="/">
            Instructor
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link className={styles["list-link"]} to="/">
            Reviews
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default SmallNav;
