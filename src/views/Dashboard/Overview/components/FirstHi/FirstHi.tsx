import { Box, Button, Typography } from "@mui/material";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export default function FirstHi() {
  return (
    <BoxCustom>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{ fontSize: "20px", opacity: 0.8 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              Good Afternoon Mark <WbTwilightIcon sx={{ color: "#ffb933" }} />
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "30px", fontWeight: 530 }}>
            You are excellent today!
          </Typography>
          <ButtonCustom sx={{ width: "30%" }}>View Report</ButtonCustom>
        </Box>
      </Box>
    </BoxCustom>
  );
}
