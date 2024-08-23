import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import OneIcon from "../../../assets/one.svg";
import TwoIcon from "../../../assets/two.svg";
import ThreeIcon from "../../../assets/three.svg";

const BoccaTokenSection = () => {
  return (
    <Container
      sx={{
        padding: "100px 20px",
        color: "#fff",
      }}
    >
      {/* First Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: { xs: "flex-start", md: "baseline" }, // Align content with the baseline of the title
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            flex: { xs: "1", md: "4" }, // 12/4 space
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Satoshi", sans-serif',
              fontWeight: "700",
              lineHeight: "1.1",
            }}
          >
            The
            <br /> <span style={{ color: "#2979FF" }}>$BOCCA</span> Token
          </Typography>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: { xs: "1", md: "5" }, // 12/6 space
            marginTop: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              opacity: 0.8,
              fontFamily: '"Satoshi", sans-serif',
              fontSize: { xs: "body2.fontSize", md: "body1.fontSize" },
              lineHeight: "1.6", // Adjust line height for proper baseline alignment
            }}
          >
            The $BOCCA token is the digital heartbeat of the BOCCA ecosystem. It
            represents fractional ownership of tokenized real estate assets and
            empowers investors to participate in the platform’s growth.
          </Typography>
        </Box>
      </Box>

      {/* Second Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          marginTop: 10,
        }}
      >
        {/* Fractional Ownership */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #242424",
            borderRadius: "24px",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 2,
            }}
          >
            <img src={OneIcon} alt="Fractional Ownership" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Satoshi", sans-serif',
                color: "#fff",
              }}
            >
              Fractional Ownership
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              opacity: 0.8,
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            By owning the $BOCCA Tokens, you will gain fractional ownership in
            the Damianii Luxury Hotel. Each token represents the fractional
            ownership. The more tokens you hold, the more fractional ownership
            you will get.
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              display: "inline-block",
              marginTop: 2,
              fontFamily: '"Satoshi", sans-serif',
              color: "#2979FF",
              cursor: "pointer",
            }}
          >
            Read whitepaper to learn more →
          </Link>
        </Box>

        {/* Booking Discount */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #242424",
            borderRadius: "24px",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 2,
            }}
          >
            <img src={TwoIcon} alt="Booking Discount" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Satoshi", sans-serif',
                color: "#fff",
              }}
            >
              Booking Discount
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              opacity: 0.8,
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            $BOCCA token holders can enjoy exclusive discounted bookings at
            Damianii Luxury Hotel. $BOCCA tokens provide you with financial
            advantages that go beyond traditional investment returns.
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              display: "inline-block",
              marginTop: 2,
              fontFamily: '"Satoshi", sans-serif',
              color: "#2979FF",
              cursor: "pointer",
            }}
          >
            Read whitepaper to learn more →
          </Link>
        </Box>

        {/* Governance Rights */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #242424",
            borderRadius: "24px",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: 2,
            }}
          >
            <img src={ThreeIcon} alt="Governance Rights" />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Satoshi", sans-serif',
                color: "#fff",
              }}
            >
              Governance Rights
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              opacity: 0.8,
              fontFamily: '"Satoshi", sans-serif',
            }}
          >
            $BOCCA tokens grant you voting rights on key proposals within the
            BOCCA ecosystem. This decentralized governance model ensures that
            the platform evolves according to the collective vision of its
            users.
          </Typography>
          <Link
            href="#"
            underline="none"
            sx={{
              display: "inline-block",
              marginTop: 2,
              fontFamily: '"Satoshi", sans-serif',
              color: "#2979FF",
              cursor: "pointer",
            }}
          >
            Read whitepaper to learn more →
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default BoccaTokenSection;
