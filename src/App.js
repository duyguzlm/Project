import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import Logo from './rickandmortylogo.png';
import "./index.css";
import Layout from "./Layout";
const queryClient = new QueryClient();

export default function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={theme}>
        <img className="heroimage" src={Logo} alt="logo" />
        
          <Layout />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}
const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "Roboto Mono, monospace",
    },
    h2: {
      color:"white",
      fontFamily: "Roboto Mono, monospace",
    },
    h3: {
      fontFamily: "Roboto Mono, monospace",
    },
    h4: {
      fontFamily: "Roboto Mono, monospace",
    },
    h5: {
      fontFamily: "Roboto Mono, monospace",
    },
    h6: {
      fontFamily: "Roboto Mono, monospace",
    },
  },
});