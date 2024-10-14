"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [user, setUser] = useState(undefined);
  let [data, setData] = useState(undefined);

  return (
    <AppContext.Provider value={{ user, setUser, data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
