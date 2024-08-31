import React from "react";
import { Box, Container, Typography } from "@mui/material";

const GoalSec = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 0", // Adjust overall padding with 0 on lg screens
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          alignItems: { xs: "center", md: "flex-start" }, // Align heading with the top of the content
          gap: { xs: "20px", md: "40px" },
          color: "white",
          paddingLeft: { xs: "16px", md: "0px" }, // Set padding-left to 0 on screens wider than 600px
          paddingRight: { xs: "16px", md: "0px" }, // Set padding-right to 0 on screens wider than 600px
        }}
      >
        <Box
          sx={{
            flex: 1,
            alignSelf: "flex-start", // Align the heading box to the top of the content
          }}
        >
          <Typography
            gutterBottom
            variant="h1"
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              fontWeight: "bold",
              fontFamily: '"Satoshi", sans-serif',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "#2F7AFF" }}>Our goal</span> is to become the
            leading platform for
            <span style={{ color: "#2F7AFF" }}> real estate tokenization</span>
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 2,
            maxWidth: { xs: "100%", md: "50%" },
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
            We envision a future where real estate is not only more accessible
            but also more transparent and efficient. Through our platform, we
            aspire to build a world where property investment is inclusive,
            empowering individuals and communities to participate in wealth
            creation.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Satoshi", sans-serif',
              marginTop: "16px", // Adds a gap between content blocks
              opacity: 0.8,
            }}
          >
            Our ultimate goal is to lead the way in the digital transformation
            of the real estate industry, creating an ecosystem where value is
            shared, opportunities are abundant, and the boundaries of
            traditional investing are expanded.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: '"Satoshi", sans-serif',
              color: "#2F7AFF", // Blue color for the theme
              marginTop: "24px", // Adds a gap between the current content and the new content
            }}
          >
            With BOCCA, the future of real estate is decentralized, inclusive,
            and within reach for all.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default GoalSec;
