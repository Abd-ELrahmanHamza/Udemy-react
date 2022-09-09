import { createContext, useContext } from "react";

import { useState } from "react";
const coursesContext = createContext(null);

export const CoursesProvider = ({ children }) => {

  // A global state that stores the fetched courses
  const [courses, setCourses] = useState(null);

  return (
    <coursesContext.Provider
      value={{
        courses,
        setCourses,
      }}
    >
      {children}
    </coursesContext.Provider>
  );
};

export const useCourses = () => {
  return useContext(coursesContext);
};
