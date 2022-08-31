// Import css
import "./App.css";

// Import components
import Home from "./Containers/Home/Home";
import Course from "./Containers/Course/Course";

// Import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
