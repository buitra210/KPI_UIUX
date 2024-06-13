import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import React from "react";
import { CHART_COLOR_RANGE } from "src/constants";

// Define a color range for the columns based on their rank
const COLOR_RANKS = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]; // Red, Green, Blue, Yellow

export default function DetailColumnKPI() {
  // Generate random progress values for each KPI
  const researchProgress = Math.floor(Math.random() * 100);
  const target = 100; // assuming the target is 100 for simplicity
  const teachesProgress = Math.floor(Math.random() * 100);
  const studyProgress = Math.floor(Math.random() * 100);
  const testProgress = Math.floor(Math.random() * 100);

  // Calculate percentage values
  const progressValues = [
    (researchProgress / target) * 100,
    (teachesProgress / target) * 100,
    (studyProgress / target) * 100,
    (testProgress / target) * 100,
  ];

  // Sort the progress values with their indices
  const sortedProgress = progressValues
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value);

  // Assign colors based on sorted order
  const colors = Array(progressValues.length);
  sortedProgress.forEach((item, rank) => {
    colors[item.index] = CHART_COLOR_RANGE[rank];
  });

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
        name: "KPI Progress",
        data: progressValues.map((value, index) => ({
          y: value,
          color: colors[index],
        })),
      },
    ],
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
