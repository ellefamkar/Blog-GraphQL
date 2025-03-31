import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import DOMPurify from "dompurify";

function Blog() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: {
      slug,
    },
  });
  console.log(loading, data, error);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12 }}
              mt={9}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                component="h3"
                variant="h4"
                color="primary.dark"
                fontWeight={700}
              >
                {data.post.title}
              </Typography>
              <ArrowCircleRightOutlinedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid size={{ xs: 12 }} mt={3}>
              <img
                src={data.post.coverPhoto.url}
                alt={data.post.slug}
                width="100%"
                style={{ borderRadius: 15 }}
              />
            </Grid>
            <Grid size={{ xs: 12 }} mt={4} display="flex" alignItems="center">
              <Avatar
                src={data.post.author.avatar.url}
                sx={{ width: "60px", height: "60px", marginRight: "10px" }}
              />
              <Box component="div">
                <Typography component="p" variant="h6">
                  {data.post.author.name}
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  {data.post.author.field}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12 }} mt={1}>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.post.content.html),
                }}
              ></div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Blog;
