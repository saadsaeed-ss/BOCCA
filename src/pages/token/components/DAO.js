import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import img1 from "../../../assets/token4.svg";
import img2 from "../../../assets/token5.svg";
import img3 from "../../../assets/token6.svg";
import img4 from "../../../assets/token7.svg";
import img5 from "../../../assets/token8.svg";

const DAO = () => {
  return (
    <Container
      sx={{
        py: { xs: "40px", md: "80px" },
        width: "100%",
        px: { md: 0 },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: "40px", md: "80px" }}
      >
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Typography
            width={{ xs: "100%", md: "50%" }}
            color="#FFF"
            fontFamily="Satoshi"
            fontSize={{ xs: "32px", md: "54px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="120%"
          >
            Shape the <span style={{ color: "#2F7AFF" }}>Future</span> of BOCCA
            with <span style={{ color: "#2F7AFF" }}>DAO</span>
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            width={{ xs: "100%", md: "50%" }}
          >
            <Typography
              color="#E6E7E7"
              fontFamily="Satoshi"
              fontSize="15px"
              fontStyle="normal"
              fontWeight="300"
              lineHeight="130%"
            >
              BOCCA is committed to decentralized governance, empowering token
              holders to shape the platform's future. Through our DAO
              (Decentralized Autonomous Organization) structure, you can
              actively participate in decision-making processes.
            </Typography>
            <Typography
              color="#E6E7E7"
              fontFamily="Satoshi"
              fontSize="15px"
              fontStyle="normal"
              fontWeight="300"
              lineHeight="130%"
            >
              Your voting power is directly proportional to the number of $BOCCA
              tokens you have staked plus the period of staking, ensuring that
              your voice is heard in proportion to your investment.
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: "20px", md: "40px" }}
          border="1px solid #242424"
          px={{ xs: "12px", md: "24px" }}
          py={{ xs: "20px", md: "48px" }}
          borderRadius="10px"
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: "30px", md: "60" }}
            alignItems="center"
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
                variant="h2"
                color="#FFF"
                fontFamily="Satoshi"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="130%"
              >
                Submit a Proposal
              </Typography>
              <Typography
                color="#E6E7E7"
                fontFamily="Satoshi"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="130%"
              >
                Any token holder with a minimum stake can submit a proposal for
                consideration.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: "30px", md: "60" }}
            alignItems="center"
          >
            <Box>
              <img src={img2} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={{ xs: "8px", md: "12px" }}
            >
              <Typography
                variant="h2"
                color="#FFF"
                fontFamily="Satoshi"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="130%"
              >
                Community Discussion
              </Typography>
              <Typography
                color="#E6E7E7"
                fontFamily="Satoshi"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="130%"
              >
                The proposal is shared with the community for discussion,
                feedback, and potential amendments.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: "30px", md: "60" }}
            alignItems="center"
          >
            <Box>
              <img src={img3} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={{ xs: "8px", md: "12px" }}
            >
              <Typography
                variant="h2"
                color="#FFF"
                fontFamily="Satoshi"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="130%"
              >
                Voting Period
              </Typography>
              <Typography
                color="#E6E7E7"
                fontFamily="Satoshi"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="130%"
              >
                A designated voting period is initiated, allowing token holders
                to cast their votes.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: "30px", md: "60" }}
            alignItems="center"
          >
            <Box>
              <img src={img4} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={{ xs: "8px", md: "12px" }}
            >
              <Typography
                variant="h2"
                color="#FFF"
                fontFamily="Satoshi"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="130%"
              >
                Community Discussion
              </Typography>
              <Typography
                color="#E6E7E7"
                fontFamily="Satoshi"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="130%"
              >
                The proposal is shared with the community for discussion,
                feedback, and potential amendments.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={{ xs: "30px", md: "60" }}
            alignItems="center"
          >
            <Box>
              <img src={img5} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={{ xs: "8px", md: "12px" }}
            >
              <Typography
                variant="h2"
                color="#FFF"
                fontFamily="Satoshi"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="130%"
              >
                Implementation
              </Typography>
              <Typography
                color="#E6E7E7"
                fontFamily="Satoshi"
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="130%"
              >
                If a proposal passes, it is implemented by the platform's
                technical team.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default DAO;
