import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import {Provider as FavoriteProvider} from './contexts/favorite'

import App from "./components/app";

ReactDOM.render(
    <Router>
      <ThemeProvider>
        <CSSReset />
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </ThemeProvider>
    </Router>,
  document.getElementById("root")
);
