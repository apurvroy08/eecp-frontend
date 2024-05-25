import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CustomButton = ({ name, icon, click, disabled }) => {
  return (
    <Box>
      <Button
        type="submit"
        variant="contained"
        onClick={click}
        disabled={disabled}
        sx={{
          bgcolor: "#9d3892",
          padding: "10px 30px",
          gap: "12px",
          width:"100%"
        }}
      >
        {icon}
        <Typography
          sx={{
            color: "#fff",
            textTransform: "none",
          }}
        >
          {name}
        </Typography>
      </Button>
    </Box>
  );
};

export default CustomButton;
