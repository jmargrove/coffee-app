import React, { Component } from "react";
import { AnalysisScreen } from "./screens/AnalysisScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
require("dotenv").config();

class App extends Component {
  render() {
    console.log("WINDOW", window);
    return (
      <ThemeProvider theme={theme}>
        <AnalysisScreen />
      </ThemeProvider>
    );
  }
}

export default App;
