import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    <ToastContainer autoClose={1000} />
  </BrowserRouter>
);
