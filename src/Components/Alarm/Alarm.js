// Import alarm image
import alarm from "../../Assets/Images/alarm.jpg";

// Import CSS
import "./Alarm.css";
const Alarm = () => {
  return (
    <>
      <section className="offer">
        <div className="offer-details">
          <h1 className="offer-heading">New to Udemy? Lucky you.</h1>
          <p>
            Courses start at E&#163;169.99. Get your new-student offer before it
            expires
          </p>
        </div>
        <div className="offer-image">
          <img src={alarm} alt="Alarm" width="600px"></img>
        </div>
      </section>
      <div>
        <h2>A broad selection of courses</h2>
        <h3>
          Choose from 185,000 online video courses with new additions published
          every month
        </h3>
      </div>
    </>
  );
};

export default Alarm;
