// Import css
import "./App.css";

// Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Import react router dom
import { useRoutes } from "react-router-dom";

// Import routes array
import routes from "./Routes";

// Import contexts
import { CoursesProvider } from "./Contexts/Courses";
import { CourseSummaryProvider } from "./Contexts/CourseSummary";

function App() {
  let element = useRoutes(routes);

  return (
    <>
      <CoursesProvider>
        <CourseSummaryProvider>
          <Navbar />
          {element}
          <Footer />
        </CourseSummaryProvider>
      </CoursesProvider>
    </>
  );
}

export default App;
