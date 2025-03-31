import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <>
      <Box
        size={{ xs: 12 }}
        height="100vh"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}

export default Loader;
