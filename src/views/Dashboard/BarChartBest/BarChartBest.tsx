import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import { CHART_COLOR_RANGE } from "src/constants";
import BoxCustom from "src/components/BoxCustom/BoxCustom";

export default function BarChartBest() {
  const now = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;

  const research = Array.from(Array(7).keys()).map((value, index) => {
    return [now + index * oneDay, Math.floor(Math.random() * 100)];
  });
  const teaches = Array.from(Array(7).keys()).map((value, index) => {
    return [now + index * oneDay, Math.floor(Math.random() * 100)];
  });
  const study = Array.from(Array(7).keys()).map((value, index) => {
    return [now + index * oneDay, Math.floor(Math.random() * 100)];
  });

  const categories = research.map((item) => {
    const date = new Date(item[0]);
    const day = date.toLocaleString("en-US", { weekday: "short" });
    return day;
  });

  const options = {
    chart: {
      type: "column",
      alignThresholds: true,
      scrollablePlotArea: {
        minWidth: 450, // Set this to the desired minimum width for scrolling
        scrollPositionX: 1,
        // This ensures the scrollbar is at the start when first rendered
      },
    },
    title: {
      text: "Progress of the Week",
    },
    xAxis: {
      categories: categories,
      // crosshair: { width: 2 },
      title: {
        text: null,
      },
      labels: {
        rotation: -45,
        align: "right",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Progress",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: "%",
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        pointWidth: 15,
        groupPadding: 0.2,
        pointPadding: 0.01,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Research",
        data: research.map((item) => item[1]),
        color: CHART_COLOR_RANGE[0],
      },
      {
        name: "Teaches",
        data: teaches.map((item) => item[1]),
        color: CHART_COLOR_RANGE[1],
      },
      {
        name: "Study",
        data: study.map((item) => item[1]),
        color: CHART_COLOR_RANGE[2],
      },
    ],
  };

  return (
    <BoxCustom>
      <Box sx={{ width: "100%" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </BoxCustom>
  );
}
