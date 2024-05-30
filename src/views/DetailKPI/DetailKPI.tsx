import React from "react";
import Overview from "./Overview/Overview";
import DetailLineKPI from "./DetailLineKPI/DetailLineKPI";
import DetailColumnKPI from "./DetailColumnKPI/DetailColumnKPI";
import DetailDonutKPI from "./DetailDonutKPI/DetailDonutKPI";
import { Grid } from "@mui/material";

export default function DetailKPI() {
  return (
    <>
      <Overview />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <DetailLineKPI />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <DetailColumnKPI />
            </Grid>
            <Grid item xs={12} md={6}>
              <DetailDonutKPI />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
