import { Box, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import BoxCustomChild from "src/components/BoxCustomChild/BoxCustomChild";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";

export default function Tutorial() {
  return (
    <Box sx={{ my: "27px" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <HistoryIcon sx={{ color: " #3f6c62", pr: 1, fontSize: "35px" }} />
        <Typography
          sx={{ fontSize: "30px", fontWeight: 550, color: "#3f6c62" }}
        >
          Tutorial
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <BoxCustomChild
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "center",
          }}
        >
          <CastForEducationIcon sx={{ fontSize: "60px", my: 1 }} />
          <Typography>Teaching's KPI</Typography>
        </BoxCustomChild>
        <BoxCustomChild
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "center",
          }}
        >
          <CastForEducationIcon sx={{ fontSize: "60px", my: 1 }} />
          <Typography>Teaching's KPI</Typography>
        </BoxCustomChild>
        <BoxCustomChild
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "center",
          }}
        >
          <CastForEducationIcon sx={{ fontSize: "60px", my: 1 }} />
          <Typography>Teaching's KPI</Typography>
        </BoxCustomChild>
        <BoxCustomChild
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "center",
          }}
        >
          <CastForEducationIcon sx={{ fontSize: "60px", my: 1 }} />
          <Typography>Teaching's KPI</Typography>
        </BoxCustomChild>
        <BoxCustomChild
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "center",
          }}
        >
          <CastForEducationIcon sx={{ fontSize: "60px", my: 1 }} />
          <Typography>Teaching's KPI</Typography>
        </BoxCustomChild>
        <BoxCustomChild
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            alignItems: "center",
          }}
        >
          <CastForEducationIcon sx={{ fontSize: "60px", my: 1 }} />
          <Typography>Teaching's KPI</Typography>
        </BoxCustomChild>
      </Box>
    </Box>
  );
}
