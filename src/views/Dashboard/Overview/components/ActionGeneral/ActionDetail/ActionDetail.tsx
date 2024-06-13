import { Box, Typography } from "@mui/material";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined"; // Import the missing icon component
import LineChartKPI from "src/views/Dashboard/LineChartKPI/LineChartKPI";
import LineChartDetail from "./LineChartDetail/LineChartDetail";

export default function ActionDetail() {
  return (
    <Box sx={{ width: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ fontSize: "30px", fontWeight: 550 }}>2</Typography>
        <Box sx={{ display: "flex" }}>
          <CallMissedOutgoingIcon sx={{ color: "#15b097" }} />
          <Typography sx={{ color: "#15b097" }}>0.5%</Typography>
        </Box>
      </Box>
      <LineChartDetail />
      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography sx={{ pb: 0 }}>Mastering Bitcoin</Typography>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ pl: 5.3, fontSize: "12px" }}
        >
          Deadline: 12/2024
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography sx={{ pb: 0 }}>Mastering Java</Typography>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ pl: 5.3, fontSize: "12px" }}
        >
          Deadline: 1/2025
        </Typography>
      </Box>
    </Box>
  );
}
