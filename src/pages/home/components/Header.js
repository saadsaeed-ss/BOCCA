import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "../../../assets/homeHeaderBgImg.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Header = () => {
  return (
    <Box
      sx={{
        padding: "500px 0 100px 0", // Adjust overall padding as needed
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          maxWidth: "1200px",
          padding: 0, // Set padding to 0
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
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "8px", md: "16px" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                gutterBottom
                variant="h1"
                sx={{
                  fontSize: { xs: "72px", md: "96px" },
                  fontWeight: "bold",
                  fontFamily: '"Satoshi", sans-serif',
                  lineHeight: 1.1,
                }}
              >
                <span style={{ color: "#2F7AFF" }}>Fractional</span> Ownership,
                <br />
                <span style={{ color: "#2F7AFF" }}>Maximum</span> Returns
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { xs: "16px" },
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
            <Stack spacing={4} direction="row">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2F7AFF",
                  color: "white",
                  fontFamily: '"Satoshi Light", sans-serif',
                  "&:hover": {
                    backgroundColor: "#1A5CFF", // Optional: darker shade on hover
                  },
                  textTransform: "none",
                }}
              >
                Join Pre-Sale
              </Button>
              <Button
                variant="text"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{
                  color: "white",
                  fontFamily: '"Satoshi Light", sans-serif',
                  textTransform: "none",
                }}
              >
                Read Whitepaper
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
