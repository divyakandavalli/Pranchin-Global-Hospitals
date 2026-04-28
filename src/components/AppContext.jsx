import React, { createContext, useState } from "react";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const values = {
    activeTab,
    setActiveTab,
  };
  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
