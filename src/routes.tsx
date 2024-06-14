import { Navigate, useRoutes } from "react-router-dom";
import path from "path";
import Layout from "./layout/Layout";
import Dashboard from "./views/Dashboard/Dashboard";
import TaskOverview from "./views/TaskOverview/TaskOverview";
import KPIManage1 from "./views/KPIManage/KPIManage1";
import KPIManage2 from "./views/KPIManage/KPIManage2";
import Teams from "./views/Teams/Teams";
import DetailKPI from "./views/KPIManage/AddKPI/DetailKPI/DetailKPI";

export default function RouterUrl() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/plainHtmlCss/landing.html" />,
      children: [
        { path: "overview", element: <Dashboard /> },
        { path: "KPIManage", element: <KPIManage1 /> },
        { path: "KPIManage2", element: <KPIManage2 /> },
        { path: "taskoverview", element: <TaskOverview /> },
        { path: "teams", element: <Teams /> },
        { path: "detailKPI", element: <DetailKPI /> },
      ],
    },
  ]);
}
