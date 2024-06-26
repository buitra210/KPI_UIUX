import { Box, Typography } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import FirstHi from "./components/FirstHi/FirstHi";
import ActionGeneral from "./components/ActionGeneral/ActionGeneral";
import LineChartKPI from "../LineChartKPI/LineChartKPI";
import BarChartBest from "../BarChartBest/BarChartBest";
import GaugeChart from "../GaugeChart/GaugeChart";

export default function Overview() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 1,
            mb: 1,
            ml: 2,
            cursor: "pointer",
            padding: "8px",
            borderRadius: "12px",
            color: "#b5b8b8",
            fontSize: "15px",
          }}
        >
          <DashboardOutlinedIcon sx={{ size: "12px" }} />
          <Typography sx={{ fontSize: "12px" }}>Dashboard/Overview</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 1,
            mb: 1,
            ml: 2,
            cursor: "pointer",
            padding: "8px",
            borderRadius: "12px",
            color: "#b5b8b8",
            fontSize: "15px",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Daily</Typography>
          <FilterListIcon sx={{ size: "12px" }} />
        </Box>
      </Box>
      <FirstHi />
      <ActionGeneral />
      <LineChartKPI />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          mt: "40px",
          flexWrap: "wrap",
        }}
      >
        <GaugeChart />
        <BarChartBest />
      </Box>
    </Box>
  );
}
