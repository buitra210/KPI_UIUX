import { Box, Typography } from "@mui/material";
import React from "react";
import BoxCustom from "src/components/BoxCustom/BoxCustom";

export default function OverviewDetail() {
  return (
    <>
      <BoxCustom>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Mastering Bitcoin</Typography>
            <Typography sx={{ opacity: 0.7 }}>
              Due Date: Nov 10, 2022
            </Typography>
          </Box>
          <img src="public/img/slack.png" style={{ width: "50px" }}></img>
        </Box>
        <Box></Box>
      </BoxCustom>
    </>
  );
}
