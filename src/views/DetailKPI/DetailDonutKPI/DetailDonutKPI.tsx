import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { CHART_COLOR_RANGE } from "src/constants";

export default function DetailDonutKPI() {
  // Generate random progress and target values for each KPI
  const researchProgress = Math.floor(Math.random() * 100);
  const target = 100; // assuming the target is 100 for simplicity
  const teachesProgress = Math.floor(Math.random() * 100);
  const studyProgress = Math.floor(Math.random() * 100);
  const testProgress = Math.floor(Math.random() * 100);

  const options = {
    chart: {
      type: "pie",
      height: 300,
      options3d: {
        enabled: false,
        alpha: 45,
      },
      //   numberFormatter: function (value) {
      //     return `${formatNumber(value, { fractionDigits: 2 })}`;
      //   },
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        borderRadius: 0,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
        },
        innerSize: 80,
        depth: 45,
        borderWidth: 0,
      },
    },
    series: [
      {
        states: {
          inactive: {
            opacity: 2,
            enabled: true,
          },
        },
        data: [
          {
            name: "Research",
            y: researchProgress,
            color: CHART_COLOR_RANGE[0],
          },
          {
            name: "Teaches",
            y: teachesProgress,
            color: CHART_COLOR_RANGE[1],
          },
          {
            name: "Study",
            y: studyProgress,
            color: CHART_COLOR_RANGE[6],
          },
          {
            name: "Test",
            y: testProgress,
            color: "#2D99FF",
          },
        ],
      },
    ],
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
