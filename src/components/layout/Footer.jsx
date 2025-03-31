import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        fontSize={13}
        bgcolor="primary.main"
        color="secondary.main"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        © 2025 Elle Famkar. All Rights Reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
