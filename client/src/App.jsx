import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {routing}
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
