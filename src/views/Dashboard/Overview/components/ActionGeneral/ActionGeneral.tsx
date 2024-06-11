import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import ActionDetail from "./ActionDetail/ActionDetail";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";
import Star from "@mui/icons-material/Star";

export default function ActionGeneral() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(open);
  return (
    <React.Fragment>
      <Box sx={{ my: { xs: "30px", sm: "40px" } }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Box onClick={handleClickOpen}>
              <BoxCustom
                sx={{
                  cursor: "pointer",
                  ":hover": { backgroundColor: "#ebe6e6" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: 550 }}>KPIs left</Typography>
                  <Star sx={{ color: "#ffb933" }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontSize: "30px", fontWeight: 550 }}>
                    2
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <CallMissedOutgoingIcon sx={{ color: "#15b097" }} />
                    <Typography sx={{ color: "#15b097" }}>0.5%</Typography>
                  </Box>
                </Box>
              </BoxCustom>
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle
                id="alert-dialog-title"
                sx={{ fontWeight: 600, fontSize: "30px" }}
              >
                {"KPIs Left"}
              </DialogTitle>
              <DialogContent sx={{ width: { sm: "500px", xs: "300px" } }}>
                <ActionDetail />
              </DialogContent>
              <DialogActions>
                <Box onClick={handleClose} autoFocus>
                  <ButtonCustom>Close</ButtonCustom>
                </Box>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={6} md={3}>
            <BoxCustom>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: 550 }}>KPIs left</Typography>
                <Star sx={{ color: "#ffb933" }} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "30px", fontWeight: 550 }}>
                  2
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <CallMissedOutgoingIcon sx={{ color: "#15b097" }} />
                  <Typography sx={{ color: "#15b097" }}>0.5%</Typography>
                </Box>
              </Box>
            </BoxCustom>
          </Grid>
          <Grid item xs={6} md={3}>
            <BoxCustom>
              <Typography sx={{ fontWeight: 550 }}>KPIs left</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "30px", fontWeight: 550 }}>
                  2
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <CallMissedOutgoingIcon sx={{ color: "#15b097" }} />
                  <Typography sx={{ color: "#15b097" }}>0.5%</Typography>
                </Box>
              </Box>
            </BoxCustom>
          </Grid>
          <Grid item xs={6} md={3}>
            <BoxCustom>
              <Typography sx={{ fontWeight: 550 }}>KPIs left</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "30px", fontWeight: 550 }}>
                  2
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <CallMissedOutgoingIcon sx={{ color: "#15b097" }} />
                  <Typography sx={{ color: "#15b097" }}>0.5%</Typography>
                </Box>
              </Box>
            </BoxCustom>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
