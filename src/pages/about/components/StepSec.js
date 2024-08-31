import React from "react";
import { Box, Container, Typography } from "@mui/material";
import StepSecImage from "../../../assets/StepSec.png"; // Assuming the image is located here

const StepSec = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0",
        flexDirection: "column",
      }}
    >
      {/* Centered Heading */}
      <Typography
        variant="h1"
        sx={{
          fontSize: "48px",
          fontWeight: "bold",
          fontFamily: '"Satoshi", sans-serif',
          color: "white",
          textAlign: "center",
          marginBottom: "70px", // Space below heading
          lineHeight: 1,
        }}
      >
        This is but just <br />
        <span style={{ color: "#2F7AFF" }}>a One Little Step</span>
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: "20px", md: "100px" },
          color: "white",
        }}
      >
        {/* Image on the Left Side */}
        <Box
          component="img"
          src={StepSecImage}
          alt="Step Section"
          sx={{
            width: { xs: "50%", md: "40%" }, // Adjust the width to reduce the image size
            height: "auto",
          }}
        />

        {/* Content on the Right Side */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            padding: { xs: "0 20px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontSize: "16px",
              fontFamily: '"Satoshi", sans-serif',
              opacity: 0.8,
            }}
          >
            BOCCA is just the beginning of our journey to revolutionize the real
            estate industry. We envision a future where a vast array of assets,
            from commercial properties to luxury residences, can be seamlessly
            tokenized and traded on our platform.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Satoshi", sans-serif',
              marginTop: "16px", // Adds a gap between content blocks
              opacity: 0.8,
            }}
          >
            Our goal is to create a dynamic ecosystem that connects property
            owners with global investors, unlocking new opportunities and
            driving economic growth. By expanding our tokenized asset offerings,
            we aim to become the leading platform for fractional ownership and
            investment.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Satoshi", sans-serif',
              marginTop: "16px", // Adds a gap between content blocks
              opacity: 0.8,
            }}
          >
            We aim to become a launchpad, setting the stage for a series of
            innovative projects that will continue to push the boundaries of
            what's possible in the world of tokenized assets. By successfully
            tokenizing our first luxury hotel, we are not only showcasing the
            potential of digital fractional ownership but also laying the
            foundation for a much larger ecosystem.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default StepSec;
