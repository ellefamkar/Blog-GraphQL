import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import React from "react";

function CardElement({title, slug, coverPhoto, author}) {
  return (
    <Card sx={{ boxShadow : "rgba(0,0,0,0.1) 0x 4px 12px", borderRadius: 4}}>
      <CardHeader
        avatar={
          <Avatar src={author.avatar.url}  sx={{ marginLeft : 2}} aria-label="author"/>
        }
        title={<Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography component="h4" variant="p" sx={{ color: "text.primary", fontWeight: 600 }}>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{margin :"10px"}} />
      <CardActions disableSpacing>
        <Button variant="outlined" size="small" sx={{width: "100%", borderRadius:3}}>Read article</Button>
      </CardActions>

    </Card>
  );
}

export default CardElement;
