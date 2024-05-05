import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AimRoutes />
      </Router>
    </>
  );
};

export default App;
