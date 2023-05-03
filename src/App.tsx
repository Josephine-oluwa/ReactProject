import React from "react";
import Header from "./static/Header";

import { BrowserRouter, RouterProvider } from "react-router-dom";
import { mainRoute } from "./Router/mainroute";

const App = () => {
  return <RouterProvider router={mainRoute} />;
};

export default App;
