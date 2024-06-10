import { Navigate, useRoutes } from "react-router-dom";
import path from "path";
import Layout from "./layout/Layout";
import HomePage from "./views/HomePage/HomePage";
import Dashboard from "./views/Dashboard/Dashboard";
import DetailKPI from "./views/DetailKPI/DetailKPI";
import TaskOverview from "./views/TaskOverview/TaskOverview";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "homepage", element: <HomePage /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "detailKPI", element: <DetailKPI /> },
        { path: "taskoverview", element: <TaskOverview /> },
      ],
    },
  ]);
}
