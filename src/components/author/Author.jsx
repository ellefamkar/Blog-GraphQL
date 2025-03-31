import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

function Author() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });
  const { author } = data;
  console.log(loading, data, error);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Container maxWidth="lg">
          <Grid container mt={10}>
            <Grid
              size={{ xs: 12 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar
                src={author.avatar.url}
                sx={{ marginRight: 2, width: "250px", height: "250px" }}
                aria-label={author.name}
              />
              <Typography
                component="h3"
                variant="h5"
                mt={4}
                fontWeight={700}
                color="text.secondary"
              >
                {author.name}
              </Typography>
              <Typography
                component="p"
                variant="p"
                mt={1}
                color="text.secondary"
              >
                {author.field}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <div dangerouslySetInnerHTML={{__html : author.description.html}}></div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Author;
