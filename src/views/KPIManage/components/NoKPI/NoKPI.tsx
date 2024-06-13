import { Box, Typography } from "@mui/material";
import React from "react";
import Action from "./Action/Action";

export default function NoKPI() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        pl: { md: "35%", xs: "25%" },
        pt: "10%",
        width: { xs: "50%", md: "30%" },
      }}
    >
      <Typography
        sx={{ fontWeight: 550, fontSize: { xs: "25px", md: "35px" } }}
      >
        No KPI Found
      </Typography>
      <img src="public/img/nokpi.png" width="80%" alt="No KPI Image" />
      {/* <Action /> */}
    </Box>
  );
}
