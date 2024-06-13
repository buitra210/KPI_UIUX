import { Box } from "@mui/material";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
import { CHART_COLOR_RANGE } from "src/constants";

export default function LineChartTask() {
  const now = Date.now();
  const hour = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const scoring = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const studentReview = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const formCheck = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const options = {
    chart: {
      height: 400,
      alignThresholds: true,
      scrollablePlotArea: {
        minWidth: 450,
      },
    },
    xAxis: {
      type: "datetime",
      crosshair: { width: 2 },
    },
    legend: {
      enabled: true,
      symbolRadius: 2,
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
          radius: 2,
        },
        lineWidth: 1,
      },
    },
    tooltip: { shared: true },

    yAxis: {
      gridLineWidth: 1,
    },
    series: [
      {
        name: "hour",
        data: hour,
        color: CHART_COLOR_RANGE[0],
      },
      {
        name: "scoring",
        data: scoring,
        color: CHART_COLOR_RANGE[1],
      },
      {
        name: "student review",
        data: studentReview,
        color: CHART_COLOR_RANGE[2],
      },
      {
        name: "form check",
        data: formCheck,
        color: CHART_COLOR_RANGE[2],
      },
    ],
  };
  return (
    <Box sx={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
