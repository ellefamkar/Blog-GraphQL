import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries.js";
import Grid from "@mui/material/Grid";
import CardElement from "../shared/CardElement.jsx";

function Blogs() {
  const { loading, error, data } = useQuery(GET_BLOGS_INFO);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Grid container spacing={2}>
          {data.posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <CardElement {...post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Blogs;
