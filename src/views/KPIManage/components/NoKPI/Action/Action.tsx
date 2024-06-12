import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Action() {
  return (
    <Box sx={{ pl: { md: "25%", xs: "4%" }, my: 4 }}>
      <Box
        sx={{
          borderRadius: "15px",
          backgroundColor: "#fed7da3d",
          height: "auto",
          py: 1,
          px: 1,
          width: { xs: "90%", md: "60%" },
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddIcon
          sx={{
            color: "black",
            fontSize: "30px",
            fontWeight: 600,
            opacity: "0.7",
            mr: 3,
          }}
        />
        <Box>
          <Typography sx={{ color: "black", fontWeight: 600, opacity: "0.7" }}>
            Create new KPI
          </Typography>
          <Typography sx={{ opacity: "0.6" }}>
            Start a new journey on challenging yourself!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          backgroundColor: "#fed7da3d",
          height: "auto",
          py: 1,
          px: 1,
          width: { xs: "90%", md: "60%" },
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddIcon
          sx={{
            color: "black",
            fontSize: "30px",
            fontWeight: 600,
            opacity: "0.7",
            mr: 3,
          }}
        />
        <Box>
          <Typography sx={{ color: "black", fontWeight: 600, opacity: "0.7" }}>
            Create new KPI
          </Typography>
          <Typography sx={{ opacity: "0.6" }}>
            Start a new journey on challenging yourself!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          backgroundColor: "#fed7da3d",
          height: "auto",
          py: 1,
          px: 1,
          width: { xs: "90%", md: "60%" },
          my: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddIcon
          sx={{
            color: "black",
            fontSize: "30px",
            fontWeight: 600,
            opacity: "0.7",
            mr: 3,
          }}
        />
        <Box>
          <Typography sx={{ color: "black", fontWeight: 600, opacity: "0.7" }}>
            Create new KPI
          </Typography>
          <Typography sx={{ opacity: "0.6" }}>
            Start a new journey on challenging yourself!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
