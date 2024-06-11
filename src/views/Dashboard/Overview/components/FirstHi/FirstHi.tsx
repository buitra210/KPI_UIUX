import { Box, Button, Typography } from "@mui/material";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { PieChart } from "@mui/x-charts/PieChart";
import { CHART_COLOR_RANGE } from "src/constants";
export default function FirstHi() {
  return (
    <BoxCustom sx={{ my: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "20px", opacity: 0.8, py: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              Good Afternoon Mark <WbTwilightIcon sx={{ color: "#ffb933" }} />
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "30px", fontWeight: 600, pb: 2 }}>
            You are excellent today!
          </Typography>
          <ButtonCustom sx={{ width: "30%" }}>View Report</ButtonCustom>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // flexWrap: "wrap",  // This line is causing the error
            // justifyContent: "center",
            justifyItems: "center",
            pr: { xs: 0, sm: 0 }, // This line is causing the error
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "30px", fontWeight: 530 }}>
              Allmost all
            </Typography>
            <Typography sx={{ fontSize: "30px", fontWeight: 530 }}>
              KPIs fullfilled
            </Typography>
          </Box>
          <Box>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 20, color: CHART_COLOR_RANGE[0] },
                    { id: 1, value: 35, color: CHART_COLOR_RANGE[1] },
                    { id: 2, value: 20, color: CHART_COLOR_RANGE[2] },
                    { id: 3, value: 50, color: CHART_COLOR_RANGE[3] },
                  ],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 300,

                  // cy: 150,
                },
              ]}
              width={400}
              height={200}
            />
          </Box>
        </Box>
      </Box>
    </BoxCustom>
  );
}
