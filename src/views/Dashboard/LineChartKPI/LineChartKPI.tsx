import { Box } from "@mui/material";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
import { CHART_COLOR_RANGE } from "src/constants";

export default function LineChartKPI() {
  const now = Date.now();
  const research = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const teaches = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const study = Array.from(Array(20).keys()).map((value, index) => {
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
      gridLineWidth: 0,
    },
    series: [
      {
        name: "Research",
        data: research,
        color: CHART_COLOR_RANGE[0],
      },
      {
        name: "Teaches",
        data: teaches,
        color: CHART_COLOR_RANGE[1],
      },
      { name: "Study", data: study, color: CHART_COLOR_RANGE[2] },
    ],
  };
  return (
    <Box sx={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
