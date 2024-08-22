import React from "react";
import { Container, Box, Typography } from "@mui/material";
import FractionalOwnershipImg from "../../../assets/FractionalOwnershipImg.png";
import LiquidityImg from "../../../assets/LiquidityImg.png";
import DiversificationImg from "../../../assets/DiversificationImg.png";

const Features = () => {
  const features = [
    {
      image: FractionalOwnershipImg,
      title: "Fractional Ownership",
      description:
        "Invest in high-value properties with little money. Fractional ownership breaks down traditional barriers to entry, opening up opportunities for diversification and wealth-building previously unavailable to most.",
    },
    {
      image: LiquidityImg,
      title: "Liquidity",
      description:
        "Tokenization converts real estate into digital tokens, making buying, selling, or trading fractional property ownership easier. This enhanced liquidity allows you to enter or exit investments quickly.",
    },
    {
      image: DiversificationImg,
      title: "Diversification",
      description:
        "Tokenization allows you to own a fraction of high-value properties, meaning you can invest according to your budget and diversify your portfolio across multiple assets. You can also get a share in the property’s revenue.",
    },
  ];

  return (
    <Container
      sx={{
        padding: { xs: "16px", md: "24px", lg: "0px" }, // Adjust padding for different screen sizes
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch", // Ensures all boxes stretch to the same height
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              textAlign: "left", // Ensure left alignment on all screen sizes
              padding: "20px",
              margin: "10px",
              borderRadius: "24px",
              border: "1px solid #242424",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Align content to the top
            }}
          >
            <Box
              component="img"
              src={feature.image}
              alt={feature.title}
              sx={{
                maxWidth: { xs: "80%", md: "100%" }, // Adjust the max width on smaller screens
                height: "auto",
                marginBottom: "40px",
                alignSelf: { xs: "flex-start", md: "flex-start" }, // Align the image to the left on all screen sizes
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ccc",
                fontFamily: '"Satoshi", sans-serif',
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Features;
