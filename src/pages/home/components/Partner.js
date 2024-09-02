import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Zealy from "../../../assets/zealy.png";
import Galxe from "../../../assets/galxe.png";

const Partner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          py: { xs: "40px", md: "80px" },
          width: "100%",
          px: { md: 0 },
          textAlign: "center", // Centers text content horizontally
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            color: "white", // Ensures text is visible against the background
            gap: { xs: "20px", md: "40px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "8px", md: "16px" },
              alignItems: "center",
              textAlign: "center", // Centers text content horizontally
            }}
          >
            <Typography
              gutterBottom
              variant="h1"
              sx={{
                fontSize: "38px",
                fontWeight: "bold",
                fontFamily: '"Satoshi", sans-serif',
                lineHeight: 1.1,
              }}
            >
              Our <span style={{ color: "#2F7AFF" }}>Partners </span>
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
              We are building a future for real estate investment and are not
              alone in this revolution. We have strong partners who believe in
              our vision.
            </Typography>
          </Box>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 6 }}
          sx={{ mt: 6 }}
        >
          <Box
            component="img"
            src={Zealy}
            alt="Partner 1"
            sx={{
              width: { xs: "80px", md: "120px" },
              height: "auto",
            }}
          />
          <Box
            component="img"
            src={Galxe}
            alt="Partner 2"
            sx={{
              width: { xs: "80px", md: "120px" },
              height: "auto",
            }}
          />
          <Box
            component="img"
            src={Zealy}
            alt="Partner 3"
            sx={{
              width: { xs: "80px", md: "120px" },
              height: "auto",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Partner;
