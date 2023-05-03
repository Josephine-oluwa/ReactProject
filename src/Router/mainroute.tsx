import { createBrowserRouter } from "react-router-dom";
import Layout from "../static/Layout";
import Homescreen from "../static/Pages/Homescreen";
import Aboutscreen from "../static/Pages/Aboutscreen";
import Contact from "../static/Pages/Contact";
import Header from "../static/Header";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
      {
        path: "about",
        element: <Aboutscreen />,
      },
      {
        path: "about",
        element: <Contact />,
      },
      {
        path: "about",
        element: <Header />,
      },
    ],
  },
]);
