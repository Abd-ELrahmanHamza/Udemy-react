// Import css
import "./App.css";

// Import components
import Home from "./Pages/Home/Home";
import Course from "./Pages/Course/Course";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
