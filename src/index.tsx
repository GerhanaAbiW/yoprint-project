import React from "react";
import ReactDOM from "react-dom/client";
import RoutesComponent from "./routes";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);
