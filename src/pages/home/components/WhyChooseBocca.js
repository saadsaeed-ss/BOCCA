import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BoccaImg from "../../../assets/whyChooseBocca.png";
import Security from "../../../assets/Security.svg";
import VeriUser from "../../../assets/VerifiedUser.svg";
import Eco from "../../../assets/Ecosystem.svg";
import Innovation from "../../../assets/Innovation.svg";

const WhyChooseBocca = () => {
  return (
    <Container
      sx={{
        padding: { xs: "100px 20px", lg: " 100px 0px" }, // Apply padding on small screens and none on large screens
      }}
    >
      {/* Upper Section */}
      <Box
        sx={{
          paddingBottom: { xs: 5, md: 10 },
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Satoshi", sans-serif',
            fontWeight: "700",
          }}
        >
          Why <span style={{ color: "#2979FF" }}>Choose</span> BOCCA?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            opacity: 0.8,
            fontFamily: '"Satoshi", sans-serif',
            fontSize: { xs: "body2.fontSize", md: "body1.fontSize" },
          }}
        >
          BOCCA stands out as the premier platform for real estate tokenization
          due to several key advantages:
        </Typography>
      </Box>

      {/* Lower Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left Column with BoccaImg */}
        <Box
          sx={{
            flex: 1.5,
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
            padding: { xs: 2, md: 0 },
            // Adjust the image size for small screens
            maxWidth: { xs: "100%", md: "500px" },
          }}
        >
          <img
            src={BoccaImg}
            alt="BOCCA"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: { xs: "300px", md: "500px" }, // Adjust size for small screens
            }}
          />
        </Box>

        {/* Right Column with 2x2 Information Grid */}
        <Box
          sx={{
            flex: 2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 2x2 grid structure
            gap: 4,
          }}
        >
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={Security} alt="Security" />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Satoshi", sans-serif',
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: 1.1,
                }}
              >
                Security and Transparency
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, fontFamily: '"Satoshi", sans-serif' }}
            >
              Our platform prioritizes security and transparency through
              advanced blockchain technology. All operations are conducted with
              full transparency and with high-level security protocols.
            </Typography>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={VeriUser} alt="Proven Expertise" />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Satoshi", sans-serif',
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: 1.1,
                }}
              >
                Proven Expertise
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, fontFamily: '"Satoshi", sans-serif' }}
            >
              Our team possesses deep real estate and blockchain technology
              expertise, ensuring seamless execution. This unique combination
              allows us to navigate the complexities of both worlds effectively.
            </Typography>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={Eco} alt="Comprehensive Ecosystem" />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Satoshi", sans-serif',
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: 1.1,
                }}
              >
                Comprehensive Ecosystem
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, fontFamily: '"Satoshi", sans-serif' }}
            >
              BOCCA offers investors a full suite of tools and services, from
              tokenization and investment opportunities to staking and
              governance.
            </Typography>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img src={Innovation} alt="Innovation and Growth" />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Satoshi", sans-serif',
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: 1.1,
                }}
              >
                Innovation and Growth
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, fontFamily: '"Satoshi", sans-serif' }}
            >
              We are committed to staying ahead of the curve. BOCCA constantly
              innovates to improve our platform, enhance user experience, and
              expand our ecosystem.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyChooseBocca;
