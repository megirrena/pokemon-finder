"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/src/store";
import AboutPage from "@/src/components/about";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AboutPage />
    </Provider>
  );
};

export default App;
