import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function Header() {
  return (
    <header>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                flex={1}
              >
                BLOG
              </Typography>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <HomeOutlinedIcon />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
