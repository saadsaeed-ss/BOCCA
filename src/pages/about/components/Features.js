import React from "react";
import { Container, Box, Typography } from "@mui/material";
import CommunityIcon from "../../../assets/community.svg";
import InnovationIcon from "../../../assets/Innovation1.svg";
import SecurityIcon from "../../../assets/Security1.svg";

const Features = () => {
  const features = [
    {
      image: CommunityIcon,
      title: "Community",
      description:
        "We value our community and believe in the power of collaboration. BOCCA is a community-driven ecosystem where every voice matters. We are committed to fostering an inclusive and supportive environment where users can participate in governance, share ideas, and contribute to the platform's growth.",
    },
    {
      image: InnovationIcon,
      title: "Innovation",
      description:
        "Innovation is at the heart of everything we do. We are dedicated to pushing the boundaries of what is possible in real estate investment by leveraging cutting-edge blockchain technology. Our focus is on creating innovative solutions that simplify and enhance the investment process, making it more accessible, efficient, and rewarding for everyone.",
    },
    {
      image: SecurityIcon,
      title: "Security",
      description:
        "Security is a top priority at BOCCA. We understand the importance of protecting our users' investments and personal information. That's why we've implemented robust security measures, including advanced encryption, secure smart contracts, and rigorous compliance with industry standards.",
    },
  ];

  return (
    <Container
      sx={{
        padding: { xs: "16px", md: "24px", lg: "100px 0px" },
        marginBottom: "50px",
        color: "White",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Satoshi", sans-serif',
          fontSize: "48px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Our <span style={{ color: "#2F7AFF" }}>Values</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              padding: "20px 20px 30px ",
              margin: "10px",
              borderRadius: "24px",
              border: "1px solid #242424",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={feature.image}
              alt={feature.title}
              sx={{
                maxWidth: { xs: "80%", sm: "60%", md: "100%" },
                height: "auto",
                marginBottom: "40px",
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
                textAlign: { xs: "center", md: "left" },
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
