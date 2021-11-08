import React from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "styled-components";
import App from "./App";
import { theme } from "./theme";

import "normalize.css";
import { GlobalStyles } from "./styles";

ReactDOM.render(
  <ThemeContext.Provider value={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <GlobalStyles />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
