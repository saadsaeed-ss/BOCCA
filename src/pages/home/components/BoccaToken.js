import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import OneIcon from "../../../assets/one.svg";
import TwoIcon from "../../../assets/two.svg";
import ThreeIcon from "../../../assets/three.svg";
import FourIcon from "../../../assets/four.svg";
import RevImg from "../../../assets/revenue.png";
import Step1Icon from "../../../assets/step1.png";
import Step2Icon from "../../../assets/step2.png";
import Step3Icon from "../../../assets/step3.png";
import WarningIcon from "../../../assets/warning.png";

const BoccaTokenSection = () => {
  return (
    <Container
      sx={{
        padding: "100px 20px 50px",
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
              variant="h5"
              sx={{
                fontFamily: '"Satoshi", sans-serif',
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Fractional Ownership
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              marginBottom: { xs: 5, md: 20 },
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
              variant="h5"
              sx={{
                fontFamily: '"Satoshi", sans-serif',
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Booking Discount
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              marginBottom: { xs: 5, md: 20 },
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
              variant="h5"
              sx={{
                fontFamily: '"Satoshi", sans-serif',
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Governance Rights
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              marginBottom: { xs: 5, md: 20 },
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
      {/* Revenue Sharing Section */}
      <Box
        sx={{
          marginTop: 5,
          padding: "50px 30px",
          borderRadius: "20px",
          border: "1px solid #242424",
          marginBottom: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Content Area */}
          <Box
            sx={{
              flex: 1,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            {/* Main Title with Icon */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 2,
              }}
            >
              <img src={FourIcon} alt="Revenue Sharing" />

              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Satoshi", sans-serif',
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                Revenue Sharing
              </Typography>
            </Box>

            {/* Step 1 */}
            <Box sx={{ marginTop: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img src={Step1Icon} alt="Step 1" />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Satoshi", sans-serif',
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Lock your tokens
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  fontFamily: '"Satoshi", sans-serif',
                  color: "#fff",
                }}
              >
                Transfer your $BOCCA tokens to your BOCCA app and select the
                staking option. Choose your desired staking duration. The longer
                you stake, the higher your potential rewards.
              </Typography>
            </Box>

            {/* Step 2 */}
            <Box sx={{ marginTop: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img src={Step2Icon} alt="Step 2" />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Satoshi", sans-serif',
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Earn Rewards
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  fontFamily: '"Satoshi", sans-serif',
                  color: "#fff",
                }}
              >
                Receive staking rewards in the form of additional $BOCCA tokens.
                The reward is generated through the revenue generated by the
                hotel.
              </Typography>
            </Box>

            {/* Step 3 */}
            <Box sx={{ marginTop: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img src={Step3Icon} alt="Step 3" />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Satoshi", sans-serif',
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Withdraw Your Rewards
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: 1,
                  fontFamily: '"Satoshi", sans-serif',
                  color: "#fff",
                }}
              >
                Claim your earned tokens at the end of your staking period or
                withdraw them periodically based on the staking program's terms.
              </Typography>
            </Box>

            {/* Warning */}
            <Box sx={{ marginTop: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <img src={WarningIcon} alt="Warning" />
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Satoshi", sans-serif',
                    color: "#fff",
                    opacity: 0.8,
                  }}
                >
                  Staking rewards may vary based on factors such as total staked
                  amount and network conditions.
                </Typography>
              </Box>
            </Box>

            {/* Link to Whitepaper */}
            <Link
              href="#"
              underline="none"
              sx={{
                display: "inline-block",
                marginTop: 5,
                fontFamily: '"Satoshi", sans-serif',
                color: "#2979FF",
                cursor: "pointer",
              }}
            >
              Read whitepaper to learn more →
            </Link>
          </Box>

          {/* Right Section: Single Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "end" },
              alignItems: "center",
              marginTop: { xs: 10 },
            }}
          >
            <Box
              component="img"
              src={RevImg}
              alt="Revenue Sharing"
              sx={{
                maxWidth: "80%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BoccaTokenSection;
