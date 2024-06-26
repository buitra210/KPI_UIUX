import { Box } from "@mui/material";
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
import { CHART_COLOR_RANGE } from "src/constants";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import { title } from "process";

export default function LineChartKPI() {
  const now = Date.now();
  const allKPI = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 7,
      Math.floor(Math.random() * 100),
    ];
  });
  const teaches = Array.from(Array(20).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 7,
      Math.floor(Math.random() * 100),
    ];
  });
  // const study = Array.from(Array(20).keys()).map((value, index) => {
  //   return [
  //     now + index * 1000 * 60 * 60 * 24 * 7,
  //     Math.floor(Math.random() * 100),
  //   ];
  // });
  const options = {
    chart: {
      type: "spline",
      height: 400,
      alignThresholds: true,
      scrollablePlotArea: {
        minWidth: 450,
      },
    },
    title: { text: "KPIs of the week" },
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
          radius: 3,
        },
        lineWidth: 0.5,
      },
    },
    tooltip: {
      shared: true,
      tooltip: {
        valueSuffix: "%",
      },
    },

    yAxis: {
      gridLineWidth: 0,
    },
    series: [
      {
        name: "All KPIs",
        data: allKPI,
        color: CHART_COLOR_RANGE[0],
      },
      // {
      //   name: "Teaches",
      //   data: teaches,
      //   color: CHART_COLOR_RANGE[1],
      // },
      // { name: "Study", data: study, color: CHART_COLOR_RANGE[2] },
    ],
  };
  return (
    <Box sx={{ width: "100%" }}>
      <BoxCustom>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </BoxCustom>
    </Box>
  );
}
