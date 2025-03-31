import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import DOMPurify from "dompurify";
import CardElement from "../shared/CardElement";
import Loader from "../shared/Loader";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function Author() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: {
      slug,
    },
  });
  const { author = {} } = data || {};
  const { name, field, avatar, description, post } = author;
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Container maxWidth="lg">
          <Grid container mt={10}>
            <Grid size={{ xs: 12 }} display="flex" justifyContent="end">
              <ArrowCircleRightOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid
              size={{ xs: 12 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar
                src={avatar.url}
                sx={{ marginRight: 2, width: "250px", height: "250px" }}
                aria-label={name}
              />
              <Typography
                component="h3"
                variant="h5"
                mt={4}
                fontWeight={700}
                color="text.secondary"
              >
                {name}
              </Typography>
              <Typography
                component="p"
                variant="p"
                mt={1}
                color="text.secondary"
              >
                {field}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }} mt={5}>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description.html),
                }}
              ></div>
            </Grid>
            <Grid size={{ xs: 12 }} mt={5}>
              <Typography component="h3" variant="h5" fontWeight={700}>
                {name}'s Articles
              </Typography>
              {post.length > 0 ? (
                <Grid container spacing={2} mt={2}>
                  {post.map((post) => (
                    <Grid key={post.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                      <CardElement
                        title={post.title}
                        slug={post.slug}
                        coverPhoto={post.coverPhoto}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography mt={2} color="text.secondary">
                  {name} has not written any articles yet.
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Author;
