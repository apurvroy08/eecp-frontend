import { Box, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const LetsChat = () => {
  return (
    <Box
      sx={{
        bgcolor: "#eceff1",
        display: "flex",
        pt:"40px",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "24px",
          color: "#00008a",
          fontWeight: 600,
        }}
      >
        Still have questions? Let’s chat.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "64px",
          marginTop: "40px",
        }}
      >
        <Box>
          <Box
            sx={{
              height: "135px",
              width: "135px",
              bgcolor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 13px 35px 1px rgba(0,0,0,.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChatBubbleOutlineIcon
              sx={{ color: "#d60000", fontSize: "64px" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#00008a",
              fontWeight: 600,
              marginY: "40px",
              textAlign: "center",
            }}
          >
            Chat With Us
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              height: "135px",
              width: "135px",
              bgcolor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 13px 35px 1px rgba(0,0,0,.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocalPhoneIcon sx={{ color: "#d60000", fontSize: "64px" }} />
          </Box>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#00008a",
              fontWeight: 600,
              marginY: "40px",
              textAlign: "center",
            }}
          >
            Phone Call
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LetsChat;
