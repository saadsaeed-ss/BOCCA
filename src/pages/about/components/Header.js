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
        padding: { xs: "200px 0 100px 0" },
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          maxWidth: "1200px",
          padding: { lg: 0 },
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            color: "white",
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
                alignItems: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  fontSize: { xs: "48px", md: "96px" },
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
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily: '"Satoshi", sans-serif',
                  maxWidth: { xs: "100%", md: "70%" },
                  color: "#E6E7E7",
                  mb: 5,
                }}
              >
                BOCCA democratizes real estate investment by allowing you to own
                a fraction of high-value properties. Enjoy the benefits of
                property ownership without the hefty price tag. Diversify your
                portfolio and earn passive income.
              </Typography>
            </Box>

            {/* Images section for all screens */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Column on xs, Row on sm and up
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
                // Center the images horizontally
                margin: "0 auto",
                maxWidth: "100%", // Ensure it doesn't exceed the container's width
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  src={PropertyCard}
                  alt="Property 1"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  src={PropertyCard2}
                  alt="Property 2"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <img
                  src={PropertyCard3}
                  alt="Property 3"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
