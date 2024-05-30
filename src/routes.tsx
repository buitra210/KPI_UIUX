import { Navigate, useRoutes } from "react-router-dom";
import path from "path";
import Layout from "./layout/Layout";
import HomePage from "./views/HomePage/HomePage";
import Dashboard from "./views/Dashboard/Dashboard";
import DetailKPI from "./views/DetailKPI/DetailKPI";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "homepage", element: <HomePage /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "detailKPI", element: <DetailKPI /> },
      ],
    },
  ]);
}
