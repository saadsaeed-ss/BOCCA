import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";
import { ReactComponent as XtwitterIcon } from "../assets/x.svg";
import { ReactComponent as CloseIcon } from "../assets/x.svg";
import { ReactComponent as MailIcon } from "../assets/mail.svg";
import Logo from "../assets/bocca-logo.png";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const typographyStyles = {
    fontSize: "14px",
    color: "white",
    fontFamily: "Satoshi, sans-serif",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1200, // Ensures the Navbar is above other content
        marginTop: "30px",
      }}
    >
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto", // Center the AppBar horizontally
          bgcolor: "#090A0C",
          border: "1px solid #96D0FF",
          borderRadius: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <a href="/">
              <img
                src={Logo}
                alt="BOCCA Logo"
                style={{
                  width: "120px",
                  height: "auto",
                  cursor: "pointer",
                }}
              />
            </a>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            <MenuItem href="#home" sx={{ py: "6px", px: "12px" }}>
              <Typography sx={typographyStyles}>HOME</Typography>
            </MenuItem>
            <MenuItem href="#about-us" sx={{ py: "6px", px: "12px" }}>
              <Typography sx={typographyStyles}>ABOUT US</Typography>
            </MenuItem>
            <MenuItem href="#token" sx={{ py: "6px", px: "12px" }}>
              <Typography sx={typographyStyles}>TOKEN</Typography>
            </MenuItem>
            <MenuItem href="#roadmap" sx={{ py: "6px", px: "12px" }}>
              <Typography sx={typographyStyles}>ROADMAP</Typography>
            </MenuItem>
            <MenuItem href="#contact-us" sx={{ py: "6px", px: "12px" }}>
              <Typography sx={typographyStyles}>CONTACT US</Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <IconButton sx={{ color: "white" }}>
              <DiscordIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <XtwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <MailIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ fontSize: 30, color: "white" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0F1114",
            color: "white",
            width: "250px",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            py: 1.5,
          }}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              fontSize: 32,
              color: "#FDC500",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", px: 2 }}>
          <MenuItem href="#home" onClick={toggleDrawer(false)}>
            <Typography sx={typographyStyles}>HOME</Typography>
          </MenuItem>
          <MenuItem href="#about-us" onClick={toggleDrawer(false)}>
            <Typography sx={typographyStyles}>ABOUT US</Typography>
          </MenuItem>
          <MenuItem href="#token" onClick={toggleDrawer(false)}>
            <Typography sx={typographyStyles}>TOKEN</Typography>
          </MenuItem>
          <MenuItem href="#roadmap" onClick={toggleDrawer(false)}>
            <Typography sx={typographyStyles}>ROADMAP</Typography>
          </MenuItem>
          <MenuItem href="#contact-us" onClick={toggleDrawer(false)}>
            <Typography sx={typographyStyles}>CONTACT US</Typography>
          </MenuItem>
        </Box>
      </Drawer>
    </Box>
  );
}

Navbar.propTypes = {
  sections: PropTypes.array,
  onClick: PropTypes.func,
};

export default Navbar;
