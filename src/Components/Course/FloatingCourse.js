// Import css
import styles from "../../Style/Components/Course/FloatingCourse.module.css";

// Import icons
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { RiFolderDownloadLine } from "react-icons/ri";
import { IoIosInfinite } from "react-icons/io";
import { ImMobile } from "react-icons/im";
import { BsTrophy } from "react-icons/bs";
import { useEffect } from "react";
import { useRef } from "react";

const FloatingCourse = () => {
  useEffect(() => {
    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ref for floating course div
  const ref = useRef();

  // Ref for header (image)
  const headerRef = useRef();

  // Handler for window scroll
  const handleScroll = () => {
    if (window.pageYOffset >= 400) {
      ref.current.style.display = "none";
      ref.current.classList.add(styles["floating-course-scroll"]);
      ref.current.classList.remove(styles["floating-course-before-scroll"]);
      headerRef.current.style.display = "none";
      ref.current.style.display = "block";
    } else if (window.pageYOffset < 400) {
      ref.current.style.display = "none";
      headerRef.current.style.display = "block";
      ref.current.classList.add(styles["floating-course-before-scroll"]);
      ref.current.classList.remove(styles["floating-course-scroll"]);
      ref.current.style.display = "block";
    }
  };
  return (
    <div
      className={`${styles["floating-course"]} ${styles["floating-course-before-scroll"]}`}
      ref={ref}
    >
      <div className={styles["header"]} ref={headerRef}>
        <div className={styles["image"]}></div>
        <div className={styles["play-icon"]}>
          <BsFillPlayCircleFill size={70} />
        </div>
        <h3 className={styles["preview-title"]}>Preview this course</h3>
      </div>
      <div className={styles["preview-body"]}>
        <h2 className={styles["price"]}>E£679.99</h2>
        <button className={`${styles["btn"]} ${styles["cart"]}`}>
          Add to cart
        </button>
        <button className={styles["btn"]}>Buy now</button>
        <p className={styles["money-back"]}>30-Day Money-Back Guarantee</p>
        <h4>This course includes:</h4>
        <div>
          <p>
            <BiMoviePlay size={20} className={styles["includes-icons"]} />
            14 hours on-demand video
          </p>
          <p>
            <HiOutlineNewspaper
              size={20}
              className={styles["includes-icons"]}
            />
            1 article
          </p>
          <p>
            <RiFolderDownloadLine
              size={20}
              className={styles["includes-icons"]}
            />
            3 downloadable resources{" "}
          </p>
          <p>
            <IoIosInfinite size={20} className={styles["includes-icons"]} />
            Full lifetime access
          </p>
          <p>
            <ImMobile size={20} className={styles["includes-icons"]} />
            Access on mobile and TV
          </p>
          <p>
            <BsTrophy size={20} className={styles["includes-icons"]} />
            Certificate of completion
          </p>
        </div>
        <div className={styles["links"]}>
          <span className={styles["link"]}>Share</span>
          <span className={styles["link"]}>Gift this course </span>
          <span className={styles["link"]}>Apply coupon</span>
        </div>
      </div>
      <hr />
      <div className={styles["udemy-business"]}>
        <h2>Training 5 or more people?</h2>
        <p>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button className={styles["btn"]}>Try Udemy Business</button>
      </div>
    </div>
  );
};

export default FloatingCourse;
