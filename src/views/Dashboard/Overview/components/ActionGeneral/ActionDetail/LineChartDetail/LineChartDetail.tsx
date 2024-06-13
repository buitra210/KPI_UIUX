import { Box } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from "highcharts";
import { CHART_COLOR_RANGE } from "src/constants";
import BoxCustom from "src/components/BoxCustom/BoxCustom";

export default function LineChartDetail() {
  const now = Date.now();
  const KPI = Array.from(Array(10).keys()).map((value, index) => {
    return [
      now + index * 1000 * 60 * 60 * 24 * 7,
      Math.floor(Math.random() * 20),
    ];
  });

  const options = {
    chart: {
      type: "spline",
      height: 300,
      alignThresholds: true,
      scrollablePlotArea: {
        minWidth: 450,
      },
    },
    title: { text: "KPI" },
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
        valueSuffix: "KPI",
      },
    },

    yAxis: {
      gridLineWidth: 0,
    },
    series: [
      {
        name: "KPI",
        data: KPI,
        color: CHART_COLOR_RANGE[1],
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
