import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import React from "react";

export default function BarChartBest() {
  const now = Date.now();
  const research = Array.from(Array(5).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const teaches = Array.from(Array(5).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });
  const study = Array.from(Array(5).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 30,
      Math.floor(Math.random() * 100),
    ];
  });

  const categories = research.map((item) => {
    const date = new Date(item[0]);
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  });

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Best Progress of the Month",
    },
    xAxis: {
      categories: categories,
      title: {
        text: null,
      },
      labels: {
        rotation: -55,
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
      valueSuffix: " units",
    },
    plotOptions: {
      bar: {
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
      },
      {
        name: "Teaches",
        data: teaches.map((item) => item[1]),
      },
      {
        name: "Study",
        data: study.map((item) => item[1]),
      },
    ],
  };

  return (
    <Box sx={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
