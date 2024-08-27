import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: [
      "Seed",
      "Private/KOL",
      "Public Presale",
      "Liquidity",
      "Marketing",
      "Staking",
      "Team",
      "Partnerships",
      "Ecosystem Rewards",
      "Airdrop",
    ],
    datasets: [
      {
        data: [10, 20, 10, 15, 10, 15, 10, 5, 3, 2],
        backgroundColor: [
          "#FFC107",
          "#FFCDD2",
          "#E91E63",
          "#3F51B5",
          "#03A9F4",
          "#4CAF50",
          "#F44336",
          "#FF9800",
          "#00BCD4",
          "#FFEB3B",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Container sx={{ padding: 4, color: "#ffffff" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontFamily: '"Satoshi", sans-serif',
          fontWeight: 700,
          marginBottom: "50px",
        }}
      >
        Tokenomics
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            width: { xs: "100%", sm: 400, md: 500 },
            maxWidth: "100%",
          }}
        >
          <Doughnut data={data} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        marginTop={4}
        flexWrap="wrap"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            marginRight: { sm: 4, xs: 0 },
            marginBottom: { xs: 0, sm: 0 },
            width: { xs: "100%", sm: "300px" },
          }}
        >
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#FFC107",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            10% Seed
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#FFCDD2",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            20% Private/KOL
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#E91E63",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            10% Public Presale
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#3F51B5",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            15% Liquidity
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#03A9F4",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            10% Marketing
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "300px" },
          }}
        >
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#4CAF50",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            15% Staking
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#F44336",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            10% Team
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#FF9800",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            5% Partnerships
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              marginBottom: "12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#00BCD4",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            3% Ecosystem Rewards
          </Typography>
          <Typography
            sx={{
              border: "1px solid gray",
              padding: "8px 12px",
              borderRadius: "12px",
              fontFamily: '"Satoshi", sans-serif',
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                backgroundColor: "#FFEB3B",
                width: 16,
                height: 16,
                display: "inline-block",
                marginRight: 1,
                borderRadius: "50%",
              }}
            />
            2% Airdrop
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Tokenomics;
