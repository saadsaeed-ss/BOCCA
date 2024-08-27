import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "../../../assets/aboutHeaderBgImg.png";
import PropertyCard from "../../../assets/Propertycard.svg";
import PropertyCard2 from "../../../assets/Propertycard2.svg";
import PropertyCard3 from "../../../assets/Propertycard3.svg";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative", // Ensure positioning context for absolute positioning inside
        padding: { xs: "120px 0 100px 0", md: "200px 0 400px 0" }, // Adjust padding for different screen sizes
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          maxWidth: "1200px",
          padding: { lg: 0 }, // Set padding to 0 on large screens only
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            color: "white", // Ensures text is visible against the background
          }}
        >
          <Box
            flex={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: "center",
              mb: { xs: 4, md: 0 },
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "8px", md: "16px" },
                alignItems: { xs: "center", md: "center" },
              }}
            >
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  fontSize: { xs: "48px", md: "96px" }, // Adjust font size for responsiveness
                  fontWeight: "bold",
                  fontFamily: '"Satoshi", sans-serif',
                  lineHeight: 1,
                }}
              >
                We are <span style={{ color: "#2F7AFF" }}>revolutionizing</span>
                <br />
                the way people{" "}
                <span style={{ color: "#2F7AFF" }}>invest in real estate</span>
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { xs: "14px", md: "16px" }, // Adjust font size for responsiveness
                  fontFamily: '"Satoshi", sans-serif',
                  maxWidth: { xs: "100%", md: "70%" },
                  color: "#E6E7E7",
                }}
              >
                BOCCA democratizes real estate investment by allowing you to own
                a fraction of high-value properties. Enjoy the benefits of
                property ownership without the hefty price tag. Diversify your
                portfolio and earn passive income.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Overlapping Image Section */}
      <Box
        sx={{
          position: "absolute", // Positioning relative to the header
          left: "50%",
          bottom: "-50px", // Adjust this value to control how much the images overlap into the next section
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 2 }, // Adjust gap between images for responsiveness
          zIndex: 1, // Ensure images are above the next section
          flexDirection: "row", // Ensure images are in a row
          flexWrap: "nowrap", // Prevent images from wrapping to the next line
        }}
      >
        <Box
          sx={{
            width: { xs: "120px", md: "301px" }, // Adjust width for responsiveness
            height: { xs: "120px", md: "361px" }, // Adjust height for responsiveness
            overflow: "hidden", // Hide overflow if images are larger
          }}
        >
          <img
            src={PropertyCard}
            alt="Property 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the image covers the entire container
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "120px", md: "301px" }, // Adjust width for responsiveness
            height: { xs: "120px", md: "361px" }, // Adjust height for responsiveness
            overflow: "hidden", // Hide overflow if images are larger
          }}
        >
          <img
            src={PropertyCard2}
            alt="Property 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the image covers the entire container
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "120px", md: "301px" }, // Adjust width for responsiveness
            height: { xs: "120px", md: "361px" }, // Adjust height for responsiveness
            overflow: "hidden", // Hide overflow if images are larger
          }}
        >
          <img
            src={PropertyCard3}
            alt="Property 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the image covers the entire container
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
