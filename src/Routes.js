import Course from "./Pages/Course";
import Home from "./Pages/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "course/:id", element: <Course /> },
];

export default routes;
