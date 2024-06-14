import { Box, Divider, Typography } from "@mui/material";
import FaceSharpIcon from "@mui/icons-material/FaceSharp";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: { sm: "15%" },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 320, boxSizing: "border-box" },
        backgroundColor: "white",
        borderRight: "1.5px solid #e0e0e0",
        position: "fixed",
        left: 0,
        top: 0, // Height of the AppBar
        bottom: 0,
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      {/* Right sidebar content */}
      <Box sx={{ display: "flex", gap: 1, padding: "20px" }}>
        <FaceSharpIcon sx={{ fontSize: 25 }} />
        <Typography
          //   variant="h6"
          noWrap
          component="div"
          sx={{ fontSize: "20px" }}
        >
          Mark Tuan
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ my: 2 }}>
        <Typography sx={{ color: "#B5B8B8", fontSize: "15px", ml: 2 }}>
          Dasboard
        </Typography>
        <Box
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fd7d88",
            display: "flex",
            gap: 1,
            padding: "8px",
            width: "70%",
            alignItems: "center",
            ml: 3,
            my: 1,
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosSharpIcon sx={{ fontSize: 13, color: "#B5B8B8" }} />
          <AutoAwesomeMosaicIcon sx={{ fontSize: 20 }} />
          <Typography>Overview</Typography>
        </Box>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography sx={{ color: "#B5B8B8", fontSize: "15px", ml: 2 }}>
          Manage
        </Typography>
        <Box
          sx={{
            // borderRadius: "12px",
            // backgroundColor: "#fd7d88",
            display: "flex",
            gap: 1,
            padding: "8px",
            width: "70%",
            alignItems: "center",
            ml: 3,
            my: 1,
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosSharpIcon sx={{ fontSize: 13, color: "#B5B8B8" }} />
          <BookmarkAddedSharpIcon sx={{ fontSize: 20 }} />
          <Typography>KPIs</Typography>
        </Box>
        <Box
          sx={{
            // borderRadius: "12px",
            // backgroundColor: "#fd7d88",
            display: "flex",
            gap: 1,
            padding: "8px",
            width: "70%",
            alignItems: "center",
            ml: 3,
            my: 1,
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosSharpIcon sx={{ fontSize: 13, color: "#B5B8B8" }} />
          <AutoAwesomeMosaicIcon sx={{ fontSize: 20 }} />
          <Typography>Overview</Typography>
        </Box>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography sx={{ color: "#B5B8B8", fontSize: "15px", ml: 2 }}>
          Settings
        </Typography>
        <Box
          sx={{
            // borderRadius: "12px",
            // backgroundColor: "#fd7d88",
            display: "flex",
            gap: 1,
            padding: "8px",
            width: "70%",
            alignItems: "center",
            ml: 3,
            my: 1,
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosSharpIcon sx={{ fontSize: 13, color: "#B5B8B8" }} />
          <AutoAwesomeMosaicIcon sx={{ fontSize: 20 }} />
          <Typography>User profile</Typography>
        </Box>
        <Box
          sx={{
            // borderRadius: "12px",
            // backgroundColor: "#fd7d88",
            display: "flex",
            gap: 1,
            padding: "8px",
            width: "70%",
            alignItems: "center",
            ml: 3,
            my: 1,
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosSharpIcon sx={{ fontSize: 13, color: "#B5B8B8" }} />
          <AutoAwesomeMosaicIcon sx={{ fontSize: 20 }} />
          <Typography>Account</Typography>
        </Box>
      </Box>
      {/* <Box sx={{ paddingBottom: "0px" }}>
        <Typography>KEIKAKU</Typography>
      </Box> */}
    </Box>
  );
}
