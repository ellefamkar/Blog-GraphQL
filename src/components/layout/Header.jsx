import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              Blog
            </Typography>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <AutoStoriesIcon />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
