import { Box, Typography } from "@mui/material";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import HubIcon from "@mui/icons-material/Hub";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";

export default function Overview() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        my: "27px",
      }}
    >
      <BoxCustom sx={{ width: "27%", backgroundColor: "#a5beb9" }}>
        <Box sx={{ display: "flex", my: 1, alignItems: "center" }}>
          <HubIcon sx={{ mr: 2, color: "#448779" }} />
          <Typography
            sx={{ fontSize: "25px", fontWeight: 550, color: "white" }}
          >
            Connect Your Data
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            mb: 1,
          }}
        >
          <ButtonCustom sx={{ color: "white" }}>Search Connectors</ButtonCustom>
          <ButtonCustom sx={{ color: "white" }}>Upload data</ButtonCustom>
        </Box>
      </BoxCustom>
      <BoxCustom sx={{ width: "27%", backgroundColor: "#a5beb9" }}>
        <Box sx={{ display: "flex", my: 1, alignItems: "center" }}>
          <HubIcon sx={{ mr: 2, color: "#448779" }} />
          <Typography
            sx={{ fontSize: "25px", fontWeight: 550, color: "white" }}
          >
            Connect Your Data
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            mb: 1,
          }}
        >
          <ButtonCustom sx={{ color: "white" }}>Search Connectors</ButtonCustom>
          <ButtonCustom sx={{ color: "white" }}>Upload data</ButtonCustom>
        </Box>
      </BoxCustom>
      <BoxCustom sx={{ width: "27%", backgroundColor: "#a5beb9" }}>
        <Box sx={{ display: "flex", my: 1, alignItems: "center" }}>
          <HubIcon sx={{ mr: 2, color: "#448779" }} />
          <Typography
            sx={{ fontSize: "25px", fontWeight: 550, color: "white" }}
          >
            Connect Your Data
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            mb: 1,
          }}
        >
          <ButtonCustom sx={{ color: "white" }}>Search Connectors</ButtonCustom>
          <ButtonCustom sx={{ color: "white" }}>Upload data</ButtonCustom>
        </Box>
      </BoxCustom>
    </Box>
  );
}
