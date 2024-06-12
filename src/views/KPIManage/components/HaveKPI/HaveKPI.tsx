import { Box, Tooltip, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function HaveKPI() {
  return (
    <Box>
      <Tooltip title="Mastering Bitcoin" placement="top">
        <Box
          sx={{
            borderRadius: "10px",
            backgroundColor: "#b5b8b821",
            height: { md: "45px ", xs: "auto" },
            py: 1,
            px: 1,
            // width: { xs: "90%", md: "60%" },
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FiberManualRecordIcon
            sx={{ fontSize: 12, color: "#0b7b69", mr: 2 }}
          />
          <Typography
            sx={{ color: "#black  ", fontWeight: 600, opacity: "0.7" }}
          >
            Done
          </Typography>
        </Box>
      </Tooltip>
      <Tooltip title="Mastering Bitcoin" placement="top">
        <Box
          sx={{
            borderRadius: "10px",
            backgroundColor: "#b5b8b821",
            height: { md: "45px ", xs: "auto" },
            py: 1,
            px: 1,
            // width: { xs: "90%", md: "60%" },
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <FiberManualRecordIcon
            sx={{ fontSize: 12, color: "#0b7b69", mr: 2 }}
          />
          <Typography
            sx={{ color: "#black  ", fontWeight: 600, opacity: "0.7" }}
          >
            Done
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
          On Going
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
          On Going
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
          On Going
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
          Upcoming
        </Typography>
      </Box>
    </Box>
  );
}
