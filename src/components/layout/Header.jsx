import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function Header() {
  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
              Blog
            </Typography>
            <AutoStoriesIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
