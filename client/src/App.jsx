import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRoutes } from "react-router-dom";

import routes from "./routes";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <>
      {routing}
      <ToastContainer />
    </>
  );
};

export default App;
