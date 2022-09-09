// Import css
import styles from "../Style/Pages/Course/Course.module.css";

// Import components
import CourseIntro from "../Components/Course/CourseIntro";
import Companies from "../Components/Course/Companies";
import WhatLearn from "../Components/Course/WhatLearn";
import Content from "../Components/Course/Content";
import Requirements from "../Components/Course/Requirements";
import Description from "../Components/Course/Description";
import Instructors from "../Components/Course/Instructors";
import StudentFeedback from "../Components/Course/StudentFeedback";
import Reviews from "../Components/Course/Reviews";
import FloatingCourse from "../Components/Course/FloatingCourse";
import Header from "../Components/Course/Header";

// Import react router dom
import { useParams } from "react-router-dom";

// Import custom hooks
import useFetch from "../Hooks/useFetch";

// Import bootstrap components
import { Alert, Spinner } from "react-bootstrap";
import { useCourseSummary } from "../Contexts/CourseSummary";

const Course = () => {
  const { id } = useParams();

  const {
    error,
    isPending,
    data: course,
  } = useFetch(`http://localhost:8000/data/${id}`);

  const {
    errorReview,
    isPendingReview,
    data: reviews,
  } = useFetch(`http://localhost:8000/review/${id}`);

  const { courseSummary } = useCourseSummary();
  return (
    <>
      {isPending && isPendingReview && <Spinner animation="border" />}
      {error && errorReview && <Alert variant="danger">{error}</Alert>}
      {course && reviews && (
        <>
          <Header />
          <div className={styles["container-course-intro"]}>
            <CourseIntro course={course} courseSummary={courseSummary} />
          </div>
          <div className={styles["outer-container"]}>
            <div className={styles["container"]}>
              <div className={styles["content-container"]}>
                <WhatLearn course={course} courseSummary={courseSummary} />
                <Content course={course} courseSummary={courseSummary} />
                <Requirements course={course} courseSummary={courseSummary} />
                <Description
                  description={course["details"]["description"]}
                  for_who={course["details"]["for_who"]}
                />
                <Instructors course={course} courseSummary={courseSummary} />
                <StudentFeedback reviews={reviews} />
                <Reviews reviews={reviews["results"]} />
              </div>
              <div className={styles["floating-course-container"]}>
                <FloatingCourse course={course} courseSummary={courseSummary} />
              </div>
            </div>
          </div>
          <Companies />
        </>
      )}
    </>
  );
};

export default Course;
