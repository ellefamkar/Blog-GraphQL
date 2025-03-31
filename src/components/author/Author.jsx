import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import DOMPurify from "dompurify"; 

function Author() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });
  
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
                src={data.author.avatar.url}
                sx={{ marginRight: 2, width: "250px", height: "250px" }}
                aria-label={data.author.name}
              />
              <Typography
                component="h3"
                variant="h5"
                mt={4}
                fontWeight={700}
                color="text.secondary"
              >
                {data.author.name}
              </Typography>
              <Typography
                component="p"
                variant="p"
                mt={1}
                color="text.secondary"
              >
                {data.author.field}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} mt={5}>
            <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.author.description.html),
                }}
              ></div>           
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Author;
