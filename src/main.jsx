import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getData, getUpdatedRepos, getUser } from "./api";
import "./App.css";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Repos from "./routes/Repos";
import Root from "./routes/Root";
import SearchUser from "./routes/SearchUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getUpdatedRepos,
      },
      {
        path: "/repos",
        element: <Repos />,
        loader: getData,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: getUser,
      },
      {
        path: "/search",
        element: <SearchUser />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
