import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";

import React from "react";
import { CHART_COLOR_RANGE } from "src/constants";

export default function DetailColumnKPI() {
  // Generate random progress and target values for each KPI
  const researchProgress = Math.floor(Math.random() * 100);
  const target = 100; // assuming the target is 100 for simplicity
  const teachesProgress = Math.floor(Math.random() * 100);
  const studyProgress = Math.floor(Math.random() * 100);
  const testProgress = Math.floor(Math.random() * 100);

  const options = {
    chart: {
      type: "column",
      height: 300,
    },
    title: {
      text: "KPI Progress for the Current Month",
    },
    xAxis: {
      categories: ["Research", "Teaches", "Study", "Test"],
      title: {
        text: null,
      },
      labels: {
        rotation: 0,
        align: "center",
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Progress (%)",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: " %",
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f} %",
        },
        poinWidth: 10,
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        color: CHART_COLOR_RANGE[1],
        name: "Teaches",
        data: [
          (researchProgress / target) * 100,
          (teachesProgress / target) * 100,
          (studyProgress / target) * 100,
          (testProgress / target) * 100,
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
