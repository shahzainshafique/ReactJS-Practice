import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/stores/store";
import "./index.css";
import App from "./App";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Navbar />
        <ReactNotifications />
        <App />
      </Router>
    </React.StrictMode>
    </Provider>
);
