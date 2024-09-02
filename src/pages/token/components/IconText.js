import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import img1 from "../../../assets/token1.svg";
import img2 from "../../../assets/token2.svg";
import img3 from "../../../assets/token3.svg";

const IconText = () => {
  return (
    <Container
      sx={{
        width: "100%",
        padding: { lg: 0 },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={16}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: "60px", md: "100px" }}
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: "2", md: "4" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box width={{ xs: "70%", md: "100%" }}>
              <img src={img1} />
            </Box>
            <Typography
              color="#FFF"
              textAlign="center"
              fontFamily="Satoshi"
              fontSize={{ xs: "14px", md: "20px" }}
              fontStyle="normal"
              fontWeight="300"
              lineHeight="130%"
            >
              Earn percentage of rental income based on your staked tokens.
              Stake more earn more.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: "2", md: "4" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box width={{ xs: "70%", md: "100%" }}>
              <img src={img2} />
            </Box>
            <Typography
              color="#FFF"
              textAlign="center"
              fontFamily="Satoshi"
              fontSize={{ xs: "14px", md: "20px" }}
              fontStyle="normal"
              fontWeight="300"
              lineHeight="130%"
            >
              <span style={{ fontWeight: "bold" }}>$BOCCA</span> token holders
              can enjoy exclusive discounted bookings at Damianii Luxury Hotel.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: "2", md: "4" }}
            alignItems="center"
            justifyContent="center"
          >
            <Box width={{ xs: "70%", md: "100%" }}>
              <img src={img3} />
            </Box>
            <Typography
              color="#FFF"
              textAlign="center"
              fontFamily="Satoshi"
              fontSize={{ xs: "14px", md: "20px" }}
              fontStyle="normal"
              fontWeight="300"
              lineHeight="130%"
            >
              Each <span style={{ fontWeight: "bold" }}>$BOCCA</span> Tokens
              gives you fractional ownership in the Damianii Luxury Hotel
            </Typography>
          </Box>
        </Box>
        <Typography
          color="#FFF"
          fontFamily="Satoshi"
          fontSize={{ xs: "15px", md: "50px" }}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="100%"
        >
          Buy, hold and <span style={{ color: "#2F7AFF" }}>earn rewards</span>{" "}
          in $BOCCA
        </Typography>
      </Box>
    </Container>
  );
};

export default IconText;
