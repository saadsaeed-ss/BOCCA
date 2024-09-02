import React from "react";
import { Container, Box, Typography } from "@mui/material";
import DamianiHotelImg from "../../../assets/DamianiHotelImg.jpg";
import stars from "../../../assets/5star.svg";

const HotelSection = () => {
  return (
    <Box backgroundColor="#000">
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          py: { xs: "40px", md: "80px" },
          width: "100%",
          px: { md: 0 },
          gap: { xs: "20px", md: "60px" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign="left"
          gap={{ xs: "20px", md: "40px" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              marginBottom: "20px",
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            <span style={{ color: "#2F7AFF" }}>Damianii</span> Luxury Hotel
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: "16px", md: "20px" }}
            color="#ccc"
            fontFamily='"Satoshi", sans-serif'
            fontSize={{ xs: "14px", md: "16px" }}
          >
            <Typography
              variant="body1"
              fontSize={{ xs: "16px", md: "20px" }}
              sx={{
                color: "#0066ff",
                fontFamily: '"Satoshi", sans-serif',
                marginBottom: "20px",
              }}
            >
              BOCCA proudly announces its first tokenization project: Damianii
              Luxury Boutique Hotel & Spa on Croatia's stunning coast.
            </Typography>

            <Typography>
              Known for its breathtaking views, world-class amenities, and prime
              location, this hotel represents the ideal asset to launch the
              BOCCA ecosystem. By tokenizing this premier property, we are
              taking our first significant step toward revolutionizing real
              estate investment.
            </Typography>
            <Typography>
              The decision to tokenize this hotel was driven by its strong
              market position and appeal to tourists and investors. The luxury
              hotel will be divided into digital tokens representing a
              fractional ownership interest. These tokens allow investors to
              share the hotel’s profits, participate in governance, and enjoy
              exclusive benefits like discounted stays. This tokenization
              process ensures investors can easily buy, sell, and trade their
              ownership stakes, making real estate investment more liquid and
              accessible.
            </Typography>
          </Box>
          <Box>
            <Box
              borderLeft="1px solid #0066ff"
              paddingLeft="16px"
              mb={{ xs: "4px", md: "8px" }}
            >
              <img src={stars}></img>
            </Box>

            <Typography
              variant="body2"
              color="#0066ff"
              fontFamily='"Satoshi", sans-serif'
              borderLeft="1px solid #0066ff"
              paddingLeft="16px"
              mb={{ xs: "4px", md: "8px" }}
            >
              8.7/10 Score On Booking.Com
            </Typography>

            <Typography
              variant="body2"
              color="#0066ff"
              fontFamily='"Satoshi", sans-serif'
              borderLeft="1px solid #0066ff"
              paddingLeft="16px"
              mb={{ xs: "4px", md: "8px" }}
            >
              Private Beach
            </Typography>
          </Box>
        </Box>

        <Box
          component="img"
          src={DamianiHotelImg}
          alt="Damianii Luxury Hotel"
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: "right",
            height: "auto",
            borderRadius: "24px",
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default HotelSection;
