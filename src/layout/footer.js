import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as DiscordIcon } from "../assets/discord.svg";
import { ReactComponent as XtwitterIcon } from "../assets/x.svg";
import { ReactComponent as MailIcon } from "../assets/mail.svg";
import Logo from "../assets/bocca-logo.png";

function Footer() {
  const typographyStyles = {
    fontSize: "14px",
    color: "white",
    fontFamily: "Satoshi, sans-serif",
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "50px auto 0",
        backgroundColor: "#090A0C",
        padding: "30px 0",
        borderTop: "1px solid #96D0FF",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack items on smaller screens
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: { xs: 2, md: 0 }, // Add bottom margin on small screens
          flex: "1 1 auto",
          justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens
        }}
      >
        <img
          src={Logo}
          alt="BOCCA Logo"
          style={{
            width: "120px",
            height: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack links and icons vertically on small screens
          alignItems: { xs: "center", sm: "center" },
          gap: 2,
          textAlign: { xs: "center", sm: "left" }, // Center text on small screens
          marginTop: { xs: "10px" },
        }}
      >
        <Typography sx={typographyStyles}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Whitepaper
          </a>
        </Typography>
        <Typography sx={typographyStyles}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Terms & Policies
          </a>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: { xs: "center", sm: "flex-start" }, // Center icons on small screens
            mt: { xs: 2, sm: 0 }, // Add top margin on small screens
          }}
        >
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
      </Box>
    </Box>
  );
}

export default Footer;
