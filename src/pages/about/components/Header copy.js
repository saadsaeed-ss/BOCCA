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
        position: "relative",
        padding: { xs: "120px 0 100px 0", md: "200px 0 400px 0" },
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
                alignItems: { xs: "center", md: "center" },
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
                }}
              >
                BOCCA democratizes real estate investment by allowing you to own
                a fraction of high-value properties. Enjoy the benefits of
                property ownership without the hefty price tag. Diversify your
                portfolio and earn passive income.
              </Typography>
            </Box>

            {/* Images section for small screens */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" }, // Visible only on small screens
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                alignItems: "center",
                justifyContent: "center", // Center images on small screens
                mt: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "30%" },
                  height: { xs: "250px", sm: "300px" }, // Reduced height on xs screens
                  overflow: "hidden",
                }}
              >
                <img
                  src={PropertyCard}
                  alt="Property 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "30%" },
                  height: { xs: "250px", sm: "auto" }, // Reduced height on xs screens
                  overflow: "hidden",
                }}
              >
                <img
                  src={PropertyCard2}
                  alt="Property 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "30%" },
                  height: { xs: "250px", sm: "auto" }, // Reduced height on xs screens
                  overflow: "hidden",
                }}
              >
                <img
                  src={PropertyCard3}
                  alt="Property 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Images section for medium and larger screens */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // Visible only on medium and larger screens
          position: "absolute",
          left: "50%",
          bottom: "-50px",
          transform: "translateX(-50%)",
          justifyContent: "center", // Center images on larger screens
          alignItems: "center",
          gap: 2,
          zIndex: 1,
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <Box
          sx={{
            width: "301px",
            height: "361px",
            overflow: "hidden",
          }}
        >
          <img
            src={PropertyCard}
            alt="Property 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "301px",
            height: "361px",
            overflow: "hidden",
          }}
        >
          <img
            src={PropertyCard2}
            alt="Property 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "301px",
            height: "361px",
            overflow: "hidden",
          }}
        >
          <img
            src={PropertyCard3}
            alt="Property 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
