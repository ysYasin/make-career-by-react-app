import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/HomePage/Home";
import JobDeails from "./Components/jobDetails/JobDeails";
import LoadDetailData from "./LoadDetailData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("chatgory.json"),
      },
      {
        path: "/:applyID",
        element: <JobDeails />,
        loader: ({ params }) => LoadDetailData(params.applyID),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
