import { Box, Typography } from "@mui/material";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import BookmarkAddedOutlinedIcon from "@mui/icons-material/BookmarkAddedOutlined";

export default function OverviewHead() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: { xs: "wrap", md: "nowrap" },
        gap: 3,
      }}
    >
      <BoxCustom
        sx={{
          border: "none",
          backgroundColor: "#ffdc99",
          width: { xs: "100%", md: "25%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Current Teams</Typography>
          <Groups2OutlinedIcon />
        </Box>
        <Typography sx={{ fontSize: " 30px", fontWeight: 600 }}>4</Typography>
      </BoxCustom>
      <BoxCustom
        sx={{
          border: "none",
          backgroundColor: "#15B097",
          width: { xs: "100%", md: "25%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>KPIs</Typography>
          <BookmarkAddedOutlinedIcon />
        </Box>
        <Typography sx={{ fontSize: " 30px", fontWeight: 600 }}>6</Typography>
      </BoxCustom>
      <BoxCustom
        sx={{
          border: "none",
          backgroundColor: "#fdafb5",
          width: { xs: "100%", md: "25%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>Tasks</Typography>
          <TaskAltOutlinedIcon />
        </Box>
        <Typography sx={{ fontSize: " 30px", fontWeight: 600 }}>50</Typography>
      </BoxCustom>
    </Box>
  );
}
