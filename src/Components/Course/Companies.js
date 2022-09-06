// Import css
import styles from "../../Style/Components/Course/Companies.module.css";

// Import images
import nasdaq from "../../Assets/Images/nasdaq-light.svg";
import netapp from "../../Assets/Images/netapp-light.svg";
import box from "../../Assets/Images/box-light.svg";
import eventbrite from "../../Assets/Images/eventbrite-light.svg";
import volkswagen from "../../Assets/Images/volkswagen-light.svg";

const Companies = () => {
  return (
    <div className={styles["companies"]}>
      <h2 className={styles["top-companies"]}>
        Top companies choose{" "}
        <span className={styles["udemy-business"]}>Udemy Business</span> to
        build in-demand career skills.
      </h2>
      <div>
        <img src={nasdaq} alt="nasdaq" className={styles["company-img"]}></img>
        <img
          src={volkswagen}
          alt="volkswagen"
          className={styles["company-img"]}
        ></img>
        <img src={box} alt="box" className={styles["company-img"]}></img>
        <img src={netapp} alt="netapp" className={styles["company-img"]}></img>
        <img
          src={eventbrite}
          alt="eventbrite"
          className={styles["company-img"]}
        ></img>
      </div>
    </div>
  );
};

export default Companies;
