import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMe from "./pages/AboutMe.jsx";
import Contacts from "./pages/Contacts.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      }, {
        path: '/Resume',
        element: <Resume />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
