import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import image from "../../../assets/Tokenheader.svg";
import bgimg from "../../../assets/tokenbg.svg";

const Header = () => {
  return (
    <Box
      sx={{
        height: { xs: "60%", md: "100vh" },
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: { xs: "120px", md: "12%" },
        paddingBottom: { xs: "60px", md: "50px" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: { md: 0 },
          gap: { xs: "50px", md: "0px" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", md: "50%" }}
          gap={10}
        >
          <Stack spacing={5}>
            <Typography
              variant="h1"
              color="white"
              fontSize={{ xs: "48px", md: "64px" }}
              fontWeight="bold"
              fontFamily='"Satoshi", sans-serif'
              lineHeight="110%"
            >
              Empower Your Investments with{" "}
              <span style={{ color: "#2F7AFF" }}>$BOCCA</span>
            </Typography>
            <Typography
              color="#E6E7E7"
              fontSize={{ xs: "14px", md: "18px" }}
              fontWeight="regular"
              fontFamily='"Satoshi", sans-serif'
              lineHeight="130%"
            >
              The $BOCCA token is your gateway to a new era of investment.
              Benefit from fractional ownership, enhanced liquidity, and the
              power of blockchain technology.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Button
              variant="contained"
              fontFamily='"Satoshi", sans-serif'
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
              fontFamily='"Satoshi", sans-serif'
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

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          width={{ xs: "70%", md: "30%" }}
        >
          <img src={image} width="500px" height="auto"></img>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
