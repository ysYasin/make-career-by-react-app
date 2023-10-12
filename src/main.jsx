import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/HomePage/Home";
import JobDeails from "./Components/jobDetails/JobDeails";
import { LoadDetailData, gettingDataFromDb } from "./LoadDetailData";
import AppyedJob from "./Components/ApplyedjobPage/Applyedjob/AppyedJob";
import Statistic from "./Components/Statistic/Statistic";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch("chatgory.json"),
      },
      {
        path: "/:applyID",
        element: <JobDeails />,
        loader: ({ params }) => LoadDetailData(params.applyID),
      },
      {
        path: "Appliedjobs",
        element: <AppyedJob></AppyedJob>,
        loader: gettingDataFromDb,
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
