import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";

export default function SubBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 2,
        borderBottom: "1px solid black",
      }}
    >
      <Box
        sx={{ display: "flex", gap: 2, height: " 40px", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "12px", color: "#b5b8b8" }}>
          Overview
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#b5b8b8" }}>
          Calendar
        </Typography>
      </Box>
      <ButtonCustom sx={{ fontSize: "12px" }}>Creat new KPI</ButtonCustom>
    </Box>
  );
}
