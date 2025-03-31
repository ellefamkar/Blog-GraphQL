import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import Authors from "../author/Authors";
import Blogs from "../Blog/Blogs";

function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid size={{xs:12, md:3}} mt={4}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              Authors
            </Typography>
            <Authors />
          </Grid>
          <Grid size={{xs:12, md:9}} mt={4}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              Blogs
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
