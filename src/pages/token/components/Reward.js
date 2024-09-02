import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const Reward = () => {
  return (
    <Container
      sx={{
        py: { xs: "80px", md: "120px" },
        width: "100%",
        px: { lg: 0 },
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(9,10,12,1) 0%, rgba(47,122,255,1) 50%, rgba(9,10,12,1) 100%)",
        }}
        py="1px"
      >
        <Box
          backgroundColor="#090A0C"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          py={{ xs: "20px", md: "40px" }}
        >
          <Box
            backgroundColor="#090A0C"
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
            px={{ xs: "0px", md: "100px" }}
            py={{ xs: "40px", md: "0px" }}
          >
            <Typography
              color="#E6E7E7"
              fontSize={{ xs: "15px", md: "20px" }}
              fontWeight="regular"
              fontFamily='"Satoshi", sans-serif'
              lineHeight="130%"
            >
              Token Type
            </Typography>
            <Typography
              color="#2F7AFF"
              fontSize={{ xs: "20px", md: "32px" }}
              fontWeight="bold"
              fontFamily='"Satoshi", sans-serif'
              lineHeight="100%"
            >
              ERC-777
            </Typography>
          </Box>
          <Box
            sx={{
              background: {
                xs: "linear-gradient(90deg, #090A0C 30%, #2F7AFF 50%, #090A0C 70%)",
                md: "linear-gradient(180deg, #090A0C 0%, #2F7AFF 50%, #090A0C 100%)",
              },
            }}
            px={{ xs: "0px", md: "1px" }}
            py={{ xs: "1px", md: "0px" }}
          >
            <Box
              backgroundColor="#090A0C"
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="center"
              px={{ xs: "0px", md: "100px" }}
              py={{ xs: "40px", md: "0px" }}
            >
              <Typography
                color="#E6E7E7"
                fontSize={{ xs: "15px", md: "20px" }}
                fontWeight="regular"
                fontFamily='"Satoshi", sans-serif'
                lineHeight="130%"
              >
                Staking Reward
              </Typography>
              <Typography
                color="#2F7AFF"
                fontSize={{ xs: "20px", md: "32px" }}
                fontWeight="bold"
                fontFamily='"Satoshi", sans-serif'
                lineHeight="100%"
              >
                15.00% Yearly
              </Typography>
            </Box>
          </Box>
          <Box
            backgroundColor="#090A0C"
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
            px={{ xs: "0px", md: "100px" }}
            py={{ xs: "40px", md: "0px" }}
          >
            <Typography
              color="#E6E7E7"
              fontSize={{ xs: "15px", md: "20px" }}
              fontWeight="regular"
              fontFamily='"Satoshi", sans-serif'
              lineHeight="130%"
            >
              Total Holders
            </Typography>
            <Typography
              color="#2F7AFF"
              fontSize={{ xs: "20px", md: "32px" }}
              fontWeight="bold"
              fontFamily='"Satoshi", sans-serif'
              lineHeight="100%"
            >
              3,201
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Reward;
