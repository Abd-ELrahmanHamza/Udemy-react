// ts-check

// Import CSS
import "../Style/Pages/Home/Home.css";

// Import components
import Courses from "../Components/Home/Courses";
import Alarm from "../Components/Home/Alarm";

// Import contexts
import { useCourses } from "../Contexts/Courses";

// Import hooks
import { useEffect } from "react";

// Import custom hooks
import useFetch from "../Hooks/useFetch";

// Import bootstrap components
import { Alert } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

/**
 *
 * This is the Home page it contains only main section which contains the courses
 *
 * @component
 * @returns {React.ReactElement}  <Home>  Home  component
 *
 */
const Home = () => {
  // Fetch courses
  const { error, isPending, data } = useFetch("http://localhost:8000/summary");

  // Global context for the courses
  const { courses, setCourses } = useCourses();

  useEffect(() => {
    setCourses(data);
  });

  return (
    <>
      <main className="my-container">
        <Alarm />
        {isPending && <Spinner animation="border" />}
        {error && <Alert variant="danger">{error}</Alert>}
        {courses && <Courses />}
      </main>
    </>
  );
};

export default Home;
