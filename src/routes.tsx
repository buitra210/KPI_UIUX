import { Navigate, useRoutes } from "react-router-dom";
import path from "path";
import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard/Dashboard";
import DetailKPI from "./views/DetailKPI/DetailKPI";
import TaskOverview from "./views/TaskOverview/TaskOverview";
import KPIManage from "./views/KPIManage/KPIManage";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "KPIManage", element: <KPIManage /> },
        { path: "taskoverview", element: <TaskOverview /> },
      ],
    },
  ]);
}
