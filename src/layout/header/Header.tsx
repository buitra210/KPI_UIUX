import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
  radioClasses,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import DatasetIcon from "@mui/icons-material/Dataset";
import FlagIcon from "@mui/icons-material/Flag";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const pagesWithIcons = [
  { page: "Home", icon: <HomeIcon /> },
  { page: "Dashboard", icon: <DashboardIcon /> },
  { page: "Message", icon: <MessageIcon /> },
  { page: "Data", icon: <DatasetIcon /> },
  { page: "Goals", icon: <FlagIcon /> },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        alignItems: "center",
        background: "#555555",
        pt: 0,
        px: 2,
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", mr: "150px" }}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pagesWithIcons.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {page.icon}
                  <Typography textAlign="center">{page.page}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <HomeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pagesWithIcons.map((page, index) => (
            <MenuItem key={index} onClick={handleCloseNavMenu}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                  opacity: 0.7,
                  "&:hover": { opacity: 1 },
                }}
              >
                {" "}
                <Box sx={{ width: "16px", height: "16px", mb: "10px" }}>
                  {page.icon}
                </Box>
                <Typography textAlign="center" sx={{ fontSize: "15px" }}>
                  {page.page}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Box>

        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              width: 400,
              height: "35px",
              borderRadius: "20px",
              marginRight: "60px",
              marginLeft: "150px",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>
          <NotificationsIcon
            sx={{ marginRight: "50px", color: "white", cursor: "pointer" }}
          />
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}
