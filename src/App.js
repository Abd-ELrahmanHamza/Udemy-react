// Import css
import "./App.css";

// Import components
import Home from "./Containers/Home/Home";
import Course from "./Containers/Course/Course";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
