import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import WorksImg from "../../../assets/HomeWorksSecimg.png";

const Works = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "50px",
        borderRadius: "20px",
        border: "1px solid #242424",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" }, // Center content on small screens
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            marginBottom: { xs: "10px", md: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              marginBottom: { xs: "50px", md: "200px" },
              fontFamily: '"Satoshi", sans-serif',
              fontWeight: 700,
            }}
          >
            How <span style={{ color: "#1E90FF" }}>BOCCA</span> Works
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E6E7E7",
              marginBottom: "50px",
              fontFamily: '"Satoshi", sans-serif',
              width: { xs: "100%", md: "70%" }, // Full width on small screens
            }}
          >
            BOCCA is a pioneering platform at the intersection of real estate
            and blockchain technology. It transforms the traditional real estate
            market by tokenizing physical assets into digital tokens, each
            representing a fractional property ownership.
          </Typography>
          <Box>
            <Link
              href="#"
              sx={{
                color: "#1E90FF",
                display: "block",
                marginBottom: "10px",
                fontFamily: '"Satoshi", sans-serif',
              }}
            >
              Fractional Ownership
            </Link>
            <Link
              href="#"
              sx={{
                color: "#1E90FF",
                display: "block",
                marginBottom: "10px",
                fontFamily: '"Satoshi", sans-serif',
              }}
            >
              Revenue Share
            </Link>
            <Link
              href="#"
              sx={{
                color: "#1E90FF",
                display: "block",
                marginBottom: "10px",
                fontFamily: '"Satoshi", sans-serif',
              }}
            >
              Governance
            </Link>
          </Box>
        </Box>

        {/* Right Section: Single Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={WorksImg}
            alt="How BOCCA Works"
            sx={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Works;
