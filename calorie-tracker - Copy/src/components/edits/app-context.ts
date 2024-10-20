import { createContext, useState } from "react";

const AppContext = createContext({
  currentDate: new Date(),
  setCurrentDate: (val) => {},
  totalCalories: 0,
  setTotalCalories: (val) => {},
});

function AppContextProvider(props) {
  // Logic for the provider will go here
}

export default AppContext;
