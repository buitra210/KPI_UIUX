import { Navigate, useRoutes } from "react-router-dom";
import path from "path";
import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard/Dashboard";
import DetailKPI from "./views/DetailKPI/DetailKPI";
import TaskOverview from "./views/TaskOverview/TaskOverview";
import KPIManage1 from "./views/KPIManage/KPIManage1";
import KPIManage2 from "./views/KPIManage/KPIManage2";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "overview", element: <Dashboard /> },
        { path: "KPIManage", element: <KPIManage1 /> },
        { path: "KPIManage2", element: <KPIManage2 /> },
        { path: "taskoverview", element: <TaskOverview /> },
        { path: "detailKPI", element: <DetailKPI />}
      ],
    },
  ]);
}
