import { Box, Typography } from "@mui/material";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import ListIcon from "@mui/icons-material/List";
import { title } from "process";

export default function GetStart() {
  const startToIcon = [
    { title: "Watch Overview", icon: <YouTubeIcon /> },
    { title: "Get Live Help", icon: <QuickreplyIcon /> },
    { title: "Get started guide", icon: <ListIcon /> },
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: "27px" }}>
      <BoxCustom>
        <Box sx={{ padding: "20px 20px " }}>
          <Typography>Getting Started</Typography>
          <Typography>
            {" "}
            Let us show you around KEIKAKU to get started –Watch a 4 min
            overview now{" "}
          </Typography>
          <Box>
            {startToIcon.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: "20px",
                  "& svg": { fontSize: "20px" },
                }}
              >
                {item.icon}
                <Typography sx={{ px: "10px" }}>{item.title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </BoxCustom>
      <BoxCustom>abc</BoxCustom>
    </Box>
  );
}
