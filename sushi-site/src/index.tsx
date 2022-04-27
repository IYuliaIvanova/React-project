import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { themes } from './constants/themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={themes}>
    <GlobalStyle />
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </ThemeProvider>
);
