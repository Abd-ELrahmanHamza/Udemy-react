// Import css
import styles from "./Footer.module.css";

// Import logo
import logo from "../../Assets/Images/logo-udemy-inverted.svg";

// Import react router dom components
import { Link } from "react-router-dom";

// Import react icons
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lists}>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Udemy Business
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Teach on Udemy
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Get the app
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              About us
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Contact us
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Careers
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Blog
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Help and Support
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Affiliate
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Investors
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Terms
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Privacy policy
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Cookie settings
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Sitemap
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link className={styles["link"]} to="/">
              Accessibility statement
            </Link>
          </li>
        </ul>
        <div className={`${styles["eng-btn-container"]}`}>
          <button className={`${styles["eng-btn"]}`}>
            <BsGlobe className={styles.earth} />
            English
          </button>
        </div>
      </div>
      <div className={styles["logo-container"]}>
        <div className={styles["logo"]}>
          <a href="\">
            <img src={logo} alt="Udemy logo" width="91" height="34"></img>
          </a>
        </div>

        <p className={styles["udemy-inc"]}>© 2022 Udemy, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
