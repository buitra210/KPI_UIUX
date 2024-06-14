import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddKPI from "src/views/KPIManage/AddKPI/AddKPI";

export default function Action() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          cursor: "pointer",
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
          <Typography
            sx={{ color: "black", fontWeight: 600, opacity: "0.7" }}
            onClick={handleClickOpen}
          >
            Create new KPI
          </Typography>
          <Dialog
            // fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle
              id="responsive-dialog-title"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Create a KPI now!
            </DialogTitle>
            <DialogContent>
              <AddKPI />
            </DialogContent>
          </Dialog>
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
