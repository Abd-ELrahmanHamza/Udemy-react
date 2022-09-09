import { createContext, useContext } from "react";

import { useState } from "react";
const courseSummaryContext = createContext(null);

export const CourseSummaryProvider = ({ children }) => {
  // A global state that stores the fetched courses
  const [courseSummary, setCourseSummary] = useState(null);

  return (
    <courseSummaryContext.Provider
      value={{
        courseSummary,
        setCourseSummary,
      }}
    >
      {children}
    </courseSummaryContext.Provider>
  );
};

export const useCourseSummary = () => {
  return useContext(courseSummaryContext);
};
