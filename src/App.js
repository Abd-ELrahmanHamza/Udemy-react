// Import css
import "./App.css";

// Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Import react router dom
import { useRoutes } from "react-router-dom";

// Import routes array
import routes from "./Routes";

function App() {
  let element = useRoutes(routes);
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

export default App;
