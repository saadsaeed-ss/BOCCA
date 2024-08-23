import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BackgroundImage from "../../../assets/visionBG.png";

const Vision = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: "100px 50px 100px", md: "100px 50px 500px" },
        borderRadius: "20px",
        border: "1px solid #80ED99",
        marginBottom: "50px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            marginBottom: "20px",
            fontFamily: '"Satoshi", sans-serif',
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          <span style={{ color: "#2E63F2" }}>Our Vision</span> for the Future
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#E6E7E7",
            marginBottom: "50px",
            fontFamily: '"Satoshi", sans-serif',
            width: { xs: "100%", md: "70%" },
            textAlign: "center",
            padding: { xs: "0", md: "20px" },
            borderRadius: "10px",
          }}
        >
          Our long-term vision is to build a decentralized marketplace where a
          diverse range of real-world assets can be tokenized, traded, and
          managed seamlessly on our platform. We aim to democratize RWA
          investments and unlock new opportunities for both asset owners and
          investors.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <Box sx={{ flex: "1 1 30%", marginBottom: "30px" }}>
          <Typography
            variant="h2"
            sx={{
              background: "linear-gradient(90deg, #2E63F2 0%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Satoshi", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            $23tn
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E6E7E7",
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            Total Addressable Market
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 30%", marginBottom: "30px" }}>
          <Typography
            variant="h2"
            sx={{
              background: "linear-gradient(90deg, #2E63F2 0%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Satoshi", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            15
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E6E7E7",
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            Unique Industries to Target
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 30%", marginBottom: "30px" }}>
          <Typography
            variant="h2"
            sx={{
              background: "linear-gradient(90deg, #2E63F2 0%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Satoshi", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            25mn
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E6E7E7",
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            Users can be addressed
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Vision;
