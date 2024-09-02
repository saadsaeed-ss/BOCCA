import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#2F7AFF", // Updated primary color
      },
      background: {
        default: "#0F1114",
        paper: "#121212",
      },
      text: {
        primary: "#ffffff",
      },
    },
    typography: {
      h1: {
        fontFamily: '"Satoshi", sans-serif',
        fontWeight: "600",
        color: "#ffffff",
        textAlign: "center", // Center the font
      },
      h2: {
        fontSize: "32px",
        fontFamily: '"Satoshi", sans-serif',
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center", // Center the font
      },
    },
  })
);

const FormSec = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Please enter a valid email address.";
    }
  
    // Regex for invalid characters
    const illegalChars = /[()<>[\]{}\\]/;
    if (illegalChars.test(email)) {
      return "Email contains illegal characters.";
    }
  
    return ""; // No errors
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
  
    if (validationError) {
      setError(validationError);
      return; // Stop form submission
    }
    
    setError(""); // Clear previous errors

    // Placeholder for EmailJS or any other email sending logic
    // Uncomment and add your EmailJS configuration here
    /*
    const serviceId = process.env.REACT_APP_ServiceId;
    const templateId = process.env.REACT_APP_ContactTemplateId;
    const publicKey = process.env.REACT_APP_PublicKey;
  
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "BOCCA",
        message: message,
      },
    };
  
    try {
      await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setError("There was an error submitting the form. Please try again.");
    }
    */

    // Simulate a successful form submission for testing purposes
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(true);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center", // Center the content horizontally
          gap: { xs: 10, md: "10%" },
          padding : {xs: "50px 20px 100px", md: "0 0 150px 0"},
          minWidth: "100%",
          color: "#ffffff", // Sets the section content color to white
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: { xs: "100%", md: "50%" },
            justifyContent: "center", // Center the form horizontally
            alignItems: "center",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1, sm: 3 },
              textAlign: "center", // Center the text inside the Box
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "42px", sm: "40px", md: "52px" },
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 700,
              }}
            >
              Ready to Build <span style={{ color: "#2F7AFF" }}>Future?</span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "170%",
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 300,
              }}
            >
              Let’s hear from you what asset you want to tokenize. Our dedicated support team is here to help.
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit}
            className="emailForm"
            style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }} // Adjusted width of the form and centered it
          >
            <Stack direction="column" spacing={2} useFlexGap>
              <TextField
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color gray
                      
                    },
                    "&:hover fieldset": {
                      borderColor: "#2F7AFF", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2F7AFF", // Border color when focused
                    },
                  },
                }}
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your name"
                inputProps={{
                  autoComplete: "off",
                }}
              />
              <TextField
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color gray
                    },
                    "&:hover fieldset": {
                      borderColor: "#2F7AFF", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2F7AFF", // Border color when focused
                    },
                  },
                }}
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                inputProps={{
                  autoComplete: "off",
                }}
              />
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // Default border color gray
                    },
                    "&:hover fieldset": {
                      borderColor: "#2F7AFF", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#2F7AFF", // Border color when focused
                    },
                  },
                }}
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your message"
                placeholder="Your message"
                multiline
                rows={4}
                inputProps={{
                  autoComplete: "off",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                sx={{
                  fontWeight: 500,
                  textTransform: "none",
                  backgroundColor: "#2F7AFF", // Button color
                  "&:hover": {
                    backgroundColor: "#1a5eb8", // Darker shade for hover effect
                  },
                  marginTop: 2, // Add space between the button and the form
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
          {error && (
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "red",
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 300,
                textAlign: "center", // Center the error message
              }}
            >
              {error}
            </Typography>
          )}
          {isSubmitted && (
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "#2F7AFF",
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 300,
                textAlign: "center", // Center the confirmation message
              }}
            >
              Thank you! Your email has been submitted.
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default FormSec;
