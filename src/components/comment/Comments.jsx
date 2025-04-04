import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENTS } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: {
      slug,
    },
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Grid container sx={{ boxShadow: 3 }} borderRadius={3} py={1} mt={5}>
          <Grid m={2} size={{ xs: 12 }}>
            <Typography
              component="p"
              variant="h6"
              fontWeight={700}
              color="primary"
              mb={2}
            >
              Comments
            </Typography>
            {data.comments.length === 0 ? (
              <p>Be the first one to comment on this post 😎.</p>
            ) : (
              data.comments.map((comment) => (
                <Grid
                  key={comment.id}
                  size={{ xs: 12 }}
                  p={2}
                  border="1px #9cb1a6 solid"
                  borderRadius={1}
                  my={2}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar>{comment.name[0]}</Avatar>
                    <Typography
                      component="span"
                      variant="p"
                      ml={1}
                      fontWeight={700}
                    >
                      {comment.name}
                    </Typography>
                  </Box>
                  <Typography
                    component="p"
                    variant="p"
                    color="secondary.light"
                    ml={1}
                    mt={2}
                    textAlign="justify"
                  >
                    {comment.text}
                  </Typography>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Comments;
