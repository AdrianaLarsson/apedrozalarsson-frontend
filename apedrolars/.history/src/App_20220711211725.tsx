import React from "react";
/* import logo from "./logo.svg"; */
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/Globals";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <title>SJ Admin Depot</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link rel="favicon" href="/favicon.ico" />
      <GlobalStyle />
      <ThemeProvider></ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
