import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
