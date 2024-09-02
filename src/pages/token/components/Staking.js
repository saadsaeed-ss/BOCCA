import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import img1 from "../../../assets/staking1.svg";
import img2 from "../../../assets/staking2.svg";
import img3 from "../../../assets/staking3.svg";
import img4 from "../../../assets/staking4.svg";

const Staking = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "40px", md: "80px" },
        justifyContent: "center",
        alignItems: "center",
        py: { xs: "40px", md: "80px" },
        width: "100%",
        px: { md: 0 },
      }}
    >
      <Box>
        {" "}
        <Typography
          color="#FFF"
          fontFamily='"Satoshi", sans-serif'
          fontSize={{ xs: "32px", md: "50px" }}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="100%"
        >
          Buy, hold and <span style={{ color: "#2F7AFF" }}>earn rewards</span>{" "}
          in $BOCCA
        </Typography>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={8}
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", md: "35%" }}
          gap={2}
        >
          <Box>
            <img src={img1} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: "8px", md: "12px" }}
          >
            <Typography
              color="#FFF"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "16px", md: "20px" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="130%"
            >
              Acquire $BOCCA Tokens
            </Typography>
            <Typography
              color="#E6E7E7"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "13px", md: "16px" }}
              fontStyle="normal"
              fontWeight="100"
              lineHeight="130%"
            >
              Purchase $BOCCA tokens through our platform or a supported
              centralized and decentralized exchanges.
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", md: "35%" }}
          gap={{ xs: "8px", md: "12px" }}
        >
          <Box>
            <img src={img2} />
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              color="#FFF"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "16px", md: "20px" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="130%"
            >
              Connect Wallet to BOCCA
            </Typography>
            <Typography
              color="#E6E7E7"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "13px", md: "16px" }}
              fontStyle="normal"
              fontWeight="100"
              lineHeight="130%"
            >
              Navigate to the BOCCA platform's staking dashboard and connect
              your wallet which is holding $BOCCA tokens.
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", md: "35%" }}
          gap={{ xs: "8px", md: "12px" }}
        >
          <Box>
            <img src={img3} />
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              color="#FFF"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "16px", md: "20px" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="130%"
            >
              Select the Staking Option
            </Typography>
            <Typography
              color="#E6E7E7"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "13px", md: "16px" }}
              fontStyle="normal"
              fontWeight="100"
              lineHeight="130%"
            >
              Select the amount of tokens you want to stake and choose a staking
              duration (e.g., 30 days, 90 days).
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width={{ xs: "100%", md: "35%" }}
          gap={{ xs: "8px", md: "12px" }}
        >
          <Box>
            <img src={img4} />
          </Box>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography
              color="#FFF"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "16px", md: "20px" }}
              fontStyle="normal"
              fontWeight="700"
              lineHeight="130%"
            >
              Earn Rewards
            </Typography>
            <Typography
              color="#E6E7E7"
              fontFamily='"Satoshi", sans-serif'
              fontSize={{ xs: "13px", md: "16px" }}
              fontStyle="normal"
              fontWeight="100"
              lineHeight="130%"
            >
              As you stake your tokens, you'll start earning rewards in the form
              of additional $BOCCA tokens.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Staking;
