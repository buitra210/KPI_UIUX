import { Box } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import { CHART_COLOR_RANGE } from "src/constants";

export default function GaugeValueRangeNoSnap() {
  const value = 50;
  const fillColor = value < 50 ? CHART_COLOR_RANGE[0] : CHART_COLOR_RANGE[3];
  return (
    <Gauge
      value={value}
      startAngle={-110}
      endAngle={110}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 50,
          transform: "translate(0px, 0px)",
          color: CHART_COLOR_RANGE[0],
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: fillColor,
        },
      }}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
      width={300}
      height={300}
    />
  );
}
