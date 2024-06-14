import { Box, Tooltip, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function HaveKPI() {
  return (
    <Box>
      <Tooltip title="On Going" placement="top">
        <Box
          sx={{
            borderRadius: "10px",
            backgroundColor: "#b5b8b821",
            height: { md: "40px ", xs: "auto" },
            py: 1,
            px: 1,
            // width: { xs: "90%", md: "60%" },
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FiberManualRecordIcon
            sx={{ fontSize: 12, color: "#ffb933", mr: 2 }}
          />
          <Typography
            sx={{ color: "#black  ", fontWeight: 600, opacity: "0.7" }}
          >
            Mastering Bitcoin
          </Typography>
        </Box>
      </Tooltip>
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#b5b8b821",
          height: { md: "40px ", xs: "auto" },
          py: 1,
          px: 1,
          // width: { xs: "90%", md: "60%" },
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FiberManualRecordIcon sx={{ fontSize: 12, color: "#ffb933", mr: 2 }} />
        <Typography sx={{ color: "#black  ", fontWeight: 600, opacity: "0.7" }}>
          Develop 2 New Course Materials
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#b5b8b821",
          height: { md: "40px ", xs: "auto" },
          py: 1,
          px: 1,
          // width: { xs: "90%", md: "60%" },
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FiberManualRecordIcon sx={{ fontSize: 12, color: "#ffb933", mr: 2 }} />
        <Typography sx={{ color: "#black  ", fontWeight: 600, opacity: "0.7" }}>
          Receive Positive Feedback from 90% of Students
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#b5b8b821",
          height: { md: "40px ", xs: "auto" },
          py: 1,
          px: 1,
          // width: { xs: "90%", md: "60%" },
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FiberManualRecordIcon sx={{ fontSize: 12, color: "#c60413", mr: 2 }} />
        <Typography sx={{ color: "#black  ", fontWeight: 600, opacity: "0.7" }}>
          Publish 2 papers at Q1 Conference
        </Typography>
      </Box>
    </Box>
  );
}
