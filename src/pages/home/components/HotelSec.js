import React from "react";
import { Container, Box, Typography } from "@mui/material";
import DamianiHotelImg from "../../../assets/DamianiHotelImg.jpg";

const HotelSection = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        color: "#fff",
        backgroundColor: "#000",
        padding: "100px 0 0 0",
        paddingX: { xs: "16px", sm: "24px", md: "48px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "lg",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
            marginRight: { md: "50px" },
            textAlign: "left",
          }}
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

          <Typography
            variant="body1"
            sx={{
              color: "#0066ff",
              fontFamily: '"Satoshi", sans-serif',
              marginBottom: "20px",
            }}
          >
            BOCCA proudly announces its first tokenization project: Damianii
            Luxury Boutique Hotel & Spa on Croatia's stunning coast.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ccc",
              fontFamily: '"Satoshi", sans-serif',
              marginBottom: "20px",
            }}
          >
            Known for its breathtaking views, world-class amenities, and prime
            location, this hotel represents the ideal asset to launch the BOCCA
            ecosystem. By tokenizing this premier property, we are taking our
            first significant step toward revolutionizing real estate
            investment.
            <br />
            <br />
            The decision to tokenize this hotel was driven by its strong market
            position and appeal to tourists and investors. The luxury hotel will
            be divided into digital tokens representing a fractional ownership
            interest. These tokens allow investors to share the hotel’s profits,
            participate in governance, and enjoy exclusive benefits like
            discounted stays. This tokenization process ensures investors can
            easily buy, sell, and trade their ownership stakes, making real
            estate investment more liquid and accessible.
          </Typography>

          <Box
            sx={{
              color: "#0066ff",
              fontFamily: '"Satoshi", sans-serif',
              borderLeft: "1px solid #0066ff",
              paddingLeft: "16px",
            }}
          >
            <Typography variant="body2">5 Star Rating</Typography>
            <Typography variant="body2">8.7 Score On Booking.Com</Typography>
            <Typography variant="body2">Private Beach</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "70%" },
            textAlign: "right",
            marginTop: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            component="img"
            src={DamianiHotelImg}
            alt="Damianii Luxury Hotel"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HotelSection;
