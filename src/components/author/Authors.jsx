import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  const { authors } = data || [];

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Grid container sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
          {authors.map((author, index) => (
            <React.Fragment key={author.id}>
              <Grid size={{xs:12}}>
                <Link
                  to={`/authors/${author.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 9,
                    marginTop: 9,
                    textDecoration: "none",
                  }}
                >
                  <Avatar
                    src={author.avatar.url}
                    sx={{ marginRight: 2 }}
                    aria-label="author"
                  />
                  <Box>
                    <Typography component="p" variant="p" color="text.secondary">
                      {author.name}
                    </Typography>
                    <Typography
                      component="p"
                      variant="p"
                      color="text.secondary"
                      fontSize={12}
                      sx={{ opacity: "0.6" }}>
                      {author.field}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {index !== authors.length - 1 && (
                <Grid size={12}>
                  <Divider variant="middle" />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Authors;
