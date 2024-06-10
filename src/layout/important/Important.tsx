import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function Important() {
  return (
    <Box
      sx={{
        width: { sm: "15%" },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 320, boxSizing: "border-box" },
        backgroundColor: "white",
        borderLeft: "1.5px solid #e0e0e0",
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
        display: { xs: "none", sm: "none", md: "block" },
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <StarIcon sx={{ fontSize: 25, color: "#FFB933", px: 1 }} />
        <Typography variant="h6" noWrap component="div">
          Starred KPIs
        </Typography>
      </Box>
      <Box>
        <Box>
          <List>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="KPI 1" />
                </Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ pl: 5.3 }}
                >
                  Fri, 14:00-17:50
                </Typography>
              </Box>
            </ListItem>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="KPI 2" />
                </Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ pl: 5.3 }}
                >
                  Fri, 14:00-17:50
                </Typography>
              </Box>
            </ListItem>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="KPI 3" />
                </Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ pl: 5.3 }}
                >
                  Fri, 14:00-17:50
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Divider
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          margin: "auto",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <AccessAlarmOutlinedIcon
          sx={{ fontSize: 25, color: "#dc0516", px: 1 }}
        />
        <Typography variant="h6" noWrap component="div">
          Upcoming Tasks
        </Typography>
      </Box>
      <Box>
        <Box>
          <List>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText
                    sx={{ pb: 0 }}
                    primary="Delete a page in projectX"
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ pl: 5.3 }}
                >
                  Just Now
                </Typography>
              </Box>
            </ListItem>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="Teach class IT1234" />
                </Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ pl: 5.3 }}
                >
                  30 minutes ago
                </Typography>
              </Box>
            </ListItem>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <OfflinePinOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="Gym" />
                </Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ pl: 5.3 }}
                >
                  12 hours ago
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          margin: "auto",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <ContactPhoneOutlinedIcon
          sx={{ fontSize: 25, color: "#0B7B69", px: 1 }}
        />
        <Typography variant="h6" noWrap component="div">
          Contact
        </Typography>
      </Box>
      <Box>
        <Box>
          <List>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="Le Quang Chien" />
                  <FiberManualRecordIcon
                    sx={{ fontSize: 12, color: "#0B7B69" }}
                  />
                </Box>
              </Box>
            </ListItem>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="Mac Van An" />
                  <FiberManualRecordIcon
                    sx={{ fontSize: 12, color: "#0B7B69" }}
                  />
                </Box>
              </Box>
            </ListItem>
            <ListItem button sx={{ my: "1px" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
                  <ListItemText sx={{ pb: 0 }} primary="Nguyen Cao Ky" />
                  <FiberManualRecordIcon
                    sx={{ fontSize: 12, color: "#dc0516" }}
                  />
                </Box>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* <List>
        {["Task 1", "Task 2", "Task 3"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
}
