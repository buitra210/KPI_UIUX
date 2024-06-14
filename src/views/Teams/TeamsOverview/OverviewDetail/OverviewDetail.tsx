import { Box, Grid, Slider, Typography } from "@mui/material";
import React from "react";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { red } from "@mui/material/colors";

export default function OverviewDetail() {
  return (
    <>
      <Box sx={{ my: 3.5 }}>
        <Grid container rowSpacing={3.5} columnSpacing={3.5}>
          <Grid item xs={12} md={4}>
            <BoxCustom
              sx={{
                cursor: "pointer",
                ":hover": { backgroundColor: "#fed7da3d" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Mastering Bitcoin
                  </Typography>
                  <Typography sx={{ opacity: 0.7 }}>
                    Due Date: Nov 10, 2022
                  </Typography>
                </Box>
                <img src="public/img/slack.png" style={{ width: "50px" }}></img>
              </Box>
              <Box sx={{ my: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Person3OutlinedIcon sx={{ fontSize: "20px" }} />
                    <Person3OutlinedIcon sx={{ fontSize: "20px" }} />
                    <Person3OutlinedIcon sx={{ fontSize: "20px" }} />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <FiberManualRecordIcon
                      sx={{ fontSize: 12, color: "#dc0516" }}
                    />
                    <Typography sx={{ fontSize: "15px" }}>Complete</Typography>
                  </Box>
                </Box>
                <Slider
                  aria-label="time-indicator"
                  value={50}
                  size="small"
                  min={0}
                  step={1}
                  sx={{
                    color: red[400],
                    height: 4,
                    "& .MuiSlider-thumb": {
                      width: 8,
                      height: 8,
                      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                      "&::before": {
                        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                      },
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: `0px 0px 0px 8px ${red[400].replace(
                          /[^,]+(?=\))/,
                          "0.16"
                        )}`,
                      },
                      "&.Mui-active": {
                        width: 20,
                        height: 20,
                      },
                    },
                    "& .MuiSlider-rail": {
                      opacity: 0.28,
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontSize: "12px" }}>2/19</Typography>
                    <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>
                      Total Tasks
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>
                    17%
                  </Typography>
                </Box>
              </Box>
            </BoxCustom>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
