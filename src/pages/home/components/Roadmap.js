import React from "react";
import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const RoadmapSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        color: "#FFFFFF",
        padding: "100px 0",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "50px",
            fontSize: { xs: "24px", sm: "48px" },
            fontFamily: '"Satoshi", sans-serif',
          }}
        >
          Our <span style={{ color: "#2E63F2" }}>Roadmap</span>
        </Typography>

        {/* Phase 1 */}
        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: "24px",
            padding: "30px",
            marginTop: "30px",
            position: "relative",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "16px",
              display: "inline-block",
              padding: "6px 16px",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px" },
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            A new beginning
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "28px" },
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            Q3 2024
          </Typography>

          {/* Adjust layout based on screen size */}
          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "flex-start" : "space-between",
              alignItems: isSmallScreen ? "flex-start" : "flex-end",
              flexDirection: isSmallScreen ? "column" : "row",
              marginTop: "16px",
            }}
          >
            {/* List of items */}
            <Box
              component="ul"
              sx={{
                marginLeft: "20px",
                lineHeight: "2",
                fontSize: { xs: "14px", sm: "16px" },
                fontFamily: '"Satoshi", sans-serif',
                listStyleType: "disc", // Bullet points
                flex: "1",
              }}
            >
              <Box component="li">Ideation of the project</Box>
              <Box component="li">Team Gathering</Box>
              <Box component="li">Documentation and Tokenomics</Box>
              <Box component="li">Website Development</Box>
              <Box component="li">Branding</Box>
            </Box>

            {/* Phase 1 */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "70px", sm: "90px" }, // Increased font size
                background: "linear-gradient(90deg, #2E63F2 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Satoshi", sans-serif',
                marginTop: isSmallScreen ? "20px" : "0",
                marginLeft: isSmallScreen ? "0" : "20px",
                textAlign: isSmallScreen ? "left" : "right",
              }}
            >
              Phase 1
            </Typography>
          </Box>
        </Box>

        {/* Phase 2 */}
        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: "24px",
            padding: "30px",
            marginTop: "30px",
            position: "relative",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "16px",
              display: "inline-block",
              padding: "6px 16px",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px" },
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            A new beginning
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "28px" },
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            Q4 2024
          </Typography>

          {/* Adjust layout based on screen size */}
          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "flex-start" : "space-between",
              alignItems: isSmallScreen ? "flex-start" : "flex-end",
              flexDirection: isSmallScreen ? "column" : "row",
              marginTop: "16px",
            }}
          >
            {/* List of items */}
            <Box
              component="ul"
              sx={{
                marginLeft: "20px",
                lineHeight: "2",
                fontSize: { xs: "14px", sm: "16px" },
                fontFamily: '"Satoshi", sans-serif',
                listStyleType: "disc", // Bullet points
                flex: "1",
              }}
            >
              <Box component="li">Ideation of the project</Box>
              <Box component="li">Team Gathering</Box>
              <Box component="li">Documentation and Tokenomics</Box>
              <Box component="li">Website Development</Box>
              <Box component="li">Branding</Box>
            </Box>

            {/* Phase 2 */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "70px", sm: "90px" }, // Increased font size
                background: "linear-gradient(90deg, #2E63F2 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Satoshi", sans-serif',
                marginTop: isSmallScreen ? "20px" : "0",
                marginLeft: isSmallScreen ? "0" : "20px",
                textAlign: isSmallScreen ? "left" : "right",
              }}
            >
              Phase 2
            </Typography>
          </Box>
        </Box>

        {/* Phase 3 */}
        <Box
          sx={{
            border: "1px solid gray",
            borderRadius: "24px",
            padding: "30px",
            marginTop: "30px",
            position: "relative",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "16px",
              display: "inline-block",
              padding: "6px 16px",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px" },
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            A new beginning
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "28px" },
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            Q1 2025
          </Typography>

          {/* Adjust layout based on screen size */}
          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "flex-start" : "space-between",
              alignItems: isSmallScreen ? "flex-start" : "flex-end",
              flexDirection: isSmallScreen ? "column" : "row",
              marginTop: "16px",
            }}
          >
            {/* List of items */}
            <Box
              component="ul"
              sx={{
                marginLeft: "20px",
                lineHeight: "2",
                fontSize: { xs: "14px", sm: "16px" },
                fontFamily: '"Satoshi", sans-serif',
                listStyleType: "disc", // Bullet points
                flex: "1",
              }}
            >
              <Box component="li">Ideation of the project</Box>
              <Box component="li">Team Gathering</Box>
              <Box component="li">Documentation and Tokenomics</Box>
              <Box component="li">Website Development</Box>
              <Box component="li">Branding</Box>
            </Box>

            {/* Phase 3 */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "70px", sm: "90px" }, // Increased font size
                background: "linear-gradient(90deg, #2E63F2 0%, #64B5F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"Satoshi", sans-serif',
                marginTop: isSmallScreen ? "20px" : "0",
                marginLeft: isSmallScreen ? "0" : "20px",
                textAlign: isSmallScreen ? "left" : "right",
              }}
            >
              Phase 3
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RoadmapSection;
