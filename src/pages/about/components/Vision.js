import React from "react";
import { Box, Typography } from "@mui/material";
import VisionariesImg from "../../../assets/visionaries.svg";

const VisionariesSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${VisionariesImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "800px", // Adjust height according to your design needs
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "500px",
          color: "#fff",
          zIndex: 1, // Ensures the text stays on top of the background
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Satoshi", sans-serif',
            fontWeight: 700,
            marginBottom: "20px",
            fontSize: "48px",
          }}
        >
          Build by <span style={{ color: "#2F7AFF" }}>Visionaries</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: '"Satoshi", sans-serif',
            color: "#ccc",
          }}
        >
          The BOCCA team is comprised of experienced professionals with a
          passion for innovation and real estate. Our diverse skill set enables
          us to deliver a cutting-edge platform that redefines the investment
          landscape.
        </Typography>
      </Box>
    </Box>
  );
};

export default VisionariesSection;
