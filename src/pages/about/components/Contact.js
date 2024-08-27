import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import whitepaper from "../../../assets/whitepaper.svg";
import mail from "../../../assets/mailf.svg";
import arrow from "../../../assets/arrow.svg";

const Contactinfo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { sm: "8px", md: "16px" },
        color: "white",
        px: { xs: "16px", sm: "16px", md: "0" }, // Adjust padding for responsiveness
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          py: { xs: "12px", sm: "12px", md: "20px" },
          px: { xs: "16px", sm: "20px", md: "40px" },
          border: "1px solid #2F7AFF",
          borderRadius: { xs: "8px", sm: "8px", md: "16px" },
          bgcolor: "#040405",
          alignItems: { xs: "center", md: "flex-start" }, // Center text on small screens
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap={{ xs: "12px", sm: "12px", md: "16px" }} // Adjust spacing
          alignItems="center" // Center text vertically in the row
        >
          <img
            src={whitepaper}
            alt="Whitepaper Icon"
            style={{
              width: { xs: "20px", sm: "24px", md: "48px" }, // Adjust icon size
              height: "auto",
              marginRight: { xs: "8px", sm: "12px", md: "16px" }, // Space between icon and text
            }}
          />
          <Typography
            fontSize={{ xs: "18px", md: "32px" }}
            fontFamily="Satoshi, sans-serif"
            fontWeight={500}
          >
            Read Our Whitepaper
          </Typography>
        </Box>
        <IconButton
          sx={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0, // Avoid extra height affecting layout
          }}
          onClick={() => (window.location.href = "#")} // Add your link here
        >
          <img
            src={arrow}
            alt="Arrow Icon"
            style={{
              width: { xs: "10px", sm: "20px", md: "24px" },
              height: "auto",
            }} // Adjust arrow icon size
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          py: { xs: "12px", sm: "12px", md: "20px" },
          px: { xs: "16px", sm: "20px", md: "40px" },
          border: "1px solid #2F7AFF",
          borderRadius: { xs: "8px", sm: "8px", md: "16px" },
          bgcolor: "#040405",
          alignItems: { xs: "center", md: "flex-start" }, // Center text on small screens
          marginTop: { xs: "10px" },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap={{ xs: "12px", sm: "12px", md: "16px" }} // Adjust spacing
          alignItems="center" // Center text vertically in the row
        >
          <img
            src={mail}
            alt="Mail Icon"
            style={{
              width: { xs: "20px", sm: "24px", md: "48px" }, // Adjust icon size
              height: "auto",
              marginRight: { xs: "8px", sm: "12px", md: "16px" }, // Space between icon and text
            }}
          />
          <Typography
            fontSize={{ xs: "18px", md: "32px" }}
            fontFamily="Satoshi, sans-serif"
            fontWeight={500}
          >
            Contact us
          </Typography>
        </Box>
        <IconButton
          sx={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 0, // Avoid extra height affecting layout
          }}
          onClick={() => (window.location.href = "#")} // Add your link here
        >
          <img
            src={arrow}
            alt="Arrow Icon"
            style={{
              width: { xs: "10px", sm: "20px", md: "24px" },
              height: "auto",
            }} // Adjust arrow icon size
          />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Contactinfo;
