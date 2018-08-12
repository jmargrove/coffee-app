import React, { Component } from "react";
import { AnalysisScreen } from "./screens/AnalysisScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AnalysisScreen />
      </ThemeProvider>
    );
  }
}

export default App;
